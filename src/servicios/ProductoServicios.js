const productos = [
    {
        id:1,
        nombre: "Alimento para perros Pequeños",
        marca: "Dog Show",
        precio: 12000,
        categoria: ["Alimento para perros"],
        imagen: "bolsa_DogShow.jpg",
        disp: true
    },
    {
        id:2,
        nombre: "Alimento para gatos Pequeños",
        marca: "Cat Show",
        precio: 11000,
        categoria: ["Alimento para gatos"],
        imagen: "bolsa_DogShow.jpg",
        disp: true
    }
   
]
const ProductoServicios = {};
ProductoServicios.listarProductos = () =>{
    return productos;
}
export default ProductoServicios;
