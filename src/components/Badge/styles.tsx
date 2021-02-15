import React from 'react'
import styled, { css } from 'styled-components'
import IBadge from './types'

const Container = styled.span``

const Sup = styled.sup`
  display: block;  
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  font-size: 14px;
  line-height: 20px;
  white-space: nowrap;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 0 0 1px #fff;

  ${(props: IBadge) =>
    props.primary &&
    css`
      background: orange;
      color: #fff;
    `}

  ${(props: IBadge) =>
    props.secondary &&
    css`
      background: #fa541c;
      color: #fff;
    `}  
`;

const ContainerBadge: React.FC<IBadge> = (props) => {
  return (
    <Container>
      <Sup {...props}>
        {props.children}
      </Sup>
    </Container>
  )
}

export default ContainerBadge
