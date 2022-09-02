/* eslint-disable import/extensions */
import React from 'react';
import { describe, expect, it } from '@jest/globals';
import '@testing-library/react/dont-cleanup-after-each';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import App from '../src/index.jsx';

axios.defaults.baseURL = 'http://localhost:3000';

describe('Questions Test Suite', () => {
  const { container } = render(<App />);

  it('should render all answer elements', () => waitFor(() => expect(screen.queryByText(/Loading/)).not.toBeInTheDocument())
    .then(() => {
      const boxes = container.getElementsByClassName('answer');
      expect(boxes.length)
        .toEqual(3);
    }));
});
