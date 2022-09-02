import React from 'react';

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: { display: 'none' },
      ratings: { 1: null, 2: null, 3: null, 4: null, 5: null },
      size: { id: 14, value: null },
      width: { id: 15, value: null },
      comfort: { id: 16, value: null },
      quality: { id: 17, value: null },
      length: { id: 18, value: null },
      fit: { id: 19, value: null },
    };

    this.handleWindowClick = this.handleWindowClick.bind(this);
  }

  componentDidMount() {
    const listener = document.getElementById('myModal');
    listener.addEventListener('mousedown', this.handleWindowClick);
  }

  componentWillUnmount() {
    const listener = document.getElementById('myModal');
    listener.removeEventListener('mousedown', this.handleWindowClick);
  }

  handleSubmit(event) {
    event.preventDefault();
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

  handleWindowClick(event) {
    // console.log(event.target, document.getElementById('myModal'));
    // This is really odd, it seems like this should be !event.... but when I click the background
    // that is actually the 'myModal' div!
    if (event.target === document.getElementById('myModal')) {
      this.setState({
        style: { display: 'none' },
      });
    }
  }

  handleSizeChange(event) {
    this.setState({
      size: {id: 14, value: event.target.value},
    });
  }

  handleWidthChange(event) {
    this.setState({
      width: {id: 15, value: event.target.value},
    });
  }

  handleComfortChange(event) {
    this.setState({
      comfort: {id: 16, value: event.target.value},
    });
  }

  handleQualityChange(event) {
    this.setState({
      quality: {id: 17, value: event.target.value},
    });
  }

  handleLengthChange(event) {
    this.setState({
      length: {id: 18, value: event.target.value},
    });
  }

  handleFitChange(event) {
    this.setState({
      fit: {id: 19, value: event.target.value},
    });
  }

  render() {
    return (
      <div id="modalChunk">
        <button type="button" id="modalButton" onClick={this.handleModalClick.bind(this)}>
          ADD A REVIEW
        </button>
        <div id="myModal" className="modal" style={this.state.style}>
          <div id="myModal-content">
            <h3>Write Your Review</h3>
            <p>About the TANNER</p>
            <input type="text" name="Type here" />
            <select id="addReviewSelector" onChange={this.handleSizeChange.bind(this)}>
              <option value="1">1 star - &quot;Poor&quot;</option>
              <option value="2">2 stars - &quot;Fair&quot;</option>
              <option value="3">3 stars - &quot;Average&quot;</option>
              <option value="4">4 stars - &quot;Good&quot;</option>
              <option value="5">5 stars - &quot;Great&quot;</option>
            </select>
            <div id="checkBoxRecommend">
              <label htmlFor="happy">
                Yes
                <input type="radio" id="recommendBoolean" name="happy" value="Yes" checked />
              </label>
              <label htmlFor="sad">
                No
                <input type="radio" id="recommendBoolean" name="sad" value="No" />
              </label>
            </div>
            <div>
              <table id="radioTable2">
                <tr id="rar_rowName">
                  <th id="rar_radioTableHeader"> </th>
                  <th id="rar_radioTableHeader">1 </th>
                  <th id="rar_radioTableHeader">2 </th>
                  <th id="rar_radioTableHeader">3 </th>
                  <th id="rar_radioTableHeader">4 </th>
                  <th id="rar_radioTableHeader">5 </th>
                </tr>
                <tr id="rar_radioTableRow">
                  <td>Size</td>
                  <td id="rar_eachColumn">
                    A size too small
                    <input type="radio" id="radioTableSelector" name="rar_row1" value="1.000" onChange={this.handleSizeChange.bind(this)} />
                  </td>
                  <td id="rar_eachColumn">
                    1/2 a size too small
                    <input type="radio" id="radioTableSelector" name="rar_row1" value="2.000" onChange={this.handleSizeChange.bind(this)} />
                  </td>
                  <td id="rar_eachColumn">
                    Perfect
                    <input type="radio" id="radioTableSelector" name="rar_row1" value="3.000" onChange={this.handleSizeChange.bind(this)} />
                  </td>
                  <td id="rar_eachColumn">
                    1/2 a size too big
                    <input type="radio" id="radioTableSelector" name="rar_row1" value="4.000" onChange={this.handleSizeChange.bind(this)} />
                  </td>
                  <td id="rar_eachColumn">
                    A size too wide
                    <input type="radio" id="radioTableSelector" name="rar_row1" value="5.000" onChange={this.handleSizeChange.bind(this)} />
                  </td>
                </tr>
                <tr id="rar_radioTableRow">
                  <td>Width</td>
                  <td id="rar_eachColumn">
                    Too narrow
                    <input type="radio" id="radioTableSelector" name="rar_row2" value="1.000" onChange={this.handleWidthChange.bind(this)} />
                  </td>
                  <td id="rar_eachColumn">
                    Slightly narrow
                    <input type="radio" id="radioTableSelector" name="rar_row2" value="2.000" onChange={this.handleWidthChange.bind(this)} />
                  </td>
                  <td id="rar_eachColumn">
                    Perfect
                    <input type="radio" id="radioTableSelector" name="rar_row2" value="3.000" onChange={this.handleWidthChange.bind(this)} />
                  </td>
                  <td id="rar_eachColumn">
                    Slightly wide
                    <input type="radio" id="radioTableSelector" name="rar_row2" value="4.000" onChange={this.handleWidthChange.bind(this)} />
                  </td>
                  <td id="rar_eachColumn">
                    Too wide
                    <input type="radio" id="radioTableSelector" name="rar_row2" value="5.000" onChange={this.handleWidthChange.bind(this)} />
                  </td>
                </tr>
                <tr id="rar_radioTableRow">
                  <td>Comfort</td>
                  <td>
                    Uncomfortable
                    <input type="radio" id="radioTableSelector" name="rar_row3" value="1.000" onChange={this.handleComfortChange.bind(this)} />
                  </td>
                  <td>
                    Slightly uncomfortable
                    <input type="radio" id="radioTableSelector" name="rar_row3" value="2.000" onChange={this.handleComfortChange.bind(this)} />
                  </td>
                  <td>
                    Ok
                    <input type="radio" id="radioTableSelector" name="rar_row3" value="3.000" onChange={this.handleComfortChange.bind(this)} />
                  </td>
                  <td>
                    Comfortable
                    <input type="radio" id="radioTableSelector" name="rar_row3" value="4.000" onChange={this.handleComfortChange.bind(this)} />
                  </td>
                  <td>
                    Perfect
                    <input type="radio" id="radioTableSelector" name="rar_row3" value="5.000" onChange={this.handleComfortChange.bind(this)} />
                  </td>
                </tr>
                <tr id="rar_radioTableRow">
                  <td>Quality</td>
                  <td>
                    Poor
                    <input type="radio" id="radioTableSelector" name="rar_row4" value="1.000" onChange={this.handleQualityChange.bind(this)} />
                  </td>
                  <td>
                    Below average
                    <input type="radio" id="radioTableSelector" name="rar_row4" value="2.000" onChange={this.handleQualityChange.bind(this)} />
                  </td>
                  <td>
                    What I expected
                    <input type="radio" id="radioTableSelector" name="rar_row4" value="3.000" onChange={this.handleQualityChange.bind(this)} />
                  </td>
                  <td>
                    Pretty great
                    <input type="radio" id="radioTableSelector" name="rar_row4" value="4.000" onChange={this.handleQualityChange.bind(this)} />
                  </td>
                  <td>
                    Perfect
                    <input type="radio" id="radioTableSelector" name="rar_row4" value="5.000" onChange={this.handleQualityChange.bind(this)} />
                  </td>
                </tr>
                <tr id="rar_radioTableRow">
                  <td>Length</td>
                  <td>
                    Runs short
                    <input type="radio" id="radioTableSelector" name="rar_row5" value="1.000" onChange={this.handleLengthChange.bind(this)} />
                  </td>
                  <td>
                    Runs slightly short
                    <input type="radio" id="radioTableSelector" name="rar_row5" value="2.000" onChange={this.handleLengthChange.bind(this)} />
                  </td>
                  <td>
                    Perfect
                    <input type="radio" id="radioTableSelector" name="rar_row5" value="3.000" onChange={this.handleLengthChange.bind(this)} />
                  </td>
                  <td>
                    Runs slightly long
                    <input type="radio" id="radioTableSelector" name="rar_row5" value="4.000" onChange={this.handleLengthChange.bind(this)} />
                  </td>
                  <td>
                    Runs long
                    <input type="radio" id="radioTableSelector" name="rar_row5" value="5.000" onChange={this.handleLengthChange.bind(this)} />
                  </td>
                </tr>
                <tr id="rar_radioTableRow6">
                  <td>Fit</td>
                  <td id="rar_td_header">
                    Runs tight
                    <input type="radio" id="radioTableSelector" name="rar_row6" value="1.000" onChange={this.handleFitChange.bind(this)} />
                  </td>
                  <td id="rar_td_header">
                    Runs slightly tight
                    <input type="radio" id="radioTableSelector" name="rar_row6" value="2.000" onChange={this.handleFitChange.bind(this)} />
                  </td>
                  <td id="rar_td_header">
                    Perfect
                    <input type="radio" id="radioTableSelector" name="rar_row6" value="3.000" onChange={this.handleFitChange.bind(this)} />
                  </td>
                  <td id="rar_td_header">
                    Runs slightly long
                    <input type="radio" id="radioTableSelector" name="rar_row6" value="4.000" onChange={this.handleFitChange.bind(this)} />
                  </td>
                  <td id="rar_td_header">
                    Runs long
                    <input type="radio" id="radioTableSelector" name="rar_row6" value="5.000" onChange={this.handleFitChange.bind(this)} />
                  </td>
                </tr>
              </table>
              {/* <br />
              <div className="rar_selectorTable">
                <div className="rar_selectorTableHeaders">
                  <div>Metric</div>
                  <div className="rar_selectorTableColumnOne">1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                </div>
                <div className="rar_selectorTableRow">
                  <div>Size</div>
                  <div className="rar_selectorTableColumnOne">1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                </div>
                <div className="rar_selectorTableRow">
                  <div>Width</div>
                  <div className="rar_selectorTableColumnOne">1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                </div>
                <div className="rar_selectorTableRow">
                  <div>Comfort</div>
                  <div className="rar_selectorTableColumnOne">1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                </div>
                <div className="rar_selectorTableRow">
                  <div>Quality</div>
                  <div className="rar_selectorTableColumnOne">1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                </div>
                <div className="rar_selectorTableRow">
                  <div>Length</div>
                  <div className="rar_selectorTableColumnOne">1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                </div>
                <div className="rar_selectorTableRow">
                  <div>Fit</div>
                  <div className="rar_selectorTableColumnOne">1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                </div>
              </div> */}
            </div>
            <div className="close">
              <button id="modalSubmit" type="button" style={this.state.style} onClick={this.handleSubmit.bind(this)}>Submit</button>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default AddReview;
