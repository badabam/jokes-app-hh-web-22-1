import { render, screen } from '@testing-library/react';
import Joke from './Joke.js';

describe('Joke', () => {
  it('renders a text and an author', () => {
    render(<Joke text="This is a joke" author="Jane Doe" />);

    const text = screen.getByText('This is a joke');
    expect(text).toBeInTheDocument();

    const author = screen.getByText('Jane Doe');
    expect(author).toBeInTheDocument();
  });
});
