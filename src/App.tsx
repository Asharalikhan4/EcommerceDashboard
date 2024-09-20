import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import router from "./routes/router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 4000,
        }}
      />
    </>
  );
}

export default App;
