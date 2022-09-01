import React from 'react';

class AddReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: { display: 'none' },
    };
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
      style: { display: 'block' },
    });
  }

  render() {
    return (
      <div id="modalChunk">
        <button type="button" id="modalButton" onClick={this.handleModalClick.bind(this)}>
          ADD A REVIEW
        </button>
        <div id="myModal" className="modal" style={this.state.style}>
          <div className="modal-content">
            <span className="close">
              Make it go bye-bye;
              <button id="modalSubmit" type="button" style={this.state.style} onClick={this.handleSubmit.bind(this)}>Submit</button>
            </span>
            <p>Look at my Modal, is it not grand?</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AddReview;
