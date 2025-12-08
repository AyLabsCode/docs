import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Formations',
    emoji: '📚',
    description: (
      <>
        Des guides pas-à-pas pour vous aider à configurer votre Domotique ou Homelab,
        quel que soit votre niveau d&apos;expertise.
      </>
    ),
  },
  {
    title: 'Conseils',
    emoji: '💡',
    description: (
      <>
        Des conseils d'achat, des meilleures pratiques et des astuces pour optimiser
        vos installations Domotique et Homelab.
      </>
    ),
  },
  {
    title: 'Centralisé',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Tout le travail d'Aymeric <strong>(mais pas que)</strong> est rassemblé en un seul endroit,
        facilitant la recherche et l'accès aux informations dont vous avez besoin.
      </>
    ),
  },
];

function Feature({ emoji, Svg, title, description }) {

  const IconContent = () => {
    if (Svg) {
      return <Svg className={styles.featureSvg} role="img" />;
    }

    if (emoji) {
      return <span style={{ fontSize: '4rem' }}>{emoji}</span>;
    }

    return null;
  };

  return (
    <div className={clsx('col col--4')}>
      <div className="text--center margin-bottom--md">
        <IconContent />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
