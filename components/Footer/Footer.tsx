import { useTranslation } from 'next-i18next';
import { InView } from 'react-intersection-observer';

import { PHONE } from '../../constants';

import styles from './Footer.module.scss';

const Footer = () => {
  const { t } = useTranslation('footer');

  return (
    <InView
      initialInView
      triggerOnce
      rootMargin="100px"
    >
      {({ ref }) => (
        <footer
          className={styles.footer}
          ref={ref}
        >
					<div>
						<ul className={styles.footerContacts}>
							<li>{t('addressText')}</li>
							<li><a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send/?phone=79141167755&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21%0A%0A%D0%9F%D0%B8%D1%88%D1%83+%D0%B8%D0%B7+%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F+2%D0%93%D0%98%D0%A1.%0A%0A&type=phone_number&app_absent=0">{t('whatsapp')}</a></li>
							<li>{PHONE}</li>
						</ul>	
					</div>          
        </footer>
      )}
    </InView>
  );
};

export default Footer;
