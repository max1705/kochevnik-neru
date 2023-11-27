import React, { useState } from 'react';
import { CSSProperties } from 'react';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import styles from '../styles/Cart.module.scss';
import { KOCHEVNIK } from '../constants';
import FeedbackForm from '../components/FeedbackForm';
import { OrderContext } from '../contexts/OrderContext';
import CartItem from '../components/CartItem';

import type { NextPage } from 'next';

const Cart: NextPage = () => {
  const { t } = useTranslation('cart');
  const [total, setTotal] = useState(0);
  const [finalOrder, setFinalOrder] = useState('');
  let orderString='';
  let sum=0;
  return (
    <>
      <Head>
        <title>{`${KOCHEVNIK} | ${t('title')}`}</title>
      </Head>
      <h1 className={styles.mainTitle}>
        {t('subtitle')}
      </h1>
      <main className={styles.contacts}>
        <div className={styles.mainInfo}>
          <div className={styles.orderList}>
            <OrderContext.Consumer>
              {({ order, setOrder }: any) => (
                order.length === 0 ? 
                <div className={styles.empty}>{t('emptyCart')}</div>
                :
                order.map((order:any, index:number) => (
                  <>
                    <div className={styles.clearCartButton} onClick={() => {setOrder([]); setTotal(0)}}>{t('clearButton')}</div>
                    <div className={styles.sumList}>
                      {sum = sum + parseInt(order[2].substring(0, order[2].length - 3)) * order[4]}
                      {
                        order[4] > 4 ?
                        orderString=orderString + order[1] + ' - ' + order[4] + ' порций, \n'
                        :
                        order[4] > 1 ?
                        orderString=orderString + order[1] + ' - ' + order[4] + ' порции, \n'
                        :
                        orderString=orderString + order[1] + ' - ' + order[4] + ' порция, \n'
                      }
                    </div>
                    <CartItem
                      key={order[0]}
                      id={order[0]}
                      title={order[1]}
                      price={order[2]}
                      src={order[3]}
                      count={order[4]}
                      sum={sum}
                      setTotal={setTotal}
                      rootProps={{
                        className: 'kochevnikAnimation kochevnikAnimation--fadeInUp',
                        style: {
                          '--kochevnik-animation-delay-factor': index + 1,
                        } as CSSProperties,
                      }}
                      {...order}
                    />
                    {setTotal(sum)}
                    {setFinalOrder(orderString)}
                  </>
                ))
              )}
            </OrderContext.Consumer>
            {total !== 0 && 
              <>
                <div className={styles.total}>{t('total')}{total} {t('currency')}</div>
                {console.log(orderString)}
                {/* <OrderContext.Consumer>
                  {({ setOrder }: any) => ( */}
                    <FeedbackForm 
                      finalOrder={finalOrder} 
                      total={total} 
                      // setTotal={setTotal} 
                      // setOrder={setOrder} 
                    />
                  {/* )}
                </OrderContext.Consumer> */}
              </>
            }
          </div>
        </div>
      </main>
    </>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'cart', 'contacts', 'header', 'footer'])),
  },
});

export default Cart;
