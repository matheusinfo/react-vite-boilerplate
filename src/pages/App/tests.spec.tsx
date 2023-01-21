import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './index';

describe('App page', () => {
  test('Should load title correctly', () => {
    render(<App />);

    expect(screen.getByText(/Little boilerplate :D/i)).toBeDefined();
  });
});
