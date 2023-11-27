import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import clsx from 'clsx';
import { Alert, Snackbar } from '@mui/material';

import { useMediaQuery } from '../../hooks';
import { TABLET_LG_BREAKPOINT_MAX } from '../../constants';
import { OrderContext } from '../../contexts/OrderContext';

import ProjectDescription from './ProjectDescription';
import styles from './ProjectItem.module.scss';

import type { ImageProps } from 'next/image';

interface ProjectItemProps {
  id: number,
  src: string;
  title: string;
  alt: string;
  desc: string;
  price: string;
  width?: number;
  height?: number;
  layout: ImageProps['layout'];
  quality: number;
  rootProps?: React.HTMLAttributes<HTMLDivElement>;
}

const ProjectItem = ({
  id,
  src,
  title,
  alt,
  desc,
  price,
  width,
  height,
  layout,
  quality,
  rootProps,
}: ProjectItemProps) => {
  const [isShowDescription, setIsShowDescription] = useState(false);
  const isMobile = useMediaQuery(`(max-width: ${TABLET_LG_BREAKPOINT_MAX}px)`);

  const showDescription = () => setIsShowDescription(true);

  const hideDescription = () => setIsShowDescription(false);

  const { t } = useTranslation('projects');
  
  const [showModal, setShowModal] = useState(false);

  const [duplicate, setDuplicate] = useState(false);
  
  const [cartButton, setCartButton] = useState(0);

  const [newOrderList, setNewOrderList] = useState<{0: any; 1: any, 2: any, 3: any, 4: any}[]>([]);

  const addToCart = t('addToCart');

  const [open, setOpen] = useState(false);  
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div
      {...rootProps}
      className={clsx(styles.project, rootProps?.className)}
      onMouseEnter={showDescription}
      onMouseLeave={hideDescription}
      onClick={isMobile ? showDescription : undefined}
    >
        <div
          className={styles.projectImageBlock}
          onClick={() => setShowModal(true)}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            layout={layout}
            quality={quality}
          />
        </div>
      <div
        className={styles.projectTitleBlock}
        onClick={() => setShowModal(true)}
      >
          {title}
      </div>
      <div
        className={styles.projectDescBlock}
      >
        {desc}
      </div>
      <div
        className={styles.projectPriceBlock}
      >
        <div>{price}</div>
        <div
          className={styles.projectButtonBlock}
        >
          <OrderContext.Consumer>
            {({ order, setOrder }: any) => (
              <>
                {cartButton !== 0 &&
                  <div 
                    className={styles.projectButtonDelete} 
                    onClick={() => {
                      for (var index=0; index <= order.length-1; index++) {
                        if (order[index][0] === id) {
                          setDuplicate(true);
                          order[index][4]--;
                          setCartButton(order[index][4]);
                          if (order[index][4] === 0 ) {
                            order.filter((order:any) => (order[4]!==0)).map((newOrder:any) => (
                              newOrderList.push(newOrder)
                            ))
                            console.log(order);
                            console.log(newOrderList);
                            setOrder(newOrderList);
                            setNewOrderList([]);
                          }
                          return(false);
                        }
                      }
                    }}
                  >
                    <i className="fa fa-minus" aria-hidden="true"></i>
                  </div>
                }
                {cartButton !== 0 &&
                  <div className={styles.projectCount}>{cartButton}</div>
                }
                <div className={cartButton === 0 ? styles.projectButton : styles.projectButtonAdd} onClick={() => 
                  {
                    handleClick()
                    if (order.length > 0) {
                      for (var index=0; index <= order.length-1; index++) {
                        if (order[index][0] === id) {
                          setDuplicate(true);
                          order[index][4]++;
                          setCartButton(order[index][4]);
                          return(false);
                        }
                      }
                      if (duplicate === true) {
                        setDuplicate(false)
                      }
                      else {
                        setOrder([...order, [id, title, price, src, 1]]);
                        setCartButton(1);
                      }
                    }
                    else
                    {
                      setCartButton(1);
                      setOrder([...order, [id, title, price, src, 1]]);
                    }
                  }
                }>
                  {order.map((order:any) => (
                    order[0] === id &&
                    setCartButton(order[4])
                  ))}
                  {cartButton !== 0 ? <i className="fa fa-plus" aria-hidden="true"></i> : `${addToCart}`}
                </div>                
                <Snackbar
                  open={open}
                  autoHideDuration={3000}
                  onClose={handleClose}
                >
                  <Alert
                    className={styles.snackbar}
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: '100%' }}
                  >
                    {t('alert')}
                  </Alert>
                </Snackbar>
              </>
            )}
          </OrderContext.Consumer>
        </div>
      </div>
        <ProjectDescription
          src={src}
          alt={alt}
          active={showModal}
          title={title}
          desc={desc}
          price={price}
          setShowModal={setShowModal}
          onClick={isMobile ? hideDescription : undefined}
        />
    </div>
  );
};

export default ProjectItem;
