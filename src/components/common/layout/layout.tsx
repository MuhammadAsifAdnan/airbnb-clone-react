import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';

import './layout.scss';

interface ILayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className="layoutWrapper">
      <Header />
      <div className="childrenWrapper">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
