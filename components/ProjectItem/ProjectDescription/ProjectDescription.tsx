/* eslint-disable */
import Image from 'next/image';

import styles from './ProjectDescription.module.scss';

const ProjectDescription = ({ src, alt, active, title, desc, onClick, setShowModal }:any) => {
    const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
      e.stopPropagation();
      onClick?.();
    };

    if (!active) {
      return null;
    }

    return (
      <main className={styles.project} onClick={() => setShowModal(false)}>
        <div className={styles.projectBlock} onClick={e => e.stopPropagation()}>
          <Image
            src={src}
            alt={alt}
            width={500}
            height={500}
          />
          <button className={styles.projectCloseButton} onClick={() => setShowModal(false)}>Закрыть</button>
          <div className={styles.projectTitleBlock}>
            <h2 className={styles.projectTitle}>{title}</h2>
            <h2 className={styles.projectTitle}>Описание:</h2>
            <div className={styles.projectText}>
              {desc}
            </div>
          </div>
        </div>
      </main>
    );
  };

ProjectDescription.displayName = 'ProjectDescription';

export default ProjectDescription;
