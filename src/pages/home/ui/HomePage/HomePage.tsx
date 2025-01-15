// ui
import { UserAddForm } from '@/widgets/ui/user/UserAddForm/UserAddForm';
// mui
import { Box } from '@mui/material';

export const HomePage = ({}) => {
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
    >
      <UserAddForm />
    </Box>
  );
};
