import { Suspense, useEffect } from "react";

// ==> Contexts
import { MainProvider } from "@providers/MainProvider";

// ==> Components
import Loading from "@components/Loading";
import Logger from "@common/layout/Logged";

// ==> Pages
import Home from "@pages/Home";

const App = () => {
  useEffect(() => {
    console.clear();
  }, []);

  return (
    <MainProvider>
      <Suspense fallback={<Loading />}>
        <Logger>
          <Home />
        </Logger>
      </Suspense>
    </MainProvider>
  );
};

export default App;
