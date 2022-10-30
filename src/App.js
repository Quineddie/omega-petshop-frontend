import ListaFormCategorias from "./componentes/categorias/ListaFormCategorias";
import Header from "./componentes/general/Header";
import FormProducto from "./componentes/productos/FormProductos";
import Banner from "./componentes/general/Baner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaProductos from "./componentes/productos/ListaProductos";

const App = () =>{
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Banner />} exact></Route>          
          <Route path="/categorias" element={<ListaFormCategorias/>} exact></Route>
          <Route path="/productos" element={<ListaProductos/>} exact></Route>
          <Route path="/productos/form" element={<FormProducto/>} exact></Route>
          <Route path="/productos/form:id" element={<FormProducto/>} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>    
  );
}

export default App;