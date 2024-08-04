// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReviews: 0}

  back = () => {
    const {activeReviews} = this.state

    if (activeReviews > 0) {
      this.setState(prevState => ({activeReviews: prevState.activeReviews - 1}))
    }
  }

  front = () => {
    const {activeReviews} = this.state
    const {reviewsList} = this.props
    if (activeReviews < reviewsList.length - 1) {
      this.setState(prevState => ({activeReviews: prevState.activeReviews + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReviews} = this.state
    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">Reviews</h1>
          <img
            className="image"
            src={reviewsList[activeReviews].imgUrl}
            alt={reviewsList[activeReviews].username}
          />
          <div className="card">
            <button
              className="button"
              onClick={this.back}
              type="button"
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="arrow"
              />
            </button>
            <h1 className="heading-1">{reviewsList[activeReviews].username}</h1>
            <button
              className="button"
              onClick={this.front}
              type="button"
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="arrow"
              />
            </button>
          </div>
          <p className="para">{reviewsList[activeReviews].companyName}</p>
          <p className="para-1">{reviewsList[activeReviews].description}</p>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
