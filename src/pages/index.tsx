/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { gql, GraphQLClient } from 'graphql-request';
import Layout from 'components/common/Layout';
import Head from 'next/head';
import Header from 'components/projects/Header';
import Sort from 'components/projects/Sort';
import Projects from 'components/projects/Projects';
import { ProjectsProps } from 'types/types';
import { useState } from 'react';

export default function Home({ projects }: ProjectsProps) {
  const [sorted, setSorted] = useState(projects);

  const filter = (cata = `ALL`) => {
    if (cata === `ALL`) {
      return setSorted(projects);
    } else {
      return setSorted(
        projects.filter((project) => project.category.includes(cata)),
      );
    }
  };

  return (
    <Layout>
      <Head>
        <title>FRONTEND CARDIO 💪</title>
        <meta
          name="description"
          content="KOLA'S CATALOGUE OF PROJECTS, CHALLENGES & EXPERIMENTS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header length={projects.length} />
      <Sort filter={filter} />
      <Projects projects={sorted} />
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
      projects(orderBy: createdAt_DESC) {
        id
        name
        category
        codeLink
        poster {
          url
        }
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
