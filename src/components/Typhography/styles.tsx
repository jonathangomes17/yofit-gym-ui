import React from 'react'
import styled, {css} from 'styled-components'

const Container = styled.span`
  font-size: 1.5rem;
  color: #424242;

  ${(props: any) =>
    props?.bottom &&
    css`
      margin-bottom: 1rem;
    `}
`

const Title: React.FC = (props) => {
  return <Container {...props}>{props.children}</Container>
}

export default Title
