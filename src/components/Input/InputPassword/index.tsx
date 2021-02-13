import React from 'react'
import Input from '..';
import IInput from '../types';

const InputPassword: React.FC<IInput> = (props) => {
  return (
    <Input {...props} type="password"></Input>
  )
}

export default InputPassword
