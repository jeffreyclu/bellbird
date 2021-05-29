import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => render(<App />));

test('renders heading', () => {
  const title = screen.getByRole('heading');
  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent('Chirps')
});

test('renders chirps feed', () => {
  const chirps = screen.getByRole('list');
  expect(chirps).toBeInTheDocument();
})
