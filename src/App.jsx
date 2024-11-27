import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";
import ErrorPage from "./components/Error";
import Head from "./components/Head";
import Body from "./components/Body";
import RestaurantMenuContainer from "./components/RestaurantMenuContainer";
import { lazy, Suspense, useEffect, useState } from "react";
import UserInfo from "./utils/UserInfoContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Testing from "./components/Testing";

const About = lazy(() => import("./components/About"));

const App = () => {
  const [nameinfo, setNameInfo] = useState(null);
  //authentication logic
  useEffect(() => {
    // make and api call and send username and password
    const data = {
      name: "Samir",
    };
    setNameInfo(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserInfo.Provider value={{ loggedInUser: nameinfo, setNameInfo }}>
        <div className="p-4 relative">
          <Head />
          <Outlet />
        </div>
      </UserInfo.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenuContainer />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/testing",
        element: <Testing />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
