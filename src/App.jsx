// import Navbar from "./components/navbar/Navbar"
// import "./layout.scss"
import HomePage from "./pages/homePage/homePage"
import {
  createBrowserRouter,
  RouterProvider,

}from "react-router-dom";
import ListPage from "./pages/listPage/ListPage";
import Layout from "./pages/layout/layout";
import SinglePage from "./pages/singlePage/SinglePage";
import Profile from "./pages/profile/Profile";

function App() {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <Layout/>,
      children:[
        {
        path : "/",
        element : <HomePage/>
        },
        {
          path : "/list",
          element : <ListPage/>
        },
        {
          path : "/:id",
          element : <SinglePage/>
        },
        {
          path : "/profile",
          element : <Profile/>
        }
      ]
    }
    
  ]);
  return (
    
    <RouterProvider router={router}/>
      
  )
}

export default App;