import Layout from 'components/common/Layout';
import Header from 'components/projects/Header';
import Sort from 'components/projects/Sort';
import Projects from 'components/projects/Projects';

export default function Home() {
  return (
    <Layout>
      <Header />
      <Sort />
      <Projects />
    </Layout>
  );
}
