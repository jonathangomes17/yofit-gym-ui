import React from 'react'
import styled from 'styled-components'
import IInput from './types';

const Labeled = styled.label`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const Title = styled.span`
  font-size: 16px;
  line-height: 24px;
  color: black;
  font-weight: 600;
  margin-bottom: .25rem;
`;

const Container = styled.input`
    display: block;    
    appearance: none;
    user-select: text;
    transition: border 1ms cubic-bezier(1,0,0,1),box-shadow 1ms cubic-bezier(1,0,0,1);
    width: 100%;
    height: 44px;
    margin: 0 0 10px;
    padding: 10px;
    border: solid 1px #cacaca;
    text-shadow: 0 -1px 0 rgba(0,0,0,0.12);
    box-shadow: 0 2px 0 rgba(0,0,0,0.045);
    border-radius: 3px;
    color: black;
    font-size: 16px;
    line-height: 24px;

    &::placeholder {
      color: grey;
    }
`;

const Input: React.FC<IInput> = (props) => {
  return (
    <>
      <Labeled htmlFor={props.htmlFor}>
        {props?.title
         ? <Title>{props.title}</Title>
         : null 
        }
        
        <Container {...props}></Container>
      </Labeled>
    </>
  )
}

export default Input
