import React, { useContext } from 'react'
import Modal from '..'
import { GlobalContext } from '../../../store'
import { setSession } from '../../../store/actions'
import Button from '../../Button'
import Input from '../../Input'
import InputPassword from '../../Input/InputPassword'

const Login: React.FC = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { session } = state;

  const handleGuest = () => {
    console.log("CLIQUEI")
    setSession(dispatch, { session: "9cc2b708-68ce-4086-a754-6337a8e68932" })
  }

  function getElementActions(): JSX.Element {
    return (
      <>
        <Button primary bottom>Entrar</Button>
        <Button outlined onClick={handleGuest}>Entrar como convidado</Button>
      </>
    )
  }

  return (
    <>
      {!session && (
        <Modal title="Fazer login" actions={getElementActions()}>
          <Input htmlFor="user" placeholder="E-mail" />
          <InputPassword htmlFor="password" placeholder="Senha" />
        </Modal>
      )}
    </>
  )
}

export default Login
