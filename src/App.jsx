import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AddProductPage from "./pages/AddProductPage.jsx";
import RootLayout from "./pages/RootLayout.jsx";
import Store from "./pages/StorePage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { productActions } from "./store/product.js";

function App() {
  const dispatch = useDispatch();

  const router = createBrowserRouter([
    {
      path: "/e-commerce-app",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Store /> },
        { path: "add-product", element: <AddProductPage /> },
      ],
    },
  ]);

  useEffect(() => {
    const fetchingFunction = async () => {
      const fetchingProducts = async () => {
        const response = await fetch(
          "https://store-cbbcb-default-rtdb.firebaseio.com/store/products.json"
        );

        if (!response.ok) {
          throw new Error("Error occurred");
        }

        const data = await response.json();
        return data;
      };

      try {
        const products = await fetchingProducts();
        console.log(products);
        dispatch(productActions.replaceProducts(products));
      } catch (err) {
        console.log(err);
      }
    };

    fetchingFunction();
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
