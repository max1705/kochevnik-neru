import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useMemo } from 'react';

import { KOCHEVNIK } from '../../constants';
import styles from '../../styles/Projects.module.scss';
import ProjectItem from '../../components/ProjectItem';

import type { NextPage } from 'next';
import type { ImageProps } from 'next/image';
import type { CSSProperties } from 'react';

interface BusinessLunchImage {
  id: number;
  src: string;
  title: string;
  alt: string;
  desc: string;
  price: string;
  width?: number;
  height?: number;
  padding: number;
  layout: ImageProps['layout'];
  quality: number;
  inOrder: boolean;
}

interface FirstСourseImage {
  id: number;
  src: string;
  title: string;
  alt: string;
  desc: string;
  price: string;
  width?: number;
  height?: number;
  padding: number;
  layout: ImageProps['layout'];
  quality: number;
  inOrder: boolean;
}

interface SecondСourseImage {
  id: number;
  src: string;
  title: string;
  alt: string;
  desc: string;
  price: string;
  width?: number;
  height?: number;
  padding: number;
  layout: ImageProps['layout'];
  quality: number;
  inOrder: boolean;
}

interface DishInPanImage {
  id: number;
  src: string;
  title: string;
  alt: string;
  desc: string;
  price: string;
  width?: number;
  height?: number;
  padding: number;
  layout: ImageProps['layout'];
  quality: number;
  inOrder: boolean;
}

interface BakeryImage {
  id: number;
  src: string;
  title: string;
  alt: string;
  desc: string;
  price: string;
  width?: number;
  height?: number;
  padding: number;
  layout: ImageProps['layout'];
  quality: number;
  inOrder: boolean;
}

interface BeveragesImage {
  id: number;
  src: string;
  title: string;
  alt: string;
  desc: string;
  price: string;
  width?: number;
  height?: number;
  padding: number;
  layout: ImageProps['layout'];
  quality: number;
  inOrder: boolean;
}

interface SaladImage {
  id: number;
  src: string;
  title: string;
  alt: string;
  desc: string;
  price: string;
  width?: number;
  height?: number;
  padding: number;
  layout: ImageProps['layout'];
  quality: number;
  inOrder: boolean;
}

interface SemiFinishedProductsImage {
  id: number;
  src: string;
  title: string;
  alt: string;
  desc: string;
  price: string;
  width?: number;
  height?: number;
  padding: number;
  layout: ImageProps['layout'];
  quality: number;
  inOrder: boolean;
}

interface PizzaImage {
  id: number;
  src: string;
  title: string;
  alt: string;
  desc: string;
  price: string;
  width?: number;
  height?: number;
  padding: number;
  layout: ImageProps['layout'];
  quality: number;
  inOrder: boolean;
}

const Projects: NextPage = () => {
  const { t } = useTranslation('projects');
  const businessLunch: BusinessLunchImage[] = useMemo(
    () => [
      {
        id: 1,
        src: '/img/biznes-lanch-1.png',
        title: t('businessLunch1.title'),
        alt: 'business-lunch 1',
        desc: t('businessLunch1.desc'),
        price: t('businessLunch1.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 2,
        src: '/img/biznes-lanch-2.png',
        title: t('businessLunch2.title'),
        alt: 'business-lunch 2',
        desc: t('businessLunch2.desc'),
        price: t('businessLunch2.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
    ],
    [t]
  );

  const firstCourse: FirstСourseImage[] = useMemo(
    () => [
      {
        id: 3,
        src: '/img/sup-lapsha-domashnyaya-450g.png',
        title: t('firstСourse1.title'),
        alt: 'sup-lapsha-domashnyaya-450g',
        desc: t('firstСourse1.desc'),
        price: t('firstСourse1.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 4,
        src: '/img/buhleor-iz-govyadiny-500g.png',
        title: t('firstСourse2.title'),
        alt: 'buhleor-iz-govyadiny-500g',
        desc: t('firstСourse2.desc'),
        price: t('firstСourse2.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 5,
        src: '/img/pelmeni-200g.png',
        title: t('firstСourse3.title'),
        alt: 'pelmeni-200g',
        desc: t('firstСourse3.desc'),
        price: t('firstСourse3.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 6,
        src: '/img/solyanka-sbornaya-450g.png',
        title: t('firstСourse4.title'),
        alt: 'solyanka-sbornaya-450g',
        desc: t('firstСourse4.desc'),
        price: t('firstСourse4.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 7,
        src: '/img/lagman-450g.png',
        title: t('firstСourse5.title'),
        alt: 'lagman-450g',
        desc: t('firstСourse5.desc'),
        price: t('firstСourse5.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 8,
        src: '/img/chingishan-450g.png',
        title: t('firstСourse6.title'),
        alt: 'chingishan-450g',
        desc: t('firstСourse6.desc'),
        price: t('firstСourse6.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 9,
        src: '/img/bayan-hoto-450g.png',
        title: t('firstСourse7.title'),
        alt: 'bayan-hoto-450g',
        desc: t('firstСourse7.desc'),
        price: t('firstСourse7.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      // {
      //   id: 10,
      //   src: '/img/okroshka-400g.png',
      //   title: t('firstСourse8.title'),
      //   alt: 'okroshka-400g',
      //   desc: t('firstСourse8.desc'),
      //   price: t('firstСourse8.price'),
      //   padding: 10,
      //   layout: 'intrinsic',
      //   quality: 75,
      //   width: 318,
      //   height: 179,
      //   inOrder: false,
      // },
    ],
    [t]
  );

  const secondСourse: SecondСourseImage[] = useMemo(
    () => [
      {
        id: 11,
        src: '/img/buuzy-1sht-75g.png',
        title: t('secondСourse1.title'),
        alt: 'buuzy-1sht-75g',
        desc: t('secondСourse1.desc'),
        price: t('secondСourse1.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 12,
        src: '/img/cujvan-220g.png',
        title: t('secondСourse2.title'),
        alt: 'cujvan-220g',
        desc: t('secondСourse2.desc'),
        price: t('secondСourse2.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 13,
        src: '/img/myaso-po-tajski-s-kartofelem-300g.png',
        title: t('secondСourse3.title'),
        alt: 'myaso-po-tajski-s-kartofelem-300g',
        desc: t('secondСourse3.desc'),
        price: t('secondСourse3.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 14,
        src: '/img/bifshteks-s-yaytsom-100g.png',
        title: t('secondСourse4.title'),
        alt: 'bifshteks-s-yaytsom-100g',
        desc: t('secondСourse4.desc'),
        price: t('secondСourse4.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 15,
        src: '/img/myaso-po-frantzuski-100g.png',
        title: t('secondСourse5.title'),
        alt: 'myaso-po-frantzuski-100g',
        desc: t('secondСourse5.desc'),
        price: t('secondСourse5.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 16,
        src: '/img/pasta-boloneze-330g.png',
        title: t('secondСourse6.title'),
        alt: 'pasta-boloneze-330g',
        desc: t('secondСourse6.desc'),
        price: t('secondСourse6.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 17,
        src: '/img/pasta-karbonara-270g.png',
        title: t('secondСourse7.title'),
        alt: 'pasta-karbonara-270g',
        desc: t('secondСourse7.desc'),
        price: t('secondСourse7.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 18,
        src: '/img/kartofel-fri-120g.png',
        title: t('secondСourse8.title'),
        alt: 'kartofel-fri-120g',
        desc: t('secondСourse8.desc'),
        price: t('secondСourse8.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 19,
        src: '/img/ris-s-ovoshhami-150g.png',
        title: t('secondСourse9.title'),
        alt: 'ris-s-ovoshhami-150g',
        desc: t('secondСourse9.desc'),
        price: t('secondСourse9.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
    ],
    [t]
  );

  const dishInPan: DishInPanImage[] = useMemo(
    () => [
      {
        id: 20,
        src: '/img/kochevnik-350g.png',
        title: t('dishInPan1.title'),
        alt: 'kochevnik-350g',
        desc: t('dishInPan1.desc'),
        price: t('dishInPan1.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 21,
        src: '/img/zhareha-na-skovorode-350g.png',
        title: t('dishInPan2.title'),
        alt: 'zhareha-na-skovorode-350g',
        desc: t('dishInPan2.desc'),
        price: t('dishInPan2.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 22,
        src: '/img/ustalyj-putnik-350g.png',
        title: t('dishInPan3.title'),
        alt: 'ustalyj-putnik-350g',
        desc: t('dishInPan3.desc'),
        price: t('dishInPan3.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 23,
        src: '/img/kurinaya-grudka-s-ovoshhami-280g.png',
        title: t('dishInPan4.title'),
        alt: 'kurinaya-grudka-s-ovoshhami-280g',
        desc: t('dishInPan4.desc'),
        price: t('dishInPan4.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 24,
        src: '/img/kurica-teriyaki-280g.png',
        title: t('dishInPan5.title'),
        alt: 'kurica-teriyaki-280g',
        desc: t('dishInPan5.desc'),
        price: t('dishInPan5.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
    ],
    [t]
  );

  const bakery: BakeryImage[] = useMemo(
    () => [
      {
        id: 25,
        src: '/img/cheburek-1sht.png',
        title: t('bakery1.title'),
        alt: 'cheburek-1sht',
        desc: t('bakery1.desc'),
        price: t('bakery1.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 26,
        src: '/img/bliny-farshirovannye-myasom-110g.png',
        title: t('bakery2.title'),
        alt: 'bliny-farshirovannye-myasom-110g',
        desc: t('bakery2.desc'),
        price: t('bakery2.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 27,
        src: '/img/bliny-so-sgushhenym-molokom-2sht.png',
        title: t('bakery3.title'),
        alt: 'bliny-so-sgushhenym-molokom-2sht',
        desc: t('bakery3.desc'),
        price: t('bakery3.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 28,
        src: '/img/bliny-s-dzhemom-2sht.png',
        title: t('bakery4.title'),
        alt: 'bliny-s-dzhemom-2sht',
        desc: t('bakery4.desc'),
        price: t('bakery4.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 29,
        src: '/img/bliny-so-smetanoj-2sht.png',
        title: t('bakery5.title'),
        alt: 'bliny-so-smetanoj-2sht',
        desc: t('bakery5.desc'),
        price: t('bakery5.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 30,
        src: '/img/hleb-1sht.png',
        title: t('bakery6.title'),
        alt: 'hleb-1sht',
        desc: t('bakery6.desc'),
        price: t('bakery6.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 31,
        src: '/img/hushuur-75g.png',
        title: t('bakery7.title'),
        alt: 'hushuur-75g',
        desc: t('bakery7.desc'),
        price: t('bakery7.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 53,
        src: '/img/hachapuri-250g.png',
        title: t('hachapuri1.title'),
        alt: 'hachapuri-250g',
        desc: t('hachapuri1.desc'),
        price: t('hachapuri1.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 54,
        src: '/img/hachapuri-s-vetchinoj-350g.png',
        title: t('hachapuri2.title'),
        alt: 'hachapuri-s-vetchinoj-350g',
        desc: t('hachapuri2.desc'),
        price: t('hachapuri2.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
    ],
    [t]
  );

  const beverages: BeveragesImage[] = useMemo(
    () => [
      {
        id: 32,
        src: '/img/mors-brusnichnyj-1l.png',
        title: t('beverages1.title'),
        alt: 'mors-brusnichnyj-1l',
        desc: t('beverages1.desc'),
        price: t('beverages1.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 33,
        src: '/img/kompot-iz-suhofruktov-1l.png',
        title: t('beverages2.title'),
        alt: 'kompot-iz-suhofruktov-1l',
        desc: t('beverages2.desc'),
        price: t('beverages2.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
    ],
    [t]
  );

  const salad: SaladImage[] = useMemo(
    () => [
      {
        id: 34,
        src: '/img/salat-cezar-s-kuricej-170g.png',
        title: t('salad1.title'),
        alt: 'salat-cezar-s-kuricej-170g',
        desc: t('salad1.desc'),
        price: t('salad1.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 35,
        src: '/img/salat-grecheskij-200g.png',
        title: t('salad2.title'),
        alt: 'salat-grecheskij-200g',
        desc: t('salad2.desc'),
        price: t('salad2.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 36,
        src: '/img/salat-toplyj-250g.png',
        title: t('salad3.title'),
        alt: 'salat-toplyj-250g',
        desc: t('salad3.desc'),
        price: t('salad3.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 37,
        src: '/img/morkov-po-korejski-100g.png',
        title: t('salad4.title'),
        alt: 'morkov-po-korejski-100g',
        desc: t('salad4.desc'),
        price: t('salad4.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 38,
        src: '/img/salat-svekolnyj-100g.png',
        title: t('salad5.title'),
        alt: 'salat-svekolnyj-100g',
        desc: t('salad5.desc'),
        price: t('salad5.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 39,
        src: '/img/funchoza-100g.png',
        title: t('salad6.title'),
        alt: 'funchoza-100g',
        desc: t('salad6.desc'),
        price: t('salad6.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 40,
        src: '/img/vinegret-100g.png',
        title: t('salad7.title'),
        alt: 'vinegret-100g',
        desc: t('salad7.desc'),
        price: t('salad7.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 41,
        src: '/img/ogurchiki-po-polski-110g.png',
        title: t('salad8.title'),
        alt: 'ogurchiki-po-polski-110g',
        desc: t('salad8.desc'),
        price: t('salad8.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 42,
        src: '/img/salat-po-derevenski-s-seldyu-150g.png',
        title: t('salad9.title'),
        alt: 'salat-po-derevenski-s-seldyu-150g',
        desc: t('salad9.desc'),
        price: t('salad9.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 43,
        src: '/img/zakusochniy-120g.png',
        title: t('salad10.title'),
        alt: 'zakusochniy-120g',
        desc: t('salad10.desc'),
        price: t('salad10.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
    ],
    [t]
  );

  const semiFinishedProducts: SemiFinishedProductsImage[] = useMemo(
    () => [
      {
        id: 44,
        src: '/img/buuzy-zamorozhennye-75g.png',
        title: t('semiFinishedProducts1.title'),
        alt: 'buuzy-zamorozhennye-75g',
        desc: t('semiFinishedProducts1.desc'),
        price: t('semiFinishedProducts1.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 45,
        src: '/img/pelmeni-zamorozhennye-1kg.png',
        title: t('semiFinishedProducts2.title'),
        alt: 'pelmeni-zamorozhennye-1kg',
        desc: t('semiFinishedProducts2.desc'),
        price: t('semiFinishedProducts2.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
    ],
    [t]
  );

  const pizza: PizzaImage[] = useMemo(
    () => [
      {
        id: 46,
        src: '/img/pepperoni-700g.png',
        title: t('pizza1.title'),
        alt: 'pepperoni-700g',
        desc: t('pizza1.desc'),
        price: t('pizza1.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 47,
        src: '/img/ohotnichya-750g.png',
        title: t('pizza2.title'),
        alt: 'ohotnichya-750g',
        desc: t('pizza2.desc'),
        price: t('pizza2.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 48,
        src: '/img/kochevnik-firmennaya-950g.png',
        title: t('pizza3.title'),
        alt: 'kochevnik-firmennaya-950g',
        desc: t('pizza3.desc'),
        price: t('pizza3.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 49,
        src: '/img/diablo-750g.png',
        title: t('pizza4.title'),
        alt: 'diablo-750g',
        desc: t('pizza4.desc'),
        price: t('pizza4.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 50,
        src: '/img/vetchina-i-griby-700g.png',
        title: t('pizza5.title'),
        alt: 'vetchina-i-griby-700g',
        desc: t('pizza5.desc'),
        price: t('pizza5.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 51,
        src: '/img/4-sezona-700g.png',
        title: t('pizza6.title'),
        alt: '4-sezona-700g',
        desc: t('pizza6.desc'),
        price: t('pizza6.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
      {
        id: 52,
        src: '/img/gavajskaya-700g.png',
        title: t('pizza7.title'),
        alt: 'gavajskaya-700g',
        desc: t('pizza7.desc'),
        price: t('pizza7.price'),
        padding: 10,
        layout: 'intrinsic',
        quality: 75,
        width: 318,
        height: 179,
        inOrder: false,
      },
    ],
    [t]
  );

  return (
    <>
      <Head>
        <title>{`${KOCHEVNIK} | ${t('title')}`}</title>
      </Head>
      <div>
        <a
          className={styles.topButton}
          href="#top"
        >
          {t('topButton')}
        </a>
      </div>
      <div>
        <nav>
          <ul className={styles.list}>
            <li>
              <a
                className={styles.links}
                href="#businessLunch"
              >
                {t('menu.businessLunch')}
              </a>
            </li>
            <li>
              <a
                className={styles.links}
                href="#firstСourse"
              >
                {t('menu.firstСourse')}
              </a>
            </li>
            <li>
              <a
                className={styles.links}
                href="#secondСourse"
              >
                {t('menu.secondСourse')}
              </a>
            </li>
            <li>
              <a
                className={styles.links}
                href="#dishInPan"
              >
                {t('menu.dishInPan')}
              </a>
            </li>
            <li>
              <a
                className={styles.links}
                href="#bakery"
              >
                {t('menu.bakery')}
              </a>
            </li>
            <li>
              <a
                className={styles.links}
                href="#beverages"
              >
                {t('menu.beverages')}
              </a>
            </li>
            <li>
              <a
                className={styles.links}
                href="#salad"
              >
                {t('menu.salad')}
              </a>
            </li>
            <li>
              <a
                className={styles.links}
                href="#pizza"
              >
                {t('menu.pizza')}
              </a>
            </li>
            <li>
              <a
                className={styles.links}
                href="#semiFinishedProducts"
              >
                {t('menu.semiFinishedProducts')}
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <h1
        className={styles.mainTitle}
        id="businessLunch"
      >
        {t('menu.businessLunch')}
      </h1>
      <main className={styles.projects}>
        {businessLunch.map((project, index) => (
          <ProjectItem
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
      <h1
        className={styles.mainTitle}
        id="firstСourse"
      >
        {t('menu.firstСourse')}
      </h1>
      <main className={styles.projects}>
        {firstCourse.map((project, index) => (
          <ProjectItem
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
      <h1
        className={styles.mainTitle}
        id="secondСourse"
      >
        {t('menu.secondСourse')}
      </h1>
      <main className={styles.projects}>
        {secondСourse.map((project, index) => (
          <ProjectItem
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
      <h1
        className={styles.mainTitle}
        id="dishInPan"
      >
        {t('menu.dishInPan')}
      </h1>
      <main className={styles.projects}>
        {dishInPan.map((project, index) => (
          <ProjectItem
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
      <h1
        className={styles.mainTitle}
        id="bakery"
      >
        {t('menu.bakery')}
      </h1>
      <main className={styles.projects}>
        {bakery.map((project, index) => (
          <ProjectItem
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
      <h1
        className={styles.mainTitle}
        id="beverages"
      >
        {t('menu.beverages')}
      </h1>
      <main className={styles.projects}>
        {beverages.map((project, index) => (
          <ProjectItem
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
      <h1
        className={styles.mainTitle}
        id="salad"
      >
        {t('menu.salad')}
      </h1>
      <main className={styles.projects}>
        {salad.map((project, index) => (
          <ProjectItem
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
      <h1
        className={styles.mainTitle}
        id="pizza"
      >
        {t('menu.pizza')}
      </h1>
      <main className={styles.projects}>
        {pizza.map((project, index) => (
          <ProjectItem
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
      <h1
        className={styles.mainTitle}
        id="semiFinishedProducts"
      >
        {t('menu.semiFinishedProducts')}
      </h1>
      <main className={styles.projects}>
        {semiFinishedProducts.map((project, index) => (
          <ProjectItem
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

export default Projects;
