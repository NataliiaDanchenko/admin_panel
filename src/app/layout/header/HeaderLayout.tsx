// react
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
// widgets
import { Header } from '@/widgets/ui/header/Header/Header';

interface HeaderLayoutProps {}

export const HeaderLayout: FC<HeaderLayoutProps> = ({}) => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
