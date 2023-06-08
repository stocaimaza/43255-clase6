//Método Map: en React lo vamos a utilizar generalmente para crear una lista de componentes a partir de un array de datos. 

const Map = () => {
    const productos = [
        {id: 1, nombre: "Notebook", precio: 1000},
        {id: 2, nombre: "Monitor", precio: 1500},
        {id: 3, nombre: "Teclado", precio: 2000},
        {id: 4, nombre: "Mouse", precio: 2500},
    ]

  return (
    <div>
        <h2>Productos de Computación: </h2>
        <ul>
            {
                productos.map((producto,index) => (
                    <li key={index}>
                        <p> Nombre: {producto.nombre} </p>
                        <p> ${producto.precio} </p>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Map