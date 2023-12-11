import React, { useState, useEffect } from 'react';
import ScrollDownButton from '../../components/scroll/ScrollDownButton';
import ScrollUpButton from '../../components/scroll/ScrollUpButton';



const AboutMe = () => {
  const [isBoxActive, setIsBoxActive] = useState(false);

  const activateBox = () => {
    setIsBoxActive(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      activateBox();
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const [isExpandedFR, setIsExpandedFR] = useState({
    whoAmI: false,
    codeMeaning: false,
    portfolioInfo: false,
  });

  const [isExpandedEN, setIsExpandedEN] = useState({
    whoAmI: false,
    codeMeaning: false,
    portfolioInfo: false,
  });

  const toggleSection = (section, language) => {
    if (language === 'FR') {
      setIsExpandedFR({
        ...isExpandedFR,
        [section]: !isExpandedFR[section],
      });
    } else if (language === 'EN') {
      setIsExpandedEN({
        ...isExpandedEN,
        [section]: !isExpandedEN[section],
      });
    }
  };

  return (
    <div id='about' className='AboutContainer'>
      <ScrollUpButton targetSection="home" />
      <ScrollDownButton targetSection="projects" />
      <div className="blockA"></div>
      <div className="blockB"></div>
      <h2>À propos de moi</h2>
      <br />
      <div className='subtitle'>
        <h3 onClick={() => toggleSection('whoAmI', 'FR')}>Qui suis-je?</h3>
        {isExpandedFR.whoAmI && (
          <span>
            Salut, moi c'est Sylvie, une exploratrice du code et une amoureuse de l'apprentissage constant !
            Originaire de Bretagne, je suis une développeuse front-end en herbe,
            toujours partante pour de nouvelles aventures dans le monde du développement web.
          </span>
        )}
        <br />
        <h3 onClick={() => toggleSection('whoAmI', 'EN')}>Who am I?</h3>
        {isExpandedEN.whoAmI && (
          <span>
            Hi, I'm Sylvie, a code explorer and a lover of continuous learning! Originally from Brittany,
            I'm a budding front-end developer, always ready for new adventures in the world of web development.
          </span>
        )}
        <br />
        <br />
        <h3 onClick={() => toggleSection('codeMeaning', 'FR')}>Qu'est-ce que le code pour moi?</h3>
        {isExpandedFR.codeMeaning && (
          <span>
            Pour moi, le développement, c'est bien plus qu'une suite de lignes de code.
            C'est un terrain de jeu infini où la curiosité est la boussole et l'apprentissage, le carburant.
            Je me suis lancée dans ce voyage excitant avec une conviction profonde : dans le code, l'ennui n'a pas sa place.
            Entre les énigmes de JavaScript, les acrobaties avec CSS et les constructions robustes en HTML,
            chaque projet est une nouvelle énigme à résoudre et une opportunité d'apprendre quelque chose de nouveau.
            Si vous vous demandez où je suis quand je ne suis pas devant l'écran, la réponse est simple : en train de chercher le prochain défi à relever.
          </span>
        )}
        <br />
        <h3 onClick={() => toggleSection('codeMeaning', 'EN')}>What does coding mean to me?</h3>
        {isExpandedEN.codeMeaning && (
          <span>
            For me, development is much more than a series of code lines.
            It's an endless playground where curiosity is the compass and learning is the fuel.
            I embarked on this exciting journey with a deep conviction: in code, boredom has no place.
            Between JavaScript puzzles, CSS acrobatics, and robust HTML structures, each project is a new puzzle to solve and an opportunity to learn something new.
            If you're wondering where I am when I'm not in front of the screen, the answer is simple: searching for the next challenge to conquer.
          </span>
        )}
        <br />
        <br />
        <h3 onClick={() => toggleSection('portfolioInfo', 'FR')}>Qu'apporte mon portfolio?</h3>
        {isExpandedFR.portfolioInfo && (
          <span>
            Ce portfolio est une fenêtre sur mon parcours d'apprentissage. Vous partagez ma passion pour le code, l'innovation et une bonne dose d'humour geek?
            vous êtes au bon endroit! Si vous avez des questions, des idées de collaboration ou simplement une anecdote amusante sur le monde du développement web,
            je suis toute ouïe. Parce que dans ce voyage, plus on est de fous, plus on code !
          </span>
        )}
        <br />
        <h3 onClick={() => toggleSection('portfolioInfo', 'EN')}>What does my portfolio bring?</h3>
        {isExpandedEN.portfolioInfo && (
          <span>
            This portfolio is a window into my learning journey. You share my passion for code, innovation, and a good dose of geeky humor? you're in the right place!
            Whether you have questions, collaboration ideas, or just a funny anecdote about the world of web development, I'm all ears. Because in this journey,
            the more, the merrier, and the more we code! This portfolio is a window into my learning journey.
          </span>
        )}
      </div>
    </div>

  );
};

export default AboutMe;
