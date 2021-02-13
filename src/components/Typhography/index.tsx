import React from 'react'
import Title from './styles'
import ITyphography from './types'

const Typhography: React.FC<ITyphography> = (props) => {
  return (
    <Title {...props}> {props.children} </Title>
  )
}

export default Typhography
