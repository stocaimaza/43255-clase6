import { useEffect, useState } from "react"

const LosSimpsons = () => {
    const [personaje, setPersonaje] = useState([]);

    useEffect( ()=> {
        fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=10")
            .then(respuesta => respuesta.json())
            .then(datos => setPersonaje(datos))
            .catch(error => console.log("Vamos a morir", error))

    }, [])
  return (
    <div>
        <h2>Personajes de los Simpsons</h2>
        {
            personaje.map((persona, index) => {
                return (
                    <div key={index}>
                        <p>Nombre: {persona.character} </p>
                        <img src={persona.image} alt={persona.character} />
                    </div>
                )
            })
        }
    </div>
  )
}

export default LosSimpsons