import { Layout, Canvas } from '@components/';

import { GlobalStyle } from './style';


export const App = () => (
  <>
    <GlobalStyle />
    <Layout>
      <Canvas />
    </Layout>
  </>
);
