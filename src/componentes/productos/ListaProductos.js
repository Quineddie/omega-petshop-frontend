import Estados from "../../enums/Estados";
import ProductoServicios from "../../servicios/ProductoServicios";

const ListaProductos = () => {
    const listaProductos = ProductoServicios.listarProductos();
    let estado;
    if (listaProductos.lengt>0) {
        estado =Estados.OK;
    }
    else {
        estado = Estados.VACIO;
    }

    return (
        <div className="container">
            <h4 className="d-flex justify-content-center">Productos</h4>
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
                            estado === Estados.Ok ?
                                listaProductos.map((producto) => (
                                    <tr>
                                        <td>{producto.nombre}</td>
                                        <td>{producto.marca}</td>
                                        <td>{producto.precio}</td>
                                        <td>{producto.disp ? "Si" : "No"}</td>
                                        <td>
                                            <button className="btn btn-sm btn-success me-2">Editar</button>
                                            <button className="btn btn-sm btn-danger">Eliminar</button>
                                        </td>
                                    </tr>
                                )):
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