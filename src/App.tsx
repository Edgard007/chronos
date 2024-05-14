import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ==> Contexts
import { MainProvider } from "@providers/MainProvider";

// ==> Components
import Loading from "@components/Loading";
import ProtectedRoute from "@components/ProtectedRoute";

// Config
import { pages } from "@config/routers";

const router = createBrowserRouter(
  (pages || []).map((p) => {
    return {
      path: p?.path || "",
      element: <ProtectedRoute info={p}>{p?.element}</ProtectedRoute>,
    };
  })
);

const App = () => (
  <MainProvider>
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  </MainProvider>
);

export default App;
