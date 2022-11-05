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
ClientesServicios.modificarCliente = (id, cliente) => {
    return axios.put("http://localhost:8000/api/clientes/"+id, cliente);
}

ClientesServicios.borrarCliente = (id) => {
    return axios.delete("http://localhost:8000/api/clientes/"+id);
}

export default ClientesServicios;