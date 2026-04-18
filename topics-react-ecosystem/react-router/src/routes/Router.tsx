import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Link,
  NavLink,
} from "react-router";
import Message from "../components/message";

//permite definir todas las rutas de la aplicacion
//ademas de definir una DAta API para action and loader para cargar datos antes de previsualizar
// el componente en la ruta
const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        Home <Outlet />{" "}
      </div>
    ),
    children: [
      {
        path: "message",
        element: <Message />,
      },
      {
        path: "bye",
        Component: () => {
          return (
            <>
              <p>este es un mensaje de despedida</p>

              <Link to="/message">Ir a message</Link>

              <NavLink to="/message">
                {({ isActive }) => (
                  <>
                    <span>Ir message -navlink-</span>
                    {isActive ? (
                      <p style={{ color: "green" }}>link activo</p>
                    ) : (
                      <p style={{ color: "red" }}>link desactivo</p>
                    )}
                  </>
                )}
              </NavLink>
            </>
          );
        },
      },
    ],
  },
]);

// es el componente principal de react router moderno, permite centralizar las rutas de toda la aplicacion
export function Main() {
  return <RouterProvider router={routes} />;
}
