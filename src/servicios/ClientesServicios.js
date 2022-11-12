import axios from "axios";

const ClientesServicios = {};

ClientesServicios.listarClientes = () => {
    return axios.get("https://petshop-omega-api.herokuapp.com/api/clientes");
}

ClientesServicios.buscarClientes = (criterio) => {
    return axios.get("https://petshop-omega-api.herokuapp.com/api/clientes?q="+criterio);
}
ClientesServicios.guardarCliente = (cliente) => {
    return axios.post("https://petshop-omega-api.herokuapp.com/api/clientes", cliente);
}
ClientesServicios.modificarCliente = (id, cliente) => {
    return axios.put("https://petshop-omega-api.herokuapp.com/api/clientes/"+id, cliente);
}

ClientesServicios.borrarCliente = (id) => {
    return axios.delete("https://petshop-omega-api.herokuapp.com/api/clientes/"+id);
}

export default ClientesServicios;