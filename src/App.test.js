import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const navbarElement = screen.getByTestId('navbar');
  const heroSectionElement = screen.getByTestId('hero-section');
  const cardElement = screen.getByTestId('card');
  const jurusanElement = screen.getByTestId('jurusan');
  const partnerElement = screen.getByTestId('partner');

  expect(navbarElement).toBeInTheDocument();
  expect(heroSectionElement).toBeInTheDocument();
  expect(cardElement).toBeInTheDocument();
  expect(jurusanElement).toBeInTheDocument();
  expect(partnerElement).toBeInTheDocument();
});
