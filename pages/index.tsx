import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useMemo } from 'react';
import Image from 'next/image';

import { KOCHEVNIK } from '../constants';
import styles from '../styles/Projects.module.scss';
import ProjectMenu from '../components/Projects';

import type { CSSProperties } from 'react';
import type { ImageProps } from 'next/image';

interface CategoryMenu {
  id: number;
  src: string;
  title: string;
  alt: string;
  width?: number;
  height?: number;
  padding: number;
  layout: ImageProps['layout'];
  quality: number;
}

const Home = () => {
  const { t } = useTranslation('projects');

  const categoryMenu: CategoryMenu[] = useMemo(
    () => [
      {
        id: 1,
        src: '/img/biznes-lanch-1.png',
        title: t('menu.businessLunch'),
        alt: 'businesslunch',
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
      },
      {
        id: 2,
        src: '/img/sup-lapsha-domashnyaya-450g.png',
        title: t('menu.firstСourse'),
        alt: 'firstСourse',
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
      },
      {
        id: 3,
        src: '/img/buuzy-1sht-75g.png',
        title: t('menu.secondСourse'),
        alt: 'secondСourse',
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
      },
      {
        id: 4,
        src: '/img/kochevnik-350g.png',
        title: t('menu.dishInPan'),
        alt: 'dishInPan',
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
      },
      {
        id: 5,
        src: '/img/cheburek-1sht.png',
        title: t('menu.bakery'),
        alt: 'bakery',
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
      },
      {
        id: 6,
        src: '/img/mors-brusnichnyj-1l.png',
        title: t('menu.beverages'),
        alt: 'beverages',
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
      },
      {
        id: 7,
        src: '/img/salat-cezar-s-kuricej-170g.png',
        title: t('menu.salad'),
        alt: 'salad',
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
      },
      {
        id: 8,
        src: '/img/pepperoni-700g.png',
        title: t('menu.pizza'),
        alt: 'pizza',
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
      },
      {
        id: 9,
        src: '/img/buuzy-zamorozhennye-75g.png',
        title: t('menu.semiFinishedProducts'),
        alt: 'semiFinishedProducts',
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
      },
    ],
    [t]
  );

  return (
    <>
      <Head>
        <title>{`${KOCHEVNIK}`}</title>
      </Head>
      <div className={styles.logoBlock}>
        <Image
          src="/img/logo.jpg"
          alt="Kochevnik"
          width={1200}
          height={1200}
        />
      </div>

      <h1 className={styles.mainTitle}>{t('title')}</h1>
      <main className={styles.projects}>
        {categoryMenu.map((project, index) => (
          <ProjectMenu
            key={project.id}
            rootProps={{
              className: 'kochevnikAnimation kochevnikAnimation--fadeInUp',
              style: {
                '--kochevnik-animation-delay-factor': index + 1,
              } as CSSProperties,
            }}
            {...project}
          />
        ))}
      </main>
    </>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'projects', 'header', 'footer'])),
  },
});

export default Home;
