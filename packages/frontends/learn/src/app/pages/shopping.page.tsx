/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable react/hook-use-state */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-multi-comp */

import { ShoppingList } from "../components/shopping";

import styles from "../styles/pages/shopping.module.scss";

export default function ShoppingPage(): JSX.Element {
  const products = [
    {
      id: 1,
      isFruit: false,
      title: "Cabbage"
    },
    {
      id: 2,
      isFruit: false,
      title: "Garlic"
    },
    {
      id: 3,
      isFruit: true,
      title: "Apple"
    }
  ];

  return (
    <div className={styles.root}>
      <ShoppingList products={products} />
    </div>
  );
}
