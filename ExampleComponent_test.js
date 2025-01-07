import React from 'react';
import { render, screen } from '@testing-library/react';
import ExampleComponent from './ExampleComponent';

test('renders the component', () => {
  render(<ExampleComponent />);
  expect(screen.getByText('Hello, World!')).toBeInTheDocument();
});
