import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navigation />
      <Main>{children}</Main>
    </>
  );
};

export default Layout;

const Main = styled.div``;
