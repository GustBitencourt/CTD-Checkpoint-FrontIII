import { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Projects from './components/Projects';

import './App.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      lightTheme: true
    }
  }

  autor = `Gustavo Bitencourt`;
  marca = 'GBG';

  render() {
    return(
      <>
        <Header id="about" marca={this.marca} />
        <main>
          <Banner>
          <section>
            <div>
              <h1 id="title">
                <a href="/">Gustavo Bitencourt</a>
              </h1>
              <img id="me" src="/img/me.jpg" alt="Gustavo Bitencourt" />
            </div>
            <div>
              <p>Nascido e criado em São Paulo, tenho 25 anos, estudo na DigitalHouse Brasil no curso Certfied Tech developer </p>
            </div>
          </section>
          </Banner>
          <Projects />
        </main>                        
        <Footer marca={this.autor} />              
      </>  
  )
}}
