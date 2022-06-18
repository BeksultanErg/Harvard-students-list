import React from 'react';

const Header = () => {
   return (
      <header className="header">
         <div className="container">
            <div className="header__inner">
               <div className="logo">
                  <a href="/">
                     <img width={'100px'} height={'100px'} src="https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/1200px-Harvard_shield_wreath.svg.png" alt="logo" />
                  </a>
               </div>
               <nav className="nav">
                  <a className='nav__link' href="/">About teachers</a>
                  <a className='nav__link' href="/">About students</a>
                  <a className='nav__link' href="/">About employees</a>
               </nav>
            </div>
         </div>
      </header>
   );
};

export default Header;