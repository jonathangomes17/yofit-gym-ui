import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const OtherTrainingsContainer: React.FC = (props) => {
  return <Container {...props}>{props.children}</Container>
}

export default OtherTrainingsContainer
