import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .training,
  .activity {
    font-size: 3vw;
    margin-top: .5rem;
    color: #585858;
    line-height: 1.1;
    letter-spacing: -.03em;
    word-break: break-all;
  }

  .divider {
      border-top: 1px solid #EEEEEE;
  }

  .actions {
    display: flex;
    justify-content: space-between;
    color: grey;
    align-items: center;
  }
`

const TrainingContainer: React.FC = (props) => {
  return <Container {...props}>{props.children}</Container>
}

export default TrainingContainer
