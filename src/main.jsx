/* eslint-disable react/prop-types */
// const Input = ({handleChange, hint}) => {
//   return (
//     <div className="input">
//       <label htmlFor="input" >
//         {hint}
//       </label>
//       <input
//         type="text"
//         id="input"
//         onChange={handleChange}
//       />
//     </div>
//   );
// };

// export default Input;
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
