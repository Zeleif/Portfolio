
import React from 'react';
import bullesImage from '../../assets/img/montagne.jpg';
import Navbar from '../../components/navbar/NavBar';
import Snow from '../../components/snow/Snow';
import ScrollDownButton from '../../components/scroll/ScrollDownButton';





const Home = () => {
  return (
    <div id='home' className="nav">
      <Navbar />
      <div className="home-container" style={{ backgroundImage: `url(${bullesImage})` }}>
        <Snow />
        <ScrollDownButton targetSection="about" />
        <h1>Mon Portfolio</h1>
        <p>
          Bienvenue sur mon portfolio. Je suis une développeuse en herbe, escaladant les sommets du code. Comme une
          alpiniste numérique, j'aime explorer des terrains inconnus et transformer chaque défi en opportunités.
          Prêts à embarquer dans cette aventure avec moi??
        </p>
        <br />
        <p>
          Welcome to my portfolio. I'm a budding developer, climbing the peaks of code. Like a digital mountaineer,
          I enjoy exploring uncharted territories and turning every challenge into opportunities.
          Ready to embark on this adventure with me?
        </p>
      </div>

    </div>
  );
};

export default Home;



