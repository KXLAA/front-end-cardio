/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { gql, GraphQLClient } from 'graphql-request';
import Layout from 'components/common/Layout';
import Header from 'components/projects/Header';
import Sort from 'components/projects/Sort';
import Projects from 'components/projects/Projects';
import { ProjectsProps } from 'types/types';

export default function Home({ projects }: ProjectsProps) {
  return (
    <Layout>
      <Header length={projects.length} />
      <Sort />
      <Projects projects={projects} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const token = process.env.TOKEN;
  const endpoint = process.env.ENDPOINT;

  const graphQLClient = new GraphQLClient(endpoint!, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const query = gql`
    query {
      projects {
        id
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
