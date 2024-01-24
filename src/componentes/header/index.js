import React, { useEffect, useState } from 'react';
import './estilo.css'; // Certifique-se de importar seu arquivo CSS
import Logo from '../logo';
import Textos from "../textos"
import Beneficios from '../beneficios';

const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
  
        if (currentScrollPos > prevScrollPos && currentScrollPos > 50) {
          setIsHeaderHidden(true);
        } else {
          setIsHeaderHidden(false);
        }
  
        setPrevScrollPos(currentScrollPos);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [prevScrollPos]);
  return (
    <div>
      <header id="meuHeader" className="header-fixed">
      <Logo></Logo>
      </header>
      <body className='bodyzin'>
        <div className='textos-fundepes'><Textos></Textos></div>
        <div className='line'></div>
        <div className='beneficios'><Beneficios></Beneficios></div>
      </body>
    </div>
  );
};


export default Header;
