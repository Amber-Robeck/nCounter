import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('renders footer', () => {
    render(<Footer />);
    const footerElement = document.querySelector('#footer');
    expect(footerElement).toBeInTheDocument();
});

test('renders footer with icon', () => {
    render(<Footer />);
    const iconElement = document.querySelector('#footer .footer-icon');
    expect(iconElement).toBeInTheDocument();
});

test('renders footer with links', () => {
    render(<Footer />);
    const linkElements = document.querySelectorAll('#footer a');
    expect(linkElements.length).toBe(5);
});
