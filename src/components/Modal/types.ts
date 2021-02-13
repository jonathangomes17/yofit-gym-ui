interface IModal {
  title?: string
  opened?: boolean
  fixed?: boolean
  ok?: boolean
  onClick?: any
  children?: JSX.Element | JSX.Element[]
  actions: JSX.Element
}

export default IModal
