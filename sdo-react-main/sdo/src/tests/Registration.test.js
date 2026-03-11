import React from 'react';
import { render, screen } from '@testing-library/react';
import Component from '../pages/Registration/Registration';
import * as test from "node:test"; // Импортируйте ваш компонент

describe('Component', () => {
  test('renders component with correct text', () => {
    render(<Component />);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });
});
