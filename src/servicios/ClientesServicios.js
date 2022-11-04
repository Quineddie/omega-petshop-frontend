import axios from "axios";

const ClientesServicios = {};

ClientesServicios.listarClientes = () => {
    return axios.get("http://localhost:8000/api/clientes");
}

ClientesServicios.buscarClientes = (criterio) => {
    return axios.get("http://localhost:8000/api/clientes?q="+criterio);
}
ClientesServicios.guardarCliente = (cliente) => {
    return axios.post("http://localhost:8000/api/clientes", cliente);
}

export default ClientesServicios;