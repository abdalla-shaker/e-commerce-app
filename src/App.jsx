import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { fetchProductsData } from "./store/product-actions.js";
import AddProductPage from "./pages/AddProductPage.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import Store from "./pages/StorePage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

let WE_JUST_LANDED = true;

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Store /> },
        { path: "/add-product", element: <AddProductPage /> },
      ],
    },
  ]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (WE_JUST_LANDED) {
      WE_JUST_LANDED = false;
      return;
    }
    dispatch(fetchProductsData());
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
