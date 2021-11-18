import { Component } from 'react';
import Finder from '../../assets/finder.png';
import Podcast from '../../assets/podcast.png';
import Todo from '../../assets/todo.png';
import GitHub from '../../assets/github.png';

import './style.scss';

export default class Projetos extends Component {
  constructor() {
    super();
    this.state = {
      projectList: [
        {
          id: 1,
          nome: 'PodCastream',
          github: 'https://github.com/GustBitencourt/PodCastream',
          url: 'https://gustbitencourt.github.io/PodCastream/',
          img: Podcast
        },
        {
          id: 2,
          nome: 'To-Doo',
          github: 'https://github.com/GustBitencourt/CheckPoint2FrontII',
          url: 'https://gustbitencourt.github.io/CheckPoint2FrontII/',
          img: Todo
        },
        {
          id: 3,
          nome: 'Finder Restaurants',
          github: 'https://github.com/GustBitencourt/DIO-EstudoReact',
          url: 'https://unruffled-swirles-04e0a0.netlify.app/',
          img: Finder
        }
      ]

    };
  }

  render() {

    return (
      <section id="projetos">        
          {this.state.projectList.map(({ id, nome, url, github, img }) => {
            return (
              <>                
                <div className="card" key={id} >
                  <h3>{nome}</h3>
                  <div className="link">
                    <a className="imagemProjeto" href={url}><img alt="imagem projeto" src={img} /></a>
                    <a className="iconeGitHub " href={github}><img alt="imagem github" src={GitHub} /></a>
                  </div>
                </div>
              </>
            )
          })
          }
      </section>
    );
  }
}