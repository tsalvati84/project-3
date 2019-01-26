import React from 'react'
import { css } from 'glamor'
import { withRouter } from 'react-router-dom'
import { Carousel } from 'react-bootstrap';
import { Col, Row, Container } from "../components/Grid";
import SignIn from './SignIn'
import SignUp from './SignUp'

class Authenticator extends React.Component {
  state = {
    showSignIn: true
  }
  switchState = (showSignIn) => {
    this.setState({
      showSignIn
    })
  }
  render() {
    const { showSignIn } = this.state
    return (
      <div>
        {
          showSignIn ? (
            <SignIn />
          ) : (
            <SignUp />
          )
        }
        <div {...css(styles.buttonContainer)}>
          <p
            {...css(styles.button, showSignIn && styles.underline)}
            onClick={() => this.switchState(true)}
          >Sign In</p>
          <p
            onClick={() => this.switchState(false)}
            {...css(styles.button, !showSignIn && styles.underline)}
          >Sign Up</p>
        </div>
        <Row>
  
        <Col size="md-4">
              <Carousel>
                <Carousel.Item>
                  <img width={500} height={500} alt="500x500" src="https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2017/04/19000521/051136053-01-five-minute-marinated-grilled-skirt-steak-recipe-thumb1x1.jpg" />
                  <Carousel.Caption>
                    <h3>Steak Recipes</h3>
                    <p>If this doesn't make you hungry, are you even human?</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img width={500} height={500} alt="500x500" src="https://www.spendwithpennies.com/wp-content/uploads/2018/02/Quick-Chicken-Noodle-Soup-22-500x500.jpg" />
                  <Carousel.Caption>
                    <h3>Chicken Noodle Super Soup</h3>
                    <p>Comfort within 30 minutes in this quick recipe</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img width={500} height={500} alt="500x500" src="https://www.crazyforcrust.com/wp-content/uploads/2017/01/No-Bake-Tiramisu-Shortbread-Dessert-4-of-7-500x500.jpg" />
                  <Carousel.Caption>
                    <h3>Tiramisu with missing the baking</h3>
                    <p>No-Bake Tiramisu is quick and easy.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>;
</Col>

            <Col size="md-4">
              <Carousel>
                <Carousel.Item>
                  <img width={500} height={500} alt="500x500" src="https://static1.squarespace.com/static/5475c689e4b05a135b085d65/t/5b8cc2b470a6adae1d36fdf2/1537167639254/Budget+Travel?format=500w" />
                  <Carousel.Caption>
                    <h3>2019 Travel Deals</h3>
                    <p>European and Carribean Trips are on the low!</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img width={500} height={500} alt="500x500" src="http://www.diabetesforecast.org/2017/jul-aug/images/coastal-town-overseas-travel-JA17.jpg" />
                  <Carousel.Caption>
                    <h3>Weekend Getaway</h3>
                    <p>New ideas to get fun in the sun</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img width={500} height={500} alt="500x500" src="https://static1.squarespace.com/static/53e145bee4b0d6343fadc6a1/t/586bc97a15d5db01823967e6/1483458957980/" />
                  <Carousel.Caption>
                    <h3>Winter Wonderland</h3>
                    <p>Skii, Snowboard, or relax in the cabin with this Aspen treat</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>;


</Col>

            <Col size="md-4">
              <Carousel>
                <Carousel.Item>
                  <img width={500} height={500} alt="500x500" src="https://cdn2.newsok.biz/cache/sq500-a5d0728d8c501e8d32f7e6e761f38490.jpg" />
                  <Carousel.Caption>
                    <h3>OKC</h3>
                    <p>New season means new techniques to win</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img width={500} height={500} alt="500x500" src="https://static1.squarespace.com/static/58dd81fabebafb897532223d/58e3dc60f5e2312cc93e9605/595139e9e3df28fa5fd3b845/1499721548276/MLB+Justin+Verlander+2.jpg?format=500w" />
                  <Carousel.Caption>
                    <h3>MLB Starting Off Strong</h3>
                    <p>Spring Training </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img width={500} height={500} alt="500x500" src="https://i.pinimg.com/originals/97/02/fa/9702fa26285aedb962cd44ec8c879d7b.jpg" />
                  <Carousel.Caption>
                    <h3>Chicago Natives Get Wild</h3>
                    <p>Adding another win to the streak!</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>;


</Col>
</Row>
      </div>
    )
  }
}

export default withRouter(Authenticator)

const styles = {
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    width: '100px',
    paddingBottom: '10px',
    cursor: 'pointer',
    borderBottom: '2px solid transparent'
  },
  underline: {
    borderBottomColor: '#ddd'
  }
}