import React, {
  useState, useEffect, useImperativeHandle, forwardRef, useCallback,
} from 'react';

function AddAnswer({ children, handleSubmit }, ref) {
  const [display, setDisplay] = useState(false);
  const [answer, setAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const close = useCallback(() => setDisplay(false), []);

  const onSubmit = (event) => {
    event.preventDefault();
    const input = {
      body: answer,
      name: nickname,
      email,
    };
    handleSubmit(input);
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
            <textarea placeholder="Add Answer Here..." maxLength="1000" onChange={(e) => setAnswer(e.target.value)} />
            <br />
            <input type="text" maxLength="60" placeholder="Example: jack543!" onChange={(e) => setNickname(e.target.value)} />
            <input type="text" maxLength="60" placeholder="Example: jack@email.com" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <button type="submit" onClick={onSubmit}>submit</button>
        </div>
      </div>
    );
  } return (null);
}

export default forwardRef(AddAnswer);
