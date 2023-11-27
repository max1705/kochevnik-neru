import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { KOCHEVNIK } from '../constants';

import type { NextPage } from 'next';

const FourOhFour: NextPage = () => {
  const { t } = useTranslation('404');
  return (
    <>
      <Head>
        <title>{`${KOCHEVNIK} | ${t('title')}`}</title>
      </Head>
      <main
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '80vh',
          textAlign: 'center',
        }}
      >
        <h2>{t('errorText')}</h2>
      </main>
    </>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', '404', 'header', 'footer'])),
  },
});

export default FourOhFour;
