import Image from 'next/image';
import clsx from 'clsx';
import Link from 'next/link';

import styles from './ProjectMenu.module.scss';

import type { ImageProps } from 'next/image';

interface ProjectMenuProps {
  src: string;
  title: string;
  alt: string;
  width?: number;
  height?: number;
  layout: ImageProps['layout'];
  quality: number;
  rootProps?: React.HTMLAttributes<HTMLDivElement>;
}

interface Link {
  href: string;
  text: string;
}

const ProjectMenu = ({
  src,
  title,
  alt,
  width,
  height,
  layout,
  quality,
  rootProps,
}: ProjectMenuProps) => {

  return (
    <div
      className={clsx(styles.project, rootProps?.className)}
    >
      <Link key={alt} href={`/menu/#${alt}`}>
        <div
          className={styles.projectImageBlock}
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
      </Link>
      <div
        className={styles.projectTitleBlock}
      >
        <Link key={alt} href={`/menu/#${alt}`}>
          {title}
        </Link>
      </div>
    </div>
  );
};

export default ProjectMenu;
