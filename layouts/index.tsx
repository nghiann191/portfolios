import React from 'react';

import { Container } from '@chakra-ui/react';
import Head from 'next/head';

import Header from '../components/Header/Header';
import styles from '../styles/Home.module.css';

type Props = {
  children: React.ReactNode;
};

const Layout = React.memo(function Layout({ children }: Props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Profile of N3</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/logo1.png" />
      </Head>

      <header className={styles.header}>
        <Header />
      </header>
      <main className={styles.main}>
        <Container maxW="container.sm">{children}</Container>
      </main>

      <footer className={styles.footer}>
        <span>© 2022 N3 All Rights Reserved.</span>
      </footer>
    </div>
  );
});

export default Layout;
