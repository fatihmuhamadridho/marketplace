import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import Navbar from "./components/core/navbar";
import Footer from "./components/core/footbar";
import HomePage from "./containers/homepage";
import ProductPage from "./containers/product";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <div className="flex flex-col">
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
        <Footer/>
      </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
