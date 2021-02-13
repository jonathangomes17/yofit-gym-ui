import React, { useState } from 'react'
import MessageBoxPinnedContainer from './styles'
import IMessageBoxPinned from './types'

const MessageBoxPinned: React.FC<IMessageBoxPinned> = (props) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return <></>;

  const handleClose = () => {
    setVisible(false);
  }

  return (
    <MessageBoxPinnedContainer {...props}>
      {props?.closed
        ? <span style={{position: 'absolute', top: 5, right: 15}} onClick={handleClose}>X</span>
        : null
      }
      
      {props.children}
    </MessageBoxPinnedContainer>
  )
}

export default MessageBoxPinned
