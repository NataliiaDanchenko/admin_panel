// react
import { FC } from 'react';
// ui
import { HeaderNavigation } from '../HeaderNavigation/HeaderNavigation';
// mui
import { Box } from '@mui/material';

interface HeaderProps {}

export const Header: FC<HeaderProps> = ({}) => {
  return (
    <Box>
      <HeaderNavigation />
    </Box>
  );
};
