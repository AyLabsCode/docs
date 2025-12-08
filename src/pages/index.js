import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import HomepageFeatures from '../components/HomepageFeatures'; // Importation du composant Features
import styles from './index.module.css';

// --- 1. En-tête de la Page (Hero Section) ---
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          Bienvenue sur les Docs d'<strong>AyLabs</strong> !
        </Heading>

        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          Toutes les documentations <strong>Domotique & Homelab</strong> centralisées, écrites par Aymeric, améliorées par la communauté.
        </p>

        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/domotique/intro">
            Démarrer la lecture 📖
          </Link>
        </div>
      </div>
    </header>
  );
}

// --- 2. Composant Principal ---
export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`Accueil`}
      description="Domotique et Homelab, les documentations communautaires d'AyLabs">

      <HomepageHeader />

      <main>
        <HomepageFeatures />

        <hr className='container text--center' />


        <section className={styles.communitySection}>
          <div className="container text--center padding-vert--lg">
            <Heading as="h1" className={styles.sectionHeading}>
              🤝 Rejoignez l'Effort Communautaire
            </Heading>
            <Heading as="h3" className={styles.sectionHeading}>
              Ces documentations sont <strong>Open Source</strong>.
            </Heading>
            <p>
              Si un article n'est plus à jour ou si vous avez une meilleure approche,
              n'hésitez pas à proposer une modification, via le lien <strong>Éditer cette page</strong> présent à la fin de chaque page !
            </p>
            <Link
              className="button button--outline button--primary margin-top--md"
              href="https://github.com/AyLabsCode/docs"
              target="_blank">
              Contribuer sur GitHub 🐙
            </Link>
          </div>
        </section>

      </main>
    </Layout>
  );
}