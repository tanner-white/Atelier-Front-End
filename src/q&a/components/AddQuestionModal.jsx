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
      <div className="Q-modal">
        <div className="Q-modal-content">
          <h3>Ask Your Question</h3>
          <h4>About the Product Here</h4>
          <input type="text" placeholder="Example: jackson11!" />
          <input type="text" placeholder="Why did you like the product or not?" />
        </div>
      </div>
    );
  } return (null);
}

export default forwardRef(AddQuestion);
