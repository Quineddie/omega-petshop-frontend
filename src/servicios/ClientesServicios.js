import axios from "axios";

const ClientesServicios = {};

ClientesServicios.listarClientes = () => {
    return axios.get("http://localhost:8080/api/clientes");
}

ClientesServicios.buscarClientes = (criterio) => {
    return axios.get("http://localhost:8080/api/clientes?q="+criterio);
}

export default ClientesServicios;