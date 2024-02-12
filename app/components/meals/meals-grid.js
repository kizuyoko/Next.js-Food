import classes from './meals-grid.module.css';

export default function MealsGrid({ meals }) {
  return <ul>
    {meals.map(meal => (
      <li key={meal.id}>
        <MealItem {...meal} />
      </li>
    ) )}
  </ul>
}