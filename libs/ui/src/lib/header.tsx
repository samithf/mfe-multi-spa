import { Menu, Container, Icon, Label } from 'semantic-ui-react';
export function Header() {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item as="a" header>
          ebuy.com
        </Menu.Item>
        <MenuItems />
        <Menu.Item position="right">
          <Label>
            <Icon name="shopping cart" />
            00
          </Label>
        </Menu.Item>
      </Container>
    </Menu>
  );
}
const MenuItems = () => {
  return (
    <>
      {NAV_ITEMS.map((navItem, index) => (
        <Menu.Item key={index}>
          <a href={navItem.href ?? '#'}>{navItem.label}</a>
        </Menu.Item>
      ))}
    </>
  );
};
interface NavItem {
  label: string;
  href?: string;
}
const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Catalog',
    href: '/',
  },
  {
    label: 'Checkout',
    href: '/checkout',
  },
];
export default Header;
