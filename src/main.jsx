import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom"; // ✅ Correct import placement
import "./index.css";



import { Toaster } from "react-hot-toast";
import router from "./Routes/Router";
import AuthProvider from "./Provider/AuthProvider";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster/>
    </AuthProvider>
  </StrictMode>
);
