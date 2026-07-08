import React from 'react';
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login, SignUp } from './pages/auth'
import { Error } from './pages'
import { Success, Gg } from './pages/main';

const MyApp = () => {
  return (
    <div className='[&_*]:transition-transform [&_*]:ease-linear [&_*]:duration-200 mx-auto'>
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <MyApp />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Login />},
      { path: "/main", children: [
        { path: "success", element: <Success />},
        { path: "google", element: <Gg />}
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
