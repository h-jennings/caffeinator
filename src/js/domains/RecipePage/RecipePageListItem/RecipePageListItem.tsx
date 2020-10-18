import React from 'react';
import convertSecondsToMinutes from '@/js/utils/global/convertSecondsToMinutes';
import styles from './RecipePageListItem.module.scss';
import { ReactComponent as TimerSvg } from '@/images/timer.svg';
import { ReactComponent as BeanSvg } from '@/images/bean.svg';
import { BrewIcon, Recipe } from '@/data/methods.model';

type RecipePageListItem = {
  recipe: Recipe;
  icon: BrewIcon;
};

export function RecipePageListItem({ recipe, icon }: RecipePageListItem) {
  return (
    <>
      <li className={styles.listItemContainer}>
        <div className={styles.primaryListContent}>
          <div className={styles.methodIconContainer}>
            <img src={icon.src} alt="" className={styles.icon} />
          </div>
          <p className={styles.recipeText}>{recipe.name}</p>
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
    </>
  );
}
