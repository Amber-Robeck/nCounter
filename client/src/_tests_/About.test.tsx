import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../pages/About';

test('renders about', () => {
    render(<About />);
    const aboutElement = document.querySelector('#about');
    expect(aboutElement).toBeInTheDocument();
});

test('renders about with title', () => {
    render(<About />);
    const aboutTitleElement = document.querySelector('#about-title');
    expect(aboutTitleElement).toBeInTheDocument();
});

test('renders about with description', () => {
    render(<About />);
    const aboutDescriptionElement = document.querySelector('#about-description');
    expect(aboutDescriptionElement).toBeInTheDocument();
});

test('renders about with image', () => {
    render(<About />);
    const aboutImageElement = document.querySelector('#about-image');
    expect(aboutImageElement).toBeInTheDocument();
});

test('renders about with image alt text', () => {
    render(<About />);
    const aboutImageElement = document.querySelector('#about-image');
    expect(aboutImageElement).toHaveAttribute('alt', 'about-image');
});

test('renders about with image src', () => {
    render(<About />);
    const aboutImageElement = document.querySelector('#about-image');
    expect(aboutImageElement).toHaveAttribute('src', 'https://picsum.photos/300');
});

test('renders about with image sizes', () => {
    render(<About />);
    const aboutImageElement = document.querySelector('#about-image');
    expect(aboutImageElement).toHaveAttribute('sizes', '(max-width: 300px) 100vw, 300px');
});