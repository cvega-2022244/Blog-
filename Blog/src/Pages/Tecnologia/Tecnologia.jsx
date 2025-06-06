import React from 'react';
import { Card } from '../../Components/Card/Card';
import '../Css.css';
import { tareas1, tareas2 } from './data';

export const Tecnologia = () => {
  return (
    <div>
      <div className='task-grid'>
        {tareas1.map((tarea) => (
          <Card key={tarea.id} imagen={tarea.imagen} title={tarea.title} description={tarea.description} skills={tarea.skills} link={tarea.link} />
        ))}
      </div>
      <center>
        <h1>Bimestre 2</h1>
      </center>
      <div className='task-grid'>
        {tareas2.map((tarea) => (
          <Card key={tarea.id} imagen={tarea.imagen} title={tarea.title} description={tarea.description} skills={tarea.skills} link={tarea.link} />
        ))}
      </div>
    </div>
  );
};
