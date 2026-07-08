import React from 'react';
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error } from './pages';
import { Home } from './pages/main';
import { Login, SignUp } from './pages/auth';

const MyApp = () => {
  return (
    <div className="[&_*]:transition-transform [&_*]:ease-linear [&_*]:duration-200 mx-auto">
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <MyApp />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home />},
      { path: "/main", children: [
      ]},
      { path: "/auth", children: [
        { path: "login", element: <Login />},
        { path: "sign-up", element: <SignUp />}
      ]}
    ]
  }
])

function App() {
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
