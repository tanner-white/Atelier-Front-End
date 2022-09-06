import React, {
  useState, useEffect, useImperativeHandle, forwardRef, useCallback,
} from 'react';
import PropTypes from 'prop-types';

function AddAnswer({ handleSubmit, questionBody, currentProductName }, ref) {
  const [display, setDisplay] = useState(false);
  const [answer, setAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);

  const close = useCallback(() => setDisplay(false), []);

  const onSubmit = (event) => {
    event.preventDefault();
    const input = {
      body: answer,
      name: nickname,
      email,
      photos,
    };
    handleSubmit(input);
    close();
  };

  const onInput = (event) => {
    const temp = photos;
    if (Object.keys(event.target.files).length <= 5) {
      Object.values(event.target.files).forEach(
        (file) => {
          temp.push(URL.createObjectURL(file));
        },
      );
    }
    setPhotos(temp.slice(0, 5));
  };

  useImperativeHandle(ref, () => ({
    open: () => setDisplay(true),
    close: () => setDisplay(false),
  }), []);

  const handleEscape = useCallback((event) => {
    if (event.keyCode === 27) close();
    if (event.target.className !== 'QandA-modal-content'
    && event.target.className !== 'amodal') {
      close();
    }
  }, [close]);

  useEffect(() => {
    if (display) {
      document.addEventListener('keydown', handleEscape, false);
      document.addEventListener('click', handleEscape, false);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape, false);
      document.removeEventListener('click', handleEscape, false);
    };
  }, [handleEscape, display]);

  if (display) {
    return (
      <div className="QandA-modal">
        <div className="QandA-modal-content">
          <div>
            <h3>Submit your Answer</h3>
            <h4>
              {currentProductName}
              &nbsp;:&nbsp;
              {questionBody}
            </h4>
            <textarea className="amodal" placeholder="Add Answer Here..." maxLength="1000" onChange={(e) => setAnswer(e.target.value)} />
            <br />
            <input className="amodal" type="text" maxLength="60" placeholder="Example: jack543!" onChange={(e) => setNickname(e.target.value)} />
            <input className="amodal" type="text" maxLength="60" placeholder="Example: jack@email.com" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <form>
            <input className="amodal" type="file" name="upload" accept="image/*" multiple onInput={onInput} />
          </form>
          <button className="amodal" type="submit" onClick={onSubmit}>submit</button>
        </div>
      </div>
    );
  } return (null);
}

AddAnswer.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default forwardRef(AddAnswer);
