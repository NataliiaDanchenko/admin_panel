// react
import { FC } from "react";
// react-router-dom
import { NavLink } from "react-router-dom";
// items
import { headerNavigationItems } from "@/widgets/constants/headerNavigationItems";
// mui
import { Box, Typography } from "@mui/material";

interface HeaderNavigationProps {}

export const HeaderNavigation: FC<HeaderNavigationProps> = ({}) => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      height='100px'
      gap='20px'
    >
      {headerNavigationItems.map((item) => {
        return (
          <NavLink
            key={item.path}
            style={({ isActive }) => ({
              fontWeight: isActive ? 'bold' : 'normal',
              color: isActive ? 'blue' : 'black',
              textDecoration: isActive ? 'underline' : 'none',
            })}
            to={item.path}
          >
            <Typography>{item.text}</Typography> 
          </NavLink>
        );
      })}
    </Box>
  );
};
