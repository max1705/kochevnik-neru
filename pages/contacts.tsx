import React from 'react';
import { CSSProperties } from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import clsx from 'clsx';

import styles from '../styles/Contacts.module.scss';
import { KOCHEVNIK, PHONE } from '../constants';

import type { NextPage } from 'next';

const Contacts: NextPage = () => {
  const { t } = useTranslation('contacts');

  return (
    <>
      <Head>
        <title>{`${KOCHEVNIK} | ${t('title')}`}</title>
      </Head>
      <main className={styles.contacts}>
        <div className={styles.mainInfo}>
          <div className={clsx(styles.infoBlock, 'kochevnikAnimation kochevnikAnimation--fadeIn')}>
            <span className={styles.infoTitle}>{t('form.infoTitle')}</span>
          </div>
          <div
            className={clsx(styles.infoBlock, 'kochevnikAnimation kochevnikAnimation--fadeIn')}
            style={{ '--kochevnik-animation-delay-factor': 2 } as CSSProperties}
          >
            <span className={styles.infoTitle}>{t('form.addressTitle')}</span>
            <div>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://go.2gis.com/6mxdbn"
                className={clsx('kochevnikLink', styles.infoText)}
              >
                {t('form.addressText')}
              </a>
            </div>
          </div>
          <div
            className={clsx(styles.infoBlock, 'kochevnikAnimation kochevnikAnimation--fadeIn')}
            style={{ '--kochevnik-animation-delay-factor': 3 } as CSSProperties}
          >
            <span className={styles.infoTitle}>{t('form.worktimeTitle')}</span>
            <span className={styles.infoText}>{t('form.worktimeText')}</span>
          </div>
          <div
            className={clsx(styles.infoBlock, 'kochevnikAnimation kochevnikAnimation--fadeIn')}
            style={{ '--kochevnik-animation-delay-factor': 4 } as CSSProperties}
          >
            <span className={styles.infoTitle}>{t('form.phoneTitle')}</span>
            <div>
              <a
                href={`tel:${PHONE}`}
                className={clsx('kochevnikLink', styles.infoText)}
              >
                {PHONE}
              </a>
            </div>
          </div>
          <div
            className={clsx(styles.infoBlock, 'kochevnikAnimation kochevnikAnimation--fadeIn')}
            style={{ '--kochevnik-animation-delay-factor': 5 } as CSSProperties}
          >
            <div>
              <iframe src="https://yandex.ru/map-widget/v1/?ll=124.700943%2C56.662107&mode=whatshere&whatshere%5Bpoint%5D=124.699012%2C56.662553&whatshere%5Bzoom%5D=17&z=17" width="100%" height="400">
              </iframe>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'contacts', 'header', 'footer'])),
  },
});

export default Contacts;
