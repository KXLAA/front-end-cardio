import { gql, GraphQLClient } from 'graphql-request';
import Layout from 'components/common/Layout';
import Header from 'components/projects/Header';
import Sort from 'components/projects/Sort';
import Projects from 'components/projects/Projects';
import { useState } from 'react';

export default function Home({ projects }) {
  const [category, setCategory] = useState(`ALL`);

  return (
    <Layout>
      <Header />
      <Sort />
      <Projects projects={projects} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const token = process.env.TOKEN;
  const endpoint = process.env.ENDPOINT;

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const query = gql`
    query {
      projects {
        name
        category
        codeLink
        liveLink
        demomp4 {
          url
        }
        demowebm {
          url
        }
      }
    }
  `;

  const data = await graphQLClient.request(query);
  const { projects } = data;

  return {
    props: {
      projects,
    },
  };
};
