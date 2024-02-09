import { AuthContext } from "./Context/AuthContext";
import { StrictMode } from "react";
import {BrowserRouter} from "react-router-dom"
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
<AuthContext.Provider>
   <BrowserRouter>
     <App />
   </BrowserRouter>
  </AuthContext.Provider>
  </StrictMode>
);
