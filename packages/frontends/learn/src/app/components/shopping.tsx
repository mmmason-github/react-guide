/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable react/hook-use-state */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/no-multi-comp */

import styles from "../styles/components/shopping.module.scss";

type ShoppingListProps = {
  products: {
    id: number;
    isFruit: boolean;
    title: string;
  }[];
};

export function ShoppingList({ products }: ShoppingListProps): JSX.Element {
  const listItems = products.map(
    (product): JSX.Element => (
      <li
        key={product.id}
        style={{ color: product.isFruit ? "red" : "darkgreen" }}>
        {product.title}
      </li>
    )
  );
  return (
    <div className={styles.root}>
      <h1>Shopping List</h1>
      <ul>{listItems}</ul>
    </div>
  );
}
