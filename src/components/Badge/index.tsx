import React from 'react'
import ContainerBadge from './styles'
import IBadge from './types'

const Badge: React.FC<IBadge> = (props) => {
  return (
    <ContainerBadge {...props}> 
        {props.children} 
    </ContainerBadge>
  )
}

export default Badge
