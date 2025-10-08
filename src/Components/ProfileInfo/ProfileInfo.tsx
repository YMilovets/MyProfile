import clsx from 'clsx';

import { getTranslation } from '../../Shared/utils';
import HeaderLabel from '../HeaderLabel';
import ImageWithLoad from '../ImageWithLoad';

import { ProfileInfoProps } from './types';

import styles from "./ProfileInfo.module.css";

import filePhotoSrc from "/filePhoto.png";

function ProfileInfo({ children, className }: ProfileInfoProps) {
  return (
    <div className={clsx(className, styles.profile_content)}>
      <figure className={styles.figure}>
        <ImageWithLoad className={styles.image} source={filePhotoSrc} />
      </figure>
      <div className={styles.profile}>
        <h2 className={styles.author}>{getTranslation("author")}</h2>
        <HeaderLabel className={styles.position}>
          {getTranslation("position")}
        </HeaderLabel>
        {children}
      </div>
    </div>
  );
}

export default ProfileInfo