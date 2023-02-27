import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/main.css'
import { UserNameProvider } from './context/nameContext';
import { TodosContextProvider } from './context/todosContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TodosContextProvider>
    <UserNameProvider>
      <RouterProvider router={router} />
    </UserNameProvider>
  </TodosContextProvider>
);


