// react
import { FC } from "react";
// react-router-dom
import { useParams } from 'react-router-dom';
// mui
import { Box } from "@mui/material";

interface UserPageProps {}

export const UserPage: FC<UserPageProps> = ({}) => {
  const { id } = useParams();

  return <Box>{id}</Box>;
};
