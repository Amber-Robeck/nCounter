import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders app', () => {
  render(<App />);
  const linkElement = document.querySelector('#app');
  expect(linkElement).toBeInTheDocument();
});

test('renders app with navigation bar', () => {
  render(<App />);
  const navElement = screen.getByRole('navigation');
  expect(navElement).toBeInTheDocument();
});

test('renders app with about section', () => {
  render(<App />);
  const aboutElement = document.querySelector('#about');
  expect(aboutElement).toBeInTheDocument();
});