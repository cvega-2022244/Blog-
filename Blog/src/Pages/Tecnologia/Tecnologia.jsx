import React from 'react';
import { Navbar } from '../../Components/Navbar/Navbar';
import { Card } from '../../Components/Card/Card';
import '../Css.css'
import tarea1 from './imgTecno/tarea1T.png'
import tarea2 from './imgTecno/tarea2T.png'
import tarea3 from './imgTecno/tarea3T.png'
import tarea4 from './imgTecno/tarea4T.png'
import tarea5 from './imgTecno/tarea5T.png'
import tarea1B2 from './imgTecno/tarea1B2T.png'
import tarea2B2 from './imgTecno/tarea2B2T.png'
import tarea3B2 from './imgTecno/tarea3B2T.png'
import tarea4B2 from './imgTecno/tarea4B2T.png'

export const Tecnologia = () => {

    const tareas1 = [
        {
            id: 1,
            imagen: tarea1,
            title: 'Infografia',
            description: 'Infografia sobre desarrollo web y procesadores',
            skills: 'HTML5, CSS3, FlexBox, Bootstrap LESS, SASS, PUG, JADE',
            link: 'https://cetkinal-my.sharepoint.com/:b:/g/personal/cvega-2022244_kinal_edu_gt/EcSaRA2hRY1IhhrOV4DiZKkB0YxMRzJrbG5Yqd4z3qi3YA?e=XVOSoW'
        },
        {
            id: 2,
            imagen: tarea2,
            title: 'Mapa conceptual',
            description: 'Mapa conceptual sobre tecnologias web',
            skills: 'Javascript, AJAX, MVVM, MVC, DenoJS, MeteorJS, NextJS, GraphQL, BackboneJs',
            link: 'https://cetkinal-my.sharepoint.com/:b:/g/personal/cvega-2022244_kinal_edu_gt/ERhLjqQMhDlJrtmtNU6f2ZABTHIF1HAns0d1ATNwulH6wQ?e=rpJcUq'
        },
        {
            id: 3,
            imagen: tarea3,
            title: 'Prueba objetiva',
            description: 'Evaluacion de conocimientos sobre temas de tareas anteriores',
            skills: 'Evaluacion de conocimientos sobre temas de tareas anteriores'
        },
        {
            id: 4,
            imagen: tarea4,
            title: 'Mapa mental',
            description: 'Mapa mental sobre desarrollo web',
            skills: 'Hosting, Dominio, Cliente-Servidor, Web semántica, WebM, Canvas, W3C',
            link: 'https://cetkinal-my.sharepoint.com/:b:/g/personal/cvega-2022244_kinal_edu_gt/ERUjxDgkaGhIkllACespl4ABnPnP6qyR8h0Xx4F0C7D5UQ?e=JL6Cys'
        },
        {
            id: 5,
            imagen: tarea5,
            title: 'Prueba Objetiva #2',
            description: 'Kahoot en clase',
            skills: 'NodeJs, ExpressJs, MongoDB',
        }
    ];

    const tareas2 = [
        {
            id: 1,
            imagen: tarea1B2,
            title: 'Infografia',
            description: 'Beneficios de la utilización de ReactJS',
            skills: 'React',
            link: 'https://cetkinal-my.sharepoint.com/:b:/g/personal/cvega-2022244_kinal_edu_gt/ET6R1wlmvLNEiSwEr9ac33sBxQTG99WRPojnITK2HXrG5w?e=C9MSvF'
        },
        {
            id: 2,
            imagen: tarea2B2,
            title: 'Investigación',
            description: 'API, Rest, RestFull, buenas prácticas de desarrollo de API’s.',
            skills: 'Estilos de codificación',
            link: 'https://cetkinal-my.sharepoint.com/:b:/g/personal/cvega-2022244_kinal_edu_gt/EaOhd8_rEL9PkhgCpC2dLNoBERSyyhvSh5pxdGbEfqaEoQ?e=PvKHyI'
        },
        {
            id: 3,
            imagen: tarea3B2,
            title: 'Propuesta proyecto',
            description: 'Propuesta para proyecto final que solvente un problema social',
            skills: 'NodeJs, React, MongoDB, ExpressJs',
            link: 'https://cetkinal-my.sharepoint.com/:b:/g/personal/cvega-2022244_kinal_edu_gt/EVq2xWV4ldNKulCUK7EPx_UBbgIEzuhn80bRSDPvpTOuxw?e=ysGaF6'
        },
        {
            id: 4,
            imagen: tarea4B2,
            title: 'Exposición de proyecto',
            description: 'Exposición sobre propuesta para proyecto final que solvente un problema social',
            skills: 'NodeJs, React, MongoDB, ExpressJs',
            link: 'https://cetkinal-my.sharepoint.com/:b:/g/personal/cvega-2022244_kinal_edu_gt/EbrEUgzNIm9Ir1oWIn83a18BxF-FVmLmuCj-CZqxbeLMjg?e=WDvWUi'
        }
    ];

    return (
        <div>
            <Navbar />
            <div className='task-grid'>
                {tareas1.map((tarea) => (
                    <Card
                        key={tarea.id}
                        imagen={tarea.imagen}
                        title={tarea.title}
                        description={tarea.description}
                        skills={tarea.skills}
                        link={tarea.link}
                    />
                ))}
            </div>
            <center>
                <h1>Bimestre 2</h1>
            </center>
            <div className='task-grid'>
            {tareas2.map((tarea) => (
                    <Card
                        key={tarea.id}
                        imagen={tarea.imagen}
                        title={tarea.title}
                        description={tarea.description}
                        skills={tarea.skills}
                        link={tarea.link}
                    />
                ))}
            </div>
        </div>
    );
};