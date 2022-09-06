import React, {
  useState, useEffect, useImperativeHandle, forwardRef, useCallback,
} from 'react';
import PropTypes from 'prop-types';

function AddQuestion({ submit, props, currentProductName }, ref) {
  const [display, setDisplay] = useState(false);
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const close = useCallback(() => setDisplay(false), []);

  const onSubmit = (event) => {
    event.preventDefault();
    const question = {
      body,
      name,
      email,
      product_id: props.product_id,
    };
    submit(question);
    close();
  };

  useImperativeHandle(ref, () => ({
    open: () => setDisplay(true),
    close: () => setDisplay(false),
  }), []);

  const handleEscape = useCallback((event) => {
    console.log(event.target);
    if (event.keyCode === 27) close();
    if (event.target.className !== 'QandA-modal-content'
    && event.target.className !== 'qmodal') {
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
            <h3>Ask Your Question</h3>
            <h4>
              About&nbsp;
              {currentProductName}
            </h4>
            <textarea className="qmodal" placeholder="Add Question Here..." maxLength="1000" onChange={(e) => setBody(e.target.value)} />
            <br />
            <input className="qmodal" type="text" maxLength="60" placeholder="Example: jackson11!" onChange={(e) => setName(e.target.value)} />
            <input className="qmodal" type="text" maxLength="60" placeholder="Example: jack@email.com" onChange={(e) => setEmail(e.target.value)} />
          </div>
          For privacy reasons, do not use your full name or email address
          <button className="qmodal" type="submit" onClick={(e) => onSubmit(e)}>submit</button>
          <br />
          For authentication reasons, you will not be emailed” will appear
        </div>
      </div>
    );
  } return (null);
}

AddQuestion.propTypes = {
  submit: PropTypes.func.isRequired,
  props: PropTypes.shape.isRequired,
  product_id: PropTypes.number.isRequired,
};

export default forwardRef(AddQuestion);
