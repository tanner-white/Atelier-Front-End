/* eslint-disable import/extensions */
import React, { useState, createRef } from 'react';
import ReactDOM from 'react-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import axios from 'axios';
import Overview from './overview/overviewIndex.jsx';
// eslint-disable-next-line import/extensions
import RatingsApp from './ratingsAndReviews/RatingsApp.jsx';
// eslint-disable-next-line import/extensions
import Questions from './q&a/QuestionsApp.jsx';

function App() {
  const [currentProductName, setCurrentProductName] = useState('');
  const [averageStars, setAverageStars] = useState(0);
  const [numberReviews, setNumberReviews] = useState(0);

  const [isDarkMode, setDarkMode] = React.useState(false);
  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  const reviewsRef = createRef();
  const scrollToReviews = () => {
    reviewsRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const trackClick = (input) => {
    axios.post('http://localhost:3001/click', input)
      .then(() => console.log('success'))
      .catch((err) => console.error('client side click error: ', err));
  };

  return (
    <div style={{
      background: isDarkMode ? '#1b242c' : '#faf9f8',
      color: isDarkMode ? '#BDDEDB' : 'black',
      transition: '0.8s background',
    }}
    >
      <header>
        <p
          style={{
            color: isDarkMode ? '#BDDEDB' : 'white',
          }}
          className="business-name"
        >
          Atelier&nbsp;

        </p>
      </header>
      <div className="sitewide-sale">
        <em>SITE-WIDE ANNOUNCEMENT MESSAGE!</em>
        {' '}
        -- SALE / DISCOUNT&nbsp;
        {' '}
        <b>OFFER</b>
        {' '}
        --
        {' '}
        <u>NEW PRODUCT HIGHLIGHT</u>
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        <DarkModeSwitch
          style={{ marginBottom: '2rem' }}
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={20}

        />
      </div>
      <Overview
        averageStars={averageStars}
        numberReviews={numberReviews}
        setCurrentProductName={setCurrentProductName}
        scrollToReviews={scrollToReviews}
        trackClick={trackClick}
        isDarkMode={isDarkMode}
      />
      <Questions trackClick={trackClick} currentProductName={currentProductName} />
      <div ref={reviewsRef} />
      <RatingsApp
        currentProductName={currentProductName}
        setAverageStars={setAverageStars}
        setNumberReviews={setNumberReviews}
        trackClick={trackClick}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
// export default index;
