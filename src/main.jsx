import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import { GamersProvider } from "./context/GamersContext.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GamersProvider>
        <App />
      </GamersProvider>
    </BrowserRouter>
  </React.StrictMode>
)
