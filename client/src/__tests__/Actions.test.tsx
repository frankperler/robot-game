// example.test.js
import * as React from 'react'
import { fireEvent, render, screen, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import { HistoryField } from '../components/StyledComponents/StyledComponents';

afterEach(cleanup);

it('display command history after PLACE 1 1 NORTH command', async () => {
  const component = render(<App />)
  const command = 'PLACE 1 1 NORTH'
  const commandInput = screen.getByTestId("commandInput");
  const submitBtn = screen.getByTestId('run-cmd-btn');

  userEvent.type(commandInput, command);

  expect(submitBtn).toBeDefined()

  await userEvent.click(submitBtn);

  expect(screen.getByTestId('history-field')).toBeDefined()
  expect(screen.getByTestId("history-field")).toHaveTextContent("1. PLACE 1,1,NORTH")
})

it('display command history after PLACE 1 1 NORTH MOVE command', async () => {
  const component = render(<App />)
  const commandOne = 'PLACE 1 1 NORTH'
  const commandInput = screen.getByTestId("commandInput");
  const submitBtn = screen.getByTestId('run-cmd-btn');

  userEvent.type(commandInput, commandOne);
  await userEvent.click(submitBtn);

  const commandTwo = 'MOVE'
  userEvent.type(commandInput, commandTwo);
  await userEvent.click(submitBtn);

  expect(screen.getByTestId("history-field")).toHaveTextContent("1. PLACE 1,1,NORTH 2. MOVE")

})