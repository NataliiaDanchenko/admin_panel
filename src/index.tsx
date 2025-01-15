// react
import ReactDOM from "react-dom/client";
// router-dom
import { BrowserRouter } from "react-router-dom";
// privider
import { StoreProvider } from './app/providers/store/StoreProvider.tsx';
// app
import App from "./app/App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StoreProvider>
      <App />
    </StoreProvider>
  </BrowserRouter>
);
