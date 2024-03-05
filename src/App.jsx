import "./App.css";
import Layout from "./components/Layout/Layout";
import Website from "./pages/Website";
import Properties from "./pages/Properties/Properties";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import { ReactQueryDevtools } from "react-query/devtools";
import "react-toastify/dist/ReactToastify.css";
import Property from "./pages/Property/Property";


// import Residencies from "./components/Residencies/Residencies";
function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Website />} />
              <Route path="/properties">
                <Route index element={<Properties />} />
                <Route path=":propertyId" element={<Property />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
