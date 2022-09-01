import React, {
  useState, useEffect, useImperativeHandle, forwardRef, useCallback,
} from 'react';

function AddQuestion({ children, submit, props }, ref) {
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
      product_id: 66642,
    };
    submit(question);
    close();
  };

  useImperativeHandle(ref, () => ({
    open: () => setDisplay(true),
    close: () => setDisplay(false),
  }), []);

  const handleEscape = useCallback((event) => {
    if (event.keyCode === 27) close();
  }, [close]);

  useEffect(() => {
    if (display) {
      document.addEventListener('keydown', handleEscape, false);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape, false);
    };
  }, [handleEscape, display]);

  if (display) {
    return (
      <div className="QandA-modal">
        <div className="QandA-modal-content">
          <div>
            <h3>Ask Your Question</h3>
            <h4>About the Product Here</h4>
            <textarea placeholder="Add Question Here..." maxLength="1000" onChange={(e) => setBody(e.target.value)} />
            <br />
            <input type="text" maxLength="60" placeholder="Example: jackson11!" onChange={(e) => setName(e.target.value)} />
            <input type="text" maxLength="60" placeholder="Why did you like the product or not?" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <button type="submit" onClick={(e) => onSubmit(e)}>submit</button>
        </div>
      </div>
    );
  } return (null);
}

export default forwardRef(AddQuestion);
