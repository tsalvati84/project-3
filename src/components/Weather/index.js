import ReactDOM from 'react-dom';
import { GenericWeather } from 'Weather';

 
ReactDOM.render(
  <GenericWeather city="Phoenix" temp= "17.61" status="sun" />,
  document.getElementById('root')
)

export default GenericWeather