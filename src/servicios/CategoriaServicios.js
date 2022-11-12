import axios from "axios";

const CategoriaServicios = {};

CategoriaServicios.listarCategorias = () => {
    return axios.get("https://petshop-omega-api.herokuapp.com/api/categorias");
}

CategoriaServicios.buscarCategorias = (busqueda) => {
    return axios.get("https://petshop-omega-api.herokuapp.com/api/categorias?q="+busqueda);
}

CategoriaServicios.cargarCategoria = (id) => {
    return axios.get("https://petshop-omega-api.herokuapp.com/api/categorias/"+id);
}

CategoriaServicios.modificarCategoria = (id, body) => {
    return axios.put("https://petshop-omega-api.herokuapp.com/api/categorias/"+id, body);
}

CategoriaServicios.guardarCategorias = (categoria) => {
    return axios.post("https://petshop-omega-api.herokuapp.com/api/categorias", categoria);
}

CategoriaServicios.borrarCategoria = (id) => {
    return axios.delete("https://petshop-omega-api.herokuapp.com/api/categorias/"+id);
}

export default CategoriaServicios;