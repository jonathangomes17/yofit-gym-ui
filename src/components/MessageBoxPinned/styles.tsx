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

const MessageBoxCloseButton = styled.span`
  position: absolute;
  top: 5px;
  right: 15px;
  cursor: pointer;
  transition: .2s;

  &:hover {
    color: lightgrey;
  }
`;

const MessageBoxPinnedContainer: React.FC = (props) => {
  return <Container {...props}>{props.children}</Container>
}

export default MessageBoxPinnedContainer

export { MessageBoxCloseButton }
