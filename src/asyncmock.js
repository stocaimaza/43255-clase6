const misProductos = [
    { id: 1, nombre: "Yerba", precio: 500, img: "./img/yerba.jpg" },
    { id: 2, nombre: "Arroz", precio: 200, img: "./img/arroz.jpg" },
    { id: 3, nombre: "Fideos", precio: 120, img: "./img/fideos.jpg" },
    { id: 4, nombre: "Aceite", precio: 900, img: "./img/aceite.jpg" },
]


export const getProductos = () => {
    return new Promise((res) => {
        setTimeout(() => {
            res(misProductos);
        }, 2000)
    })
}