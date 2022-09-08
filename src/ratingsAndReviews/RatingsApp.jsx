import React from 'react';
import axios from 'axios';
// eslint-disable-next-line import/extensions
import ReviewList from './components/reviewList.jsx';

class RatingsApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: { results: [] },
      currentMeta: {},
      incrementState: 0,
      clickCount: 0,
      flag: false,
    };
  }

  componentDidMount() {
    // gets all reviews for a specific product - still needs a way to send product id
    axios.get('http://localhost:3001/reviews/')
      .then((response) => this.setState({ currentItem: response.data }))
      .then(this.getMeta())
      .catch((err) => (console.log(err)));
    const element = document.getElementById('rarMain');
    element.addEventListener('mousedown', this.handleWidgetClick.bind(this));
  }

  handleWidgetClick() {
    let clicks = this.state.clickCount;
    clicks += 1;
    this.setState({
      clickCount: clicks,
    });
    console.log('clicked!');
  }

  getReviews() {
    axios.get('http://localhost:3001/reviews/')
      .then((response) => this.setState({ currentItem: response.data }))
      .then(this.getMeta())
      .catch((err) => (console.log(err)));
  }

  getMeta(productId) {
    axios.get('http://localhost:3001/reviews/meta', productId)
      .then((response) => this.setState({ currentMeta: response.data }))
      .catch((err) => (console.log(err)));
  }

  refreshList() {
    let currentState = this.state.incrementState;
    currentState += 1;
    this.setState({
      incrementState: currentState,
    });
    console.log(this.state.incrementState);

    if (this.state.flag) {
      this.setState({
        flag: false,
      });
    } else {
      this.setState({
        flag: true,
      });
    }
  }

  addReview(message) {
    axios.post('http://localhost:3001/reviews/addReview', message)
      .then((response) => this.setState({ helpfulCount: response.data }))
      .catch((error) => console.log('error posting to server', error));
  }

  postHelpful(ID) {
    console.log(ID);
    axios.put('http://localhost:3001/reviews/putHelpful', ID)
      .then((response) => console.log('POST new helpful request to server successful', response))
      .catch((error) => console.log('error posting to server', error));
  }

  postReport(ID) {
    console.log(ID);
    axios.put('http://localhost:3001/reviews/putReport', ID)
      .then((response) => console.log('POST new report request to server successful', response))
      .catch((error) => console.log('error posting to server', error));
  }

  render() {
    const { currentItem, currentMeta, flag } = this.state;
    const { setNumberReviews, setAverageStars, currentProductName } = this.props;
    //const { addReview, postHelpful } = this;
    setNumberReviews(currentItem.results.length);
    return (
      <div id="rarMain">
        <ReviewList
          productInfo={currentItem}
          flag={flag}
          itemMeta={currentMeta}
          currentProductName={currentProductName}
          addReview={this.addReview.bind(this)}
          postReport={this.postReport.bind(this)}
          setAverageStars={setAverageStars}
          postHelpful={this.postHelpful.bind(this)}
          refreshList={this.getReviews.bind(this)}
        />
      </div>
    );
  }
}

export default RatingsApp;
