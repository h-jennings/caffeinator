import React from 'react';
import convertSecondsToMinutes from '../../../utils/convertSecondsToMinutes';
import styles from './RecipePageListItem.module.scss';
import { ReactComponent as TimerSvg } from '../../../../images/timer.svg';
import { ReactComponent as BeanSvg } from '../../../../images/bean.svg';

function RecipePageListItem({ recipe, icon }) {
  return (
    <li className={styles.listItemContainer}>
      <div className={styles.primaryListContent}>
        <div className={styles.methodIconContainer}>
          <img src={icon.src} alt="" className={styles.icon} />
        </div>
        <p className={styles.recipeText}>
          {recipe.name}
        </p>
      </div>
      <div className={styles.listSubContentWrapper}>
        <div className={styles.listSubContentContainer}>
          <div className={styles.subContentIconContainer}>
            <TimerSvg width="20" />
            <div className={styles.subContentText}>
              {convertSecondsToMinutes(recipe.timeInSeconds)}
            </div>
          </div>
          <div className={styles.subContentIconContainer}>
            <BeanSvg width="14" />
            <div className={styles.subContentText}>
              {recipe.grindRange && recipe.grindRange}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default RecipePageListItem;
