import { Menu } from 'semantic-ui-react'

export default function Gnb () {
  const activeItem = "home";
  return (
    <Menu>
    <Menu.Item
      name='editorials'
      active={activeItem === 'editorials'}
      // onClick={this.handleItemClick}
    />
    <Menu.Item
      name='reviews'
      active={activeItem === 'reviews'}
      // onClick={this.handleItemClick}
    />
    <Menu.Item
      name='upcomingEvents'
      active={activeItem === 'upcomingEvents'}
      // onClick={this.handleItemClick}
    />
  </Menu>
  )
}