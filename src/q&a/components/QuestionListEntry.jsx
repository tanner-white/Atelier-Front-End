import React from 'react';

function QuestionListEntry(props) {
  return (
    <div>
      <div>
        This will be the Question
        <button type="button" className="link-button" onClick={() => (console.log('helpful incrementer'))}>Helpful?</button>
        <button type="button" className="link-button" onClick={() => (console.log('add and answer'))}>add answer</button>
      </div>
      <div>
        This will be the answer
        <button type="button" className="link-button" onClick={() => (console.log('helpful incrementer'))}>Helpful?</button>
        <button type="button" className="link-button" onClick={() => (console.log('report user'))}>report</button>
      </div>
    </div>
  )
}

export default QuestionListEntry;
