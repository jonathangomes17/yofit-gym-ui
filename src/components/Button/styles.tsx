import React from 'react'
import styled, { css } from 'styled-components'
import IButton from './types'

const Container = styled.button`
  display: inline-flex;
  font-family: 'Raleway';
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
  border-radius: 2px;
  border: solid 1px transparent;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  pointer-events: visible;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 44px;
  font-size: 1rem;
  padding: 5px;

  &[disabled] {
    color: #dadada;
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.5;
  }

  ${(props: IButton) =>
    props.primary &&
    css`
      background: #3057E4;
      border-color: #3057E4;
      color: #fff;

      &:hover {
        box-shadow: inset 0 0 0 0 #0e5cbc;
        color: #fff;
      }
    `}

  ${(props: IButton) =>
    props.outlined &&
    css`
      background: white;
      border-color: grey;
      color: black;

      &:hover {
        box-shadow: inset 0 0 0 0 #0e5cbc;
        color: grey;
      }
    `}  

  ${(props: IButton) =>
    props.bigger &&
    css`
      font-size: 1.5rem;
      padding: 1.25rem 2rem;
    `}

  ${(props: IButton) =>
    props.bottom &&
    css`
      margin-bottom: 1rem;
    `}  
`

const GymButton: React.FC<IButton> = (props) => {
  return <Container {...props}>{props.children}</Container>
}

export default GymButton
