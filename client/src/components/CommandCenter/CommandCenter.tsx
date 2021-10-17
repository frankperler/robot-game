import * as React from 'react'
import { FlexContainer, InputField, Form, Button } from '../StyledComponents/StyledComponents'
import { robotContext } from '../../contexts/RobotContext'
import { Instructions } from './Instructions'

export const CommandCenter = () => {

  const [command, setCommand] = React.useState<string>('');
  const { stateRobot, dispatchRobot } = React.useContext(robotContext)


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCommand(e.target.value.toUpperCase())
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    dispatchRobot({ type: "COMMAND", payload: command.split(/[\s,]+/) })
  }

  const handleReset = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    dispatchRobot({ type: "RESET" })
  }

  return (
    <FlexContainer flexDir="column">
      <Form onSubmit={(event) => handleSubmit(event)}>
        <InputField value={command} onChange={handleChange} type="text" placeholder="Your command..." />
        <FlexContainer>
          <Button>Run Command</Button>
          <Button onClick={handleReset}>Reset</Button>
        </FlexContainer>
      </Form>
      <Instructions />
    </FlexContainer>
  )
}
