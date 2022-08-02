import React from 'react';
import { render, screen } from '@testing-library/react';
import Navigation from '../components/Navigation';

test('renders navigation bar', () => {
    render(<Navigation />);
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();
});

test('renders navigation bar with links', () => {
    render(<Navigation />);
    const navElement = screen.getByRole('navigation');
    const liElements = navElement.querySelectorAll('li');
    expect(liElements.length).toBe(3);
});

test('renders navigation bar with links with correct text', () => {
    render(<Navigation />);
    const navElement = screen.getByRole('navigation');
    const liElements = navElement.querySelectorAll('li');
    expect(liElements[0].textContent).toBe('Home');
    expect(liElements[1].textContent).toBe('About');
    expect(liElements[2].textContent).toBe('Contact');
});

test('renders navigation bar with links with correct href', () => {
    render(<Navigation />);
    const navElement = screen.getByRole('navigation');
    const liElements = navElement.querySelectorAll('li');
    expect(liElements[0].querySelector('a')?.getAttribute('href')).toBe('/');
    expect(liElements[1].querySelector('a')?.getAttribute('href')).toBe('/about');
    expect(liElements[2].querySelector('a')?.getAttribute('href')).toBe('/contact');
});
