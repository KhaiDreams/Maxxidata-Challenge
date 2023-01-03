import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import { GlobalStyle } from "./styles";

import { Router } from "./routes";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
          autoClose={3500}
          closeOnClick
          style={{ padding: '1rem' }}
          pauseOnFocusLoss
        />
      <GlobalStyle/>
      <Router/>
    </BrowserRouter>
  )
}

export default App
