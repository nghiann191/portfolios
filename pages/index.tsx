import type { NextPage } from 'next';

import Infor from '../components/Infor';
import Layout from '../layouts';

const Home: NextPage = () => {
  return (
    <Layout>
      <Infor />
    </Layout>
  );
};

export default Home;
