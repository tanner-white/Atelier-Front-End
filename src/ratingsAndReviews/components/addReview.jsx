import React from 'react';
import StarRatings from 'react-star-ratings';

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingStar: 0,
      ratingStarCode: { 1: 'Poor', 2: 'Fair', 3: 'Average', 4: 'Good', 5: 'Great'},
      style: { display: 'none' },
      stylePics: { display: 'none' },
      productId: this.props.productId || 66642,
      revSum: '',
      revbody: '',
      userEmail: '',
      userNickname: '',
      userPhotos: ['https://placebear.com/g/200/300'],
      recommendedBoolean: null,
      ratings: {
        1: 0, 2: 0, 3: 0, 4: 0, 5: 0,
      },
      Characteristics: {
        14: 5,
        15: 5,
        16: 5,
        17: 5,
        18: 5,
        19: 5,
      },
    };

    this.handleWindowClick = this.handleWindowClick.bind(this);
  }

  componentDidMount() {
    const listenerForm = document.getElementById('myModal');
    listenerForm.addEventListener('mousedown', this.handleWindowClick);
    const listenerPics = document.getElementById('myPicModal');
    listenerPics.addEventListener('mousedown', this.handleWindowClick);
  }

  componentWillUnmount() {
    const listenerForm = document.getElementById('myModal');
    listenerForm.removeEventListener('mousedown', this.handleWindowClick);
    const listenerPics = document.getElementById('myPicModal');
    listenerPics.removeEventListener('mousedown', this.handleWindowClick);
  }

  handleSubmit(event) {
    event.preventDefault();
    // invoke axios call to add a review
    const {
      ratingStar, recommendedBoolean, revSum, userPhotos,
      revbody, productId, userEmail, userNickname, Characteristics,
    } = this.state;
    const { addReview } = this.props;

    const message = {
      product_id: productId,
      rating: ratingStar,
      summary: revSum,
      body: revbody,
      recommend: recommendedBoolean,
      name: userNickname,
      email: userEmail,
      photos: userPhotos,
      characteristics: Characteristics,
    };

    addReview(message);

    this.setState({
      style: { display: 'none' },
    });
  }

  handleModalClick(event) {
    event.preventDefault();

    this.setState({
      style: { display: 'flex' },
    });
  }

  handlePhotoClick(event) {
    event.preventDefault();

    this.setState({
      stylePics: { display: 'block' },
    });
  }

  handleWindowClick(event) {
    if (event.target === document.getElementById('myModal')) {
      this.setState({
        style: { display: 'none' },
      });
    }

    if (event.target === document.getElementById('myPicModal')) {
      this.setState({
        stylePics: { display: 'none' },
      });
    }
  }

  handlebodyChange(event) {
    const text = event.target.value;
    this.setState({
      revbody: text,
    });
  }

  handleSizeChange(event) {
    this.setState({
      size: { id: 14, value: event.target.value },
    });
  }

  handleWidthChange(event) {
    this.setState({
      width: { id: 15, value: event.target.value },
    });
  }

  handleComfortChange(event) {
    this.setState({
      comfort: { id: 16, value: event.target.value },
    });
  }

  handleQualityChange(event) {
    this.setState({
      quality: { id: 17, value: event.target.value },
    });
  }

  handleLengthChange(event) {
    this.setState({
      length: { id: 18, value: event.target.value },
    });
  }

  handleFitChange(event) {
    this.setState({
      fit: { id: 19, value: event.target.value },
    });
  }

  handleRecRadioClick(event) {
    if (event.target.value === 'Yes') {
      this.setState({
        recommendedBoolean: true,
      });
    } else if (event.target.value === 'No') {
      this.setState({
        recommendedBoolean: false,
      });
    }
    console.log(this.state.recommendedBoolean);
  }

  handleSummaryChange(event) {
    this.setState({
      revSum: event.target.value,
    });
  }

  handleNicknameChange(event) {
    this.setState({
      userNickname: event.target.value,
    });
  }

  handleEmailChange(event) {
    this.setState({
      userEmail: event.target.value,
    });
  }

  changeRating(event) {
    // todo: hook this up to state values for ratings
    const eventVal = event;
    const { ratings } = this.state;
    this.setState({
      ratingStar: event,
    });
  }

  render() {
    const { style, revbody, stylePics} = this.state;
    const { currentProductName } = this.props;
    return (
      <div id="modalChunk">
        <button type="button" id="rar_tileBoxButtons" onClick={this.handleModalClick.bind(this)}>
          ADD A REVIEW +
        </button>
        <div id="myPicModal" className="modal" style={stylePics}>
          <div id="myPicModalContent">
            Add Product Pictures Below
            <input type="file" id="myPicsImagesInput" name="myPicsImagesInput" multiple accept="image/*" />
            <button id="myPicsModalButtons" type="button">Upload All</button>
          </div>
        </div>
        <div id="myModal" className="modal" style={style}>
          <div id="myModal-content">
            <h2 id="rar_modalTitle">Write Your Review</h2>
            <h2 id="rar_modalProduct">
              About the
              {currentProductName}
            </h2>
            <div id="rar_starRatingModal">
              <p>Overall rating</p>
              <div id="rar_starRatingModal2">
                <StarRatings
                  name="react-star-rating"
                  totalStars={5}
                  rating={this.state.ratingStar}
                  changeRating={this.changeRating.bind(this)}
                  starRatedColor="gold"
                  starHoverColor="gold"
                  starDimension="3vw"
                  starSpacing="3px"
                />
              </div>
              <small>{(this.state.ratingStar > 0) ? `- ${this.state.ratingStarCode[this.state.ratingStar]}` : ''}</small>
            </div>
            <div id="checkBoxRecommend">
              <small>Do you recommend this product?</small>
              <br />
              <div id="rar_yesNo">
                <label htmlFor="happy">
                  Yes
                  <input type="radio" id="recommendBoolean" name="approve" value="Yes" onChange={this.handleRecRadioClick.bind(this)} />
                </label>
                <label htmlFor="sad">
                  No
                  <input type="radio" id="recommendBoolean" name="approve" value="No" onChange={this.handleRecRadioClick.bind(this)} />
                </label>
              </div>
            </div>
            <div>
              <table id="radioTable2">
                <tr id="rar_rowName">
                  <th id="rar_radioTableHeader"> </th>
                  <th id="rar_radioTableHeader1">1 </th>
                  <th id="rar_radioTableHeader">2 </th>
                  <th id="rar_radioTableHeader">3 </th>
                  <th id="rar_radioTableHeader">4 </th>
                  <th id="rar_radioTableHeader">5 </th>
                </tr>
                <tr id="rar_radioTableRow">
                  <td>Size</td>
                  <td id="rar_eachColumn">
                    <input type="radio" id="radioTableSelector" name="rar_row1" value="1.000" onChange={this.handleSizeChange.bind(this)} />
                    <p>A size too small</p>
                  </td>
                  <td id="rar_eachColumn">
                    <input type="radio" id="radioTableSelector" name="rar_row1" value="2.000" onChange={this.handleSizeChange.bind(this)} />
                    <p>1/2 a size too small</p>
                  </td>
                  <td id="rar_eachColumn">
                    <input type="radio" id="radioTableSelector" name="rar_row1" value="3.000" onChange={this.handleSizeChange.bind(this)} />
                    <p>Perfect</p>
                  </td>
                  <td id="rar_eachColumn">
                    <input type="radio" id="radioTableSelector" name="rar_row1" value="4.000" onChange={this.handleSizeChange.bind(this)} />
                    <p>1/2 a size too big</p>
                  </td>
                  <td id="rar_eachColumn">
                    <input type="radio" id="radioTableSelector" name="rar_row1" value="5.000" onChange={this.handleSizeChange.bind(this)} />
                    <p>A size too wide</p>
                  </td>
                </tr>
                <tr id="rar_radioTableRow">
                  <td>Width</td>
                  <td id="rar_eachColumn">
                    <input type="radio" id="radioTableSelector" name="rar_row2" value="1.000" onChange={this.handleWidthChange.bind(this)} />
                    <p>Too narrow</p>
                  </td>
                  <td id="rar_eachColumn">
                    <input type="radio" id="radioTableSelector" name="rar_row2" value="2.000" onChange={this.handleWidthChange.bind(this)} />
                    <p>Slightly narrow</p>
                  </td>
                  <td id="rar_eachColumn">
                    <input type="radio" id="radioTableSelector" name="rar_row2" value="3.000" onChange={this.handleWidthChange.bind(this)} />
                    <p>Perfect</p>
                  </td>
                  <td id="rar_eachColumn">
                    <input type="radio" id="radioTableSelector" name="rar_row2" value="4.000" onChange={this.handleWidthChange.bind(this)} />
                    <p>Slightly wide</p>
                  </td>
                  <td id="rar_eachColumn">
                    <input type="radio" id="radioTableSelector" name="rar_row2" value="5.000" onChange={this.handleWidthChange.bind(this)} />
                    <p>Too wide</p>
                  </td>
                </tr>
                <tr id="rar_radioTableRow">
                  <td>Comfort</td>
                  <td>
                    <input type="radio" id="radioTableSelector" name="rar_row3" value="1.000" onChange={this.handleComfortChange.bind(this)} />
                    <p>Uncomfortable</p>
                  </td>
                  <td>
                    <input type="radio" id="radioTableSelector" name="rar_row3" value="2.000" onChange={this.handleComfortChange.bind(this)} />
                    <p>Slightly uncomfortable</p>
                  </td>
                  <td>
                    <input type="radio" id="radioTableSelector" name="rar_row3" value="3.000" onChange={this.handleComfortChange.bind(this)} />
                    <p>Ok</p>
                  </td>
                  <td>
                    <input type="radio" id="radioTableSelector" name="rar_row3" value="4.000" onChange={this.handleComfortChange.bind(this)} />
                    <p>Comfortable</p>
                  </td>
                  <td>
                    <input type="radio" id="radioTableSelector" name="rar_row3" value="5.000" onChange={this.handleComfortChange.bind(this)} />
                    <p>Perfect</p>
                  </td>
                </tr>
                <tr id="rar_radioTableRow">
                  <td>Quality</td>
                  <td>
                    <input type="radio" id="radioTableSelector" name="rar_row4" value="1.000" onChange={this.handleQualityChange.bind(this)} />
                    <p>Poor</p>
                  </td>
                  <td>
                    <input type="radio" id="radioTableSelector" name="rar_row4" value="2.000" onChange={this.handleQualityChange.bind(this)} />
                    <p>Below average</p>
                  </td>
                  <td>
                    <input type="radio" id="radioTableSelector" name="rar_row4" value="3.000" onChange={this.handleQualityChange.bind(this)} />
                    <p>What I expected</p>
                  </td>
                  <td>
                    <input type="radio" id="radioTableSelector" name="rar_row4" value="4.000" onChange={this.handleQualityChange.bind(this)} />
                    <p>Pretty great</p>
                  </td>
                  <td>
                    <input type="radio" id="radioTableSelector" name="rar_row4" value="5.000" onChange={this.handleQualityChange.bind(this)} />
                    <p>Perfect</p>
                  </td>
                </tr>
                <tr id="rar_radioTableRow">
                  <td>Length</td>
                  <td>
                    <input type="radio" id="radioTableSelector" name="rar_row5" value="1.000" onChange={this.handleLengthChange.bind(this)} />
                    <p>Runs short</p>
                  </td>
                  <td>
                    <input type="radio" id="radioTableSelector" name="rar_row5" value="2.000" onChange={this.handleLengthChange.bind(this)} />
                    <p>Runs slightly short</p>
                  </td>
                  <td>
                    <input type="radio" id="radioTableSelector" name="rar_row5" value="3.000" onChange={this.handleLengthChange.bind(this)} />
                    <p>Perfect</p>
                  </td>
                  <td>
                    <input type="radio" id="radioTableSelector" name="rar_row5" value="4.000" onChange={this.handleLengthChange.bind(this)} />
                    <p>Runs slightly long</p>
                  </td>
                  <td>
                    <input type="radio" id="radioTableSelector" name="rar_row5" value="5.000" onChange={this.handleLengthChange.bind(this)} />
                    <p>Runs long</p>
                  </td>
                </tr>
                <tr id="rar_radioTableRow6">
                  <td>Fit</td>
                  <td>
                    <input type="radio" id="radioTableSelector" name="rar_row6" value="1.000" onChange={this.handleFitChange.bind(this)} />
                    <p>Runs tight</p>
                  </td>
                  <td id="rar_td_header">
                    <input type="radio" id="radioTableSelector" name="rar_row6" value="2.000" onChange={this.handleFitChange.bind(this)} />
                    <p>Runs slightly tight</p>
                  </td>
                  <td id="rar_td_header">
                    <input type="radio" id="radioTableSelector" name="rar_row6" value="3.000" onChange={this.handleFitChange.bind(this)} />
                    <p>Perfect</p>
                  </td>
                  <td id="rar_td_header">
                    <input type="radio" id="radioTableSelector" name="rar_row6" value="4.000" onChange={this.handleFitChange.bind(this)} />
                    <p>Runs slightly long</p>
                  </td>
                  <td id="rar_td_header">
                    <input type="radio" id="radioTableSelector" name="rar_row6" value="5.000" onChange={this.handleFitChange.bind(this)} />
                    <p>Runs long</p>
                  </td>
                </tr>
              </table>
            </div>
            <small>Review summary</small>
            <label htmlFor="revSum">
              <input id="rar_reviewSummaryInput" name="revSum" type="text" onChange={this.handleSummaryChange.bind(this)} />
              <p id="rar_reviewSummaryInput">Example: Best purchase ever!</p>
            </label>
            <small>Why did you like the product or not?</small>
            <textarea id="rar_summaryBox" type="text" name="reviewSummary" minLength="50" onChange={this.handlebodyChange.bind(this)}>Write here...</textarea>
            <div>
              {(50 - revbody.length > 0 === true) ? ('Minimum required characters left: ' + '' + (50 - revbody.length)) : 'Minimum reached'}
              {revbody.length > 1000 ? 'Maximum characteres reached' : ''}
            </div>
            <button id="rar_uploadPhotos" type="button" onClick={this.handlePhotoClick.bind(this)}>Upload Photos</button>
            <small>What is your nickname?</small>
            <input id="rar_nicknameInput" type="text" onChange={this.handleNicknameChange.bind(this)} />
            <small>What is your email?</small>
            <small>For authentication reasons, you will not be emailed</small>
            <input id="rar_emailInput" type="text" onChange={this.handleEmailChange.bind(this)} />
            <div className="close">
              <button id="rar_modalSubmit" type="button" style={style} onClick={this.handleSubmit.bind(this)}>Submit</button>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default AddReview;
