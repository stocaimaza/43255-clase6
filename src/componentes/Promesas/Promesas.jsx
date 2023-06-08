//Programación Sincrónica y Asincrónica. 

//La programación sincrónica ejecuta una tarea a la vez, en orden secuencial. Cada tarea es bloqueante de la siguiente.

//La programación asincrónica ejecuta varias tareas al mismo tiempo, en orden no secuencial. 

//Para practicar podemos usar setTimeout. Recuerden que recibe dos parámetros: una función y un tiempo en milisegundos. 
//Me permite simular el retraso de una petición a un servidor. 


//Promesas: son objetos que representan un evento futuro. 
//En general representa el resultado eventual de una petición asíncrona. 

//Las promesas tienen tres estados: pendiente (pending), completada(fullfilled) o rechazado(rejected). 




const Promesas = () => {
    //Programación sincrónica: 
    console.log("Tarea 1");
    console.log("Tarea 2");

    //Programación asíncrona: 

    setTimeout( () => {
        console.log("Tarea A");
    }, 4000)

    setTimeout( () => {
        console.log("Tarea B");
    }, 2000)

    //Promesas: 

    const tusPromesas = (estado) => {
        return new Promise((resolve, reject) => {
            if(estado) {
                resolve("Promesa cumplida, me llego el regalo que queria");
            } else {
                reject("Promesa rechazada, me dieron carbón");
            }
        })
    }

    console.log(tusPromesas(true));

    //THEN Y CATCH
    //Podemos concatenar dos métodos que me permiten ejecutar una función cuando la promesa se cumple o cuando se rechaza.
    //THEN se ejecuta cuando la promesa se cumple. 
    //CATCH se ejecuta cuando la promesa se rechaza. 
    //FINALLY se ejecuta siempre. 

    tusPromesas(true)
        .then(respuesta => {
            console.log(respuesta);
        })
        .catch(error => {
            console.log(error)
        })
        .finally( ()=> {
            console.log("Fin del proceso");
        })

        //Ahora practicamos con un array de datos: 

        const array = ["Tinki Winki", "Lala", "Po", "Dipsy"];

        const solicitarTeletubbies = (estado) => {
            return new Promise((res, rej) => {
                if(estado) {
                    res(array);
                } else {
                    rej("Hoy no hay teletubbies en la tele");
                }
            })
        }   

        solicitarTeletubbies(false)
            .then(respuesta => {
                console.table(respuesta);
            })
            .catch(error => console.log("Tenemos un error amiguito", error))





  return (
    <div>Promesas</div>
  )
}

export default Promesas