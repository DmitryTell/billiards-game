import { FC, ReactNode } from 'react';

import * as Styled from './layout.styled';


interface ILayoutProps {
  children: ReactNode;
}

export const Layout: FC<ILayoutProps> = ({ children }) => (
  <Styled.LayoutWrapper>
    <Styled.LayoutContainer>
      { children }
    </Styled.LayoutContainer>
  </Styled.LayoutWrapper>
);
