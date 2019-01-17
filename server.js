const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const axios = require('axios');
const cheerio = require('cheerio');
const Article = require('./models/article');

mongoose.connect('mongodb://localhost:27017/scraper');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001;

const debug = (msg) => {
  if (process.env.NODE_ENV === 'production') {
    return;
  }

  console.log(msg);
}

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Routes go here
app.get('/api/scrape', (req, res) => {
  Article.find()
    .then(data => {
      res.json(data);
    })
    .catch(e => {
      res.status(500).json({ message: e.message });
    })
});

app.post('/api/scrape', (req, res) => {
  debug('Scrape starting...');

  axios.get('https://old.reddit.com/r/sports')
  axios.get('https://old.reddit.com/r/travel')
  axios.get('https://old.reddit.com/r/technology')
  axios.get('https://old.reddit.com/r/food')
  axios.get('https://old.reddit.com/r/worldnews')
    .then(res => {
      debug('we got results');

      const results = [];
      const $ = cheerio.load(res.data);
      $('p.title').each((index, element) => {
        const aTag = $(element).children('a');
        const text = $(element).text();
        const href = $(aTag).attr('href');
        results.push({ title: text, link: href });
      });

      return Article.bulkWrite(results.map(r => {
        return {
          insertOne: {
            document: { ...r }
          }
        };
      }));
    })
    .then(() => {
      res.json({ message: 'complete' });
    })
    .catch(e => {
      debug(e.message);
      console.log('There was an error retrieving the results');
      res.status(500).json({ message: e.message });
    });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
