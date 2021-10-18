import * as React from 'react'
import { render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import { mount, toContainReact } from 'enzyme';

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

  test('it should not render robot component when not placed in range', async () => {
    render(<App />)
    const command = 'PLACE 1 5 NORTH'
    const commandInput = screen.getByTestId("commandInput");
    const submitBtn = screen.getByTestId('run-cmd-btn');
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();

    userEvent.type(commandInput, command);

    await userEvent.click(submitBtn);
    expect(alertMock).toHaveBeenCalledTimes(1)
    expect(screen.queryByTestId('robot-container')).toBeNull()
  });
});
