import { FC, ReactNode, useMemo } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '@/app/config/store/createReduxStore';

interface StoreProviderProps {
  children?: ReactNode;
}

export const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const store = useMemo(() => createReduxStore(), []);

  return <Provider store={store}>{children}</Provider>;
};
