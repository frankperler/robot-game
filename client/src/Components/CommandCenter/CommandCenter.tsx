import * as React from 'react'
import { FlexContainer, InputField } from '../StyledComponents/HelperComponents'

export const CommandCenter = () => {

  const [inputValue, setInputValue] = React.useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }


  return (
    <FlexContainer flexDir="column">
      <InputField value={inputValue} onChange={handleChange} />
    </FlexContainer>
  )
}
