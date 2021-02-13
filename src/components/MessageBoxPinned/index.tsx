import React, { useState } from 'react'
import MessageBoxPinnedContainer, { MessageBoxCloseButton } from './styles'
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
        ? <MessageBoxCloseButton onClick={handleClose}>X</MessageBoxCloseButton>
        : null
      }
      
      {props.children}
    </MessageBoxPinnedContainer>
  )
}

export default MessageBoxPinned
