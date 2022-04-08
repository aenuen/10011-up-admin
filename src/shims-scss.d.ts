interface Variables {
  theme: string
  menuText: string
  menuActiveText: string
  subMenuActiveText: string
  menuBg: string
  menuHover: string
  subMenuBg: string
  subMenuHover: string
  sideBarWidth: string
}

declare module '*.scss' {
  const content: Variables
  export default content
}
