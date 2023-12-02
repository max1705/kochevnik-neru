import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { useTranslation } from 'next-i18next';
import clsx from 'clsx';
import { InView } from 'react-intersection-observer';

import { KOCHEVNIK } from '../../constants';
import { ThemeContext, themes } from '../../contexts/ThemeContext';
import Toggle from '../Toggle';

import styles from './Header.module.scss';

import type { CSSProperties } from 'react';

interface Link {
  href: string;
  text: string;
}

const Header = () => {
  const router = useRouter();
  const { t } = useTranslation('header');

  const links: Link[] = useMemo(
    () => [
      {
        href: '/menu',
        text: t('projectsTitle'),
      },
      {
        href: '/cart',
        text: t('cartTitle'),
      },
      {
        href: '/contacts',
        text: t('contactsTitle'),
      },
    ],
    [t]
  );

  return (
    <InView
      initialInView
      triggerOnce
      rootMargin="100px"
    >
      {({ inView, ref }) => (
        <header
          className={styles.header}
          ref={ref}
          id="top"
        >
          <nav className={styles.headerLeft}>
            <Link href="/">
              <a
                className={clsx(styles.logo)}
              >
                <div className={styles.animatedLogo}>
                  <Image
                    src="/favicon.png"
                    alt='kochevnik logo'
                    width={30}
                    height={30}
                  />
                </div>
                <span className={styles.logoText}>{KOCHEVNIK}</span>
              </a>
            </Link>
            <div className={styles.links}>
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                >
                  <a
                    className={clsx(styles.link, {
                      'kochevnikAnimation kochevnikAnimation--fadeInUp': inView,
                      [styles.activeLink]: router.pathname == link.href,
                    })}
                    style={{ '--kochevnik-animation-delay-factor': index + 2 } as CSSProperties}
                  >
                    {link.text}
                  </a>
                </Link>
              ))}
            </div>
          </nav>
          <div className={styles.headerRight}>
            <ThemeContext.Consumer>
              {({ theme, setTheme }: any) => (
                <Toggle
                  onChange={() => {
                    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
                  }}
                  value={theme === themes.dark}
                />
              )}
            </ThemeContext.Consumer>
          </div>
        </header>
      )}
    </InView>
  );
};

export default Header;
