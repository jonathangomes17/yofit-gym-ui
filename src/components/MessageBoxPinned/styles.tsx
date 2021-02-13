import React from 'react'
import styled, { css } from 'styled-components'
import IMessageBoxPinned from './types'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1rem;
  align-items: center;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;

  ${(props: IMessageBoxPinned) =>
    props?.primary &&
    css`
      background-color: #3057E4;
      color: white;
    `}

  ${(props: IMessageBoxPinned) =>
    props?.warning &&
    css`
      background-color: #f5f2a1;
      color: #545454;
    `}

  ${(props: IMessageBoxPinned) =>
    props?.smaller &&
    css`
      font-size: 1.15rem;
    `}    
`

const MessageBoxPinnedContainer: React.FC = (props) => {
  return <Container {...props}>{props.children}</Container>
}

export default MessageBoxPinnedContainer
