import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Layout from "../Pages/Layout";
import CreateCategory from "../Pages/Categories/CreateCategory";
import CategoriesList from "../Pages/Categories/CategoriesList";
import ErrorPage from "../Pages/ErrorPage";
import EditCategory from "../Pages/Categories/EditCategory";
import ProductsList from "../Pages/Products/ProductsList";
import CreateProduct from "../Pages/Products/CreateProduct";
import EditProduct from "../Pages/Products/EditProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
      errorElement: <ErrorPage />,
      children:[
        {
            path: "/dashboard",
          element: <Layout />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/categories",
          children: [
            {
                index:true,
                element: <CategoriesList />,
            },
            {
                path: "create",
                element: <CreateCategory/>
            },
            {
                path: ":id",
                element: <EditCategory />
            }
          ]
        },
        {
            path: "/products",
            children: [
              {
                  index:true,
                  element: <ProductsList />,
              },
              {
                  path: "create",
                  element: <CreateProduct/>
              },
              {
                  path: ":id",
                  element: <EditProduct/>
              }
            ]
          },
      ]
    }
   
]);

export default router;
