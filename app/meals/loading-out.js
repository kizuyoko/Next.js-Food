// This file contains fallback content until the data loads.

import classes from './loading.module.css';

export default function MealsLoadingPage() {
  return <p className={classes.loading}>Featching meals...</p>
}