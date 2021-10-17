import * as React from 'react'
import { FlexContainer, InputField, Form, Button } from '../StyledComponents/StyledComponents'
import { robotContext } from '../../contexts/RobotContext'
import { Instructions } from './Instructions'

export const CommandCenter = () => {

  const [command, setCommand] = React.useState<string>('')
  const { robotState, dispatchRobotActions } = React.useContext(robotContext)


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCommand(e.target.value.toUpperCase())
  }


  const handleSubmit = () => {
    console.log(robotState)
  }

  const handleRun = () => {
    return;
  }

  const handleReset = () => {
    return;
  }

  return (
    <FlexContainer flexDir="column">
      <Form as="form" onSubmit={handleSubmit}>
        <InputField value={command} onChange={handleChange} type="text" placeholder="Your command..." />
        <FlexContainer>
          <Button type="submit" onClick={handleRun}>Run Command</Button>
          <Button type="reset" onClick={handleReset}>Reset</Button>
        </FlexContainer>
      </Form>
      <Instructions />
    </FlexContainer>
  )
}
