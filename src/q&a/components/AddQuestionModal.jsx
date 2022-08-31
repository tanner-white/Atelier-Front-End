import React, {
  useState, useEffect, useImperativeHandle, forwardRef, useCallback,
} from 'react';

function AddQuestion({ children }, ref) {
  const [display, setDisplay] = useState(false);

  const close = useCallback(() => setDisplay(false), []);

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
      <div className="modal">
        <div className="modal-content">
          <div>
            <h3>Ask Your Question</h3>
            <h4>About the Product Here</h4>
            <textarea placeholder="Add Question Here..." maxLength="1000" />
            <br />
            <input type="text" maxLength="60" placeholder="Example: jackson11!" />
            <input type="text" maxLength="60" placeholder="Why did you like the product or not?" />
          </div>
          <button type="submit">submit</button>
        </div>
      </div>
    );
  } return (null);
}

export default forwardRef(AddQuestion);
