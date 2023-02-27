import { createBrowserRouter, Navigate } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { SignUp } from "./pages/SignUp/SignUp"
import App from "./App"
import { Login } from "./pages/Login/Login"
import { Nofications } from "./pages/Nofications/Nofications"
import { Explore } from "./pages/Explore/Explore"
import { Messages } from "./pages/Messages/Messages"
import { Bookmarks } from "./pages/Bookmarks/Bookmarks"
import { List } from "./pages/List/List"
import { Profile } from "./pages/Profile/Profile"
import { More } from "./pages/More/More"
import { ProfileTodos } from "./components/ProfileTodos/ProfileTodos"

export const router = createBrowserRouter(
  [
    {
      path: '/login',
      index: true,
      element: <Login />,
      errorElement: <h1>Error!!!!!!!!</h1>,
    },
    {
      path: '/',
      element: <App />,
      errorElement: <h1>Error!!!!!!!!!</h1>,
      children: [{
        path: '/',
        element: <Home />,
        errorElement: <h1>Error!!!!!!!!</h1>,
      },
      {
        path: 'explore',
        element: <Explore />,
        errorElement: <h1>Error!!!!!!!!</h1>,
      },
      {
        path: 'notifications',
        element: <Nofications />,
        errorElement: <h1>Error!!!!!!!!</h1>,
      },
      {
        path: 'messages',
        element: <Messages />,
        errorElement: <h1>Error!!!!!!!!</h1>,
      },
      {
        path: 'bookmarks',
        element: <Bookmarks />,
        errorElement: <h1>Error!!!!!!!!</h1>,
      },
      {
        path: 'lists',
        element: <List />,
        errorElement: <h1>Error!!!!!!!!</h1>,

      },
      {
        path: 'profile',
        element: <Profile />,
        errorElement: <h1>Error!!!!!!!!</h1>,
        children: [
          {
            path: '/profile',
            element: <Navigate to='tweets' replace={true} />,
            index:true,
          },
          {
            path: 'tweets',
            element: <ProfileTodos />,
            errorElement: <h1>Error!!!!!!!</h1>
          },
          {
            path: 'with_replies',
            element: <h1>PAGE NOT FOUND</h1> ,
            errorElement: <h1>Error!!!!!!!</h1>
          },
          {
            path: 'media',
            element: <h1>PAGE NOT FOUND</h1> ,
            errorElement: <h1>Error!!!!!!!</h1>
          },
          {
            path: 'likes',
            element: <h1>PAGE NOT FOUND</h1> ,
            errorElement: <h1>Error!!!!!!!</h1>
          }
        ]
      },
      {
        path: 'more',
        element: <More />,
        errorElement: <h1>Error!!!!!!!!</h1>,

      },
      ],
    },
    {
      path: 'signup',
      element: <SignUp />,
      errorElement: <h1>Error!!!!!!!!</h1>,
    },

  ]

)