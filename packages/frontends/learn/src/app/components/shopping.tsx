/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable no-unused-vars */
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
function ShoppingList({ products }: ShoppingListProps): JSX.Element {
  const listItems = products.map(
    (product): JSX.Element => (
      <li
        key={product.id}
        style={{ color: product.isFruit ? "red" : "darkgreen" }}>
        {product.title}
      </li>
    )
  );
  return <ul>{listItems}</ul>;
}

export default function App(): JSX.Element {
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
      <h1>Shopping List</h1>
      <ShoppingList products={products} />
    </div>
  );
}
