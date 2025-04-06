import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { Provider } from "react-redux";
// import store from "./pages/redux/store.jsx"; // Import Redux store
// import "./index.css";
// import App from "./App.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <Provider store={store}>
//       {" "}
//       {/* Wrap App with Redux Provider */}
//       <App />
//     </Provider>
//   </StrictMode>
// );
