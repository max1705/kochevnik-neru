import Image from 'next/image';
import { useState } from 'react';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';

import { OrderContext } from '../../contexts/OrderContext';

import styles from './CartItem.module.scss';

import type { ImageProps } from 'next/image';

interface CartItemProps {
  id: number,
  src: string;
  title: string;
  price: string;
  count: number;
  sum: number;
  layout: ImageProps['layout'];
  quality: number;
  rootProps?: React.HTMLAttributes<HTMLDivElement>;
  setTotal: any;
}

const CartItem = ({
  id,
  src,
  title,
  price,
  count,
  sum,
  layout,
  quality,
  rootProps,
  setTotal
}: CartItemProps) => {

  const [newOrderList, setNewOrderList] = useState<{0: any; 1: any, 2: any, 3: any, 4: any}[]>([]);
  const { t } = useTranslation('cart');

  return (
    <div
      {...rootProps}
      className={clsx(styles.cart, rootProps?.className)}
    >
        <div
          className={styles.cartImageBlock}
        >
          <Image
            src={src}
            alt={title}
            layout={layout}
            quality={quality}
          />
        </div>
      <div
        className={styles.cartTitleBlock}
      >
        {title}
      </div>
      <div
        className={styles.cartPriceBlock}
      >        
        <div>{t('count')}: {count}</div>
        <div>{parseInt(price)*count} {t('currency')}</div>
        <OrderContext.Consumer>
          {({ order, setOrder }: any) => (
            <div 
              className={styles.cartDeleteButton}
              onClick={() => {
                for (var index=0; index <= order.length-1; index++) {
                  if (order[index][0] === id) {
                    order.filter((order:any) => (order[0]!==id)).map((newOrder:any) => (
                      newOrderList.push(newOrder)
                    ))
                    if (order.length === 1) {
                      setTotal(0)
                    }
                    else
                    {
                      setTotal(sum)
                    }
                    setOrder(newOrderList);
                    setNewOrderList([]);
                    return(false);
                  }
                }
              }}
            >        
              <i className="fa fa-trash" aria-hidden="true"></i>
            </div>
          )}
        </OrderContext.Consumer>
      </div>
    </div>
  );
};

export default CartItem;
