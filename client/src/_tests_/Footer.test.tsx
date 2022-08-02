import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('renders footer', () => {
    render(<Footer />);
    const footerElement = document.querySelector('#footer');
    expect(footerElement).toBeInTheDocument();
});

test('renders footer with p', () => {
    render(<Footer />);
    const pElement = document.querySelector('#footer p');
    expect(pElement).toBeInTheDocument();
});

test('renders footer with p with correct text', () => {
    render(<Footer />);
    const pElement = document.querySelector('#footer p');
    expect(pElement).toHaveTextContent('This is my footer');
});
