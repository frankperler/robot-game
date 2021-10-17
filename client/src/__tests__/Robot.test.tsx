import * as React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

describe('robot render test suite', () => {
  afterEach(cleanup)

  test('it should render robot component when placed in range', async () => {
    render(<App />)
    const command = 'PLACE 1 1 NORTH'
    const commandInput = screen.getByTestId("commandInput");
    const submitBtn = screen.getByTestId('run-cmd-btn');

    userEvent.type(commandInput, command);

    await userEvent.click(submitBtn);
    expect(screen.getByTestId('robot-container')).toBeDefined()
  });

  test('it should render a robot image when in range', async () => {
    render(<App />)
    const command = 'PLACE 1 1 NORTH'
    const commandInput = screen.getByTestId("commandInput");
    const submitBtn = screen.getByTestId('run-cmd-btn');

    userEvent.type(commandInput, command);

    await userEvent.click(submitBtn);
    expect(screen.getByTestId('robot-image')).toBeDefined()
  });
});
