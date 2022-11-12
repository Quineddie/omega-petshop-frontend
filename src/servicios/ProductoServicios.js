import axios from "axios";

const ProductoServicios = {};

ProductoServicios.listarProductos = () => {
    return axios.get("https://petshop-omega-api.herokuapp.com/api/productos");
}

ProductoServicios.guardarProducto = (producto) => {
    return axios.post("https://petshop-omega-api.herokuapp.com/api/productos", producto);
}


export default ProductoServicios;