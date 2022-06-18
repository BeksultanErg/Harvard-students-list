import React from 'react';

const Footer = () => {
   return (
      <footer className="footer">
         <div className="container">
            <div className="footer__inner">
               <div className="year">
                  <p>
                     © 2022 The President and Fellows of Harvard College
                  </p>
               </div>
               <div className="footer__logo">
                  <a href="/">
                     <img width={'150px'} height={'96px'} src="https://www.harvard.edu/wp-content/themes/core/assets/img/theme/branding-assets/footer-logo.svg" alt="logo" />
                  </a>
               </div>
               <div className="social">
                  <a className='social__link' href="https://www.facebook.com/Harvard/">Facebook</a>
                  <a className='social__link' href="https://twitter.com/harvard">Twitter</a>
                  <a className='social__link' href="https://www.instagram.com/harvard/">Instagram</a>
                  <a className='social__link' href="https://www.youtube.com/harvard">YouTube</a>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;