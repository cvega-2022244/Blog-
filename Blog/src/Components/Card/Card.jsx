import React from 'react'
import '../Card/card.css'

export const Card = ({ title, description, skills, link, imagen }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">
                    <strong>
                        {title}
                    </strong>
                </h3>
                <div className='cont-img'>
                    <img src={imagen} alt="Task Image" className="imagenUrl" />
                </div>
                <br></br>
                <h5 className="card-text">
                    <strong>
                        Descripcion:
                    </strong>
                </h5>
                <p className='card-text'>
                    {description}
                </p>

                <h5 className="card-text">
                    <strong>
                        Habilidades Aprendidas:
                    </strong>
                </h5>
                <p>
                    {skills}
                </p>


            </div>
            <div className='buttons'>
                <a href={link} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    Link Tarea
                </a>
            </div>
            <br></br>
        </div>
    )
}
