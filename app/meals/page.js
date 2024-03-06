// Suspense is for loading states and fallback
import { Suspense } from 'react';
import classes from './page.module.css';
import Link from 'next/link';
import MealsGrid from '../components/meals/meals-grid';
import { getMeals } from '@/lib/meals';

export const metadata = {
  title: 'All Meals',
  description: 'Browse the delicious meals shared by our vibrant community',
};

async function Meals () {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {

  return (
    <>
      <header className={classes.header}>
        <h1>Delicious meals, created 
          <span className={classes.highlight}> by you</span>
        </h1>
        <p>Choose your favorite recipe.</p>
        <p className={classes.cta}>
          <Link href='/meals/share'>
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Featching meals...</p>}>
          <Meals />
        </Suspense>  
      </main>
    </>
  );
}