import Estados from "../../enums/Estados";
import ProductoServicios from "../../servicios/ProductoServicios";

const ListaProductos = () => {
    let estado = Estados.CARGANDO;
    const listaProductos = ProductoServicios.listarProductos();
    if (listaProductos.lengt > 0) {
        estado = Estados.OK;
    }
    else {
        estado = Estados.VACIO;
    }
    estado = Estados.CARGANDO

    return (
        <div className="container">
            <h4> Lista de Productos <a href ="/productos/form" className="btn btn-sm btn-primary ms-3">Añadir Producto</a></h4>
            <div id="tabla">
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Marca</th>
                            <th>Precio</th>
                            <th>Disponible</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            estado === Estados.CARGANDO ?
                                (<tr>
                                    <td colSpan="5" align= "center">
                                        <div class="spinner-border" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                    </td>
                                </tr>) :
                                estado === Estados.OK ?
                                    listaProductos.map((producto) => (
                                        <tr>
                                            <td>{producto.nombre}</td>
                                            <td>{producto.marca}</td>
                                            <td>{producto.precio}</td>
                                            <td>{producto.disp ? "Si" : "No"}</td>
                                            <td>
                                                <a href={"/productos/form"+producto.id} className="btn btn-sm btn-success me-2">Editar</a>
                                                <button className="btn btn-sm btn-danger">Eliminar</button>
                                            </td>
                                        </tr>
                                    )) :
                                    (<tr>
                                        <td colSpan="5">No hay datos</td>
                                    </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ListaProductos;