import './App.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import UserList from './features/user-list/UserList';

const queryClient = new QueryClient();

const App = () => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <UserList />
      </QueryClientProvider>
    </div>
  );
};

export default App;
