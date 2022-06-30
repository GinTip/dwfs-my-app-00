import React, { useState } from 'react'
import NavBar from '../components/NavBar';
import Title from '../components/Title';
import Footer from '../components/Footer';

const HomePage = () => {
  const [tareas, setTareas] = useState([
    {
      id: 1,
      nombre: 'Tarea 1'
    },

    {
      id: 2,
      nombre: 'Tarea 2'
    },

    {
      id: 3,
      nombre: 'Tarea 3'
    }
  ]);

  const imprimirTareas = () => {
    console.log(tareas);
  }

  const saludar = () => {
    console.log('Saludos UCampers');
  };


  return (
    <>
      <NavBar />
      <Title nombre = 'Home' />
      <button type="button" className="btn btn-primary" onClick={saludar}>Enviar</button>
      <button type="button" className="btn btn-primary" onClick={imprimirTareas}>Imprimir</button>

      <ul>
        {tareas.map((tarea) => (
          <li>{tarea.nombre}</li>
        ))
        }
      </ul>
      <Footer />
    </>
  )
}

export default HomePage