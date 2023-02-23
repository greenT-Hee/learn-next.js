import { Menu } from 'semantic-ui-react'

export default function Gnb() {
  const activeItem = "home";
  return (
    <Menu>
      <Menu.Item
        name='HOME'
        active={activeItem === 'editorials'}
      // onClick={this.handleItemClick}
      />
      <Menu.Item
        name='ABOUT'
        active={activeItem === 'reviews'}
      // onClick={this.handleItemClick}
      />
      <Menu.Item
        name='CONTACT'
        active={activeItem === 'upcomingEvents'}
      // onClick={this.handleItemClick}
      />
    </Menu>
  )
}