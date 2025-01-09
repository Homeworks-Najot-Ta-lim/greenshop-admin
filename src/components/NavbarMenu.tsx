import React from 'react';
import { MailOutlined, ProductFilled, ProductOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { MenuSquare, ShoppingBagIcon, User2, Users2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { PATH } from '../hooks/usePath';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'sub1',
    label: <NavLink className="text-[20px] pl-2" to={PATH.products}>Products</NavLink>,
    icon: <MenuSquare />,
  },
  {
    key: 'sub2',
    label: <NavLink className="text-[20px] pl-2" to={PATH.users}>Users</NavLink>,
    icon: <Users2 />,
  },
  {
    key: 'sub3',
    label: <NavLink className="text-[20px] pl-2" to={PATH.categories}>Categories</NavLink>,
    icon: <ShoppingBagIcon />,
  },
  {
    key: 'sub4',
    label: <NavLink className="text-[20px] pl-2" to={PATH.profile}>Profile</NavLink>,
    icon: <User2 />,
  },
];

const NavbarMenu: React.FC = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <Menu
        className='!w-[20%] h-[100vh]'
        onClick={onClick}
        style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};

export default NavbarMenu;