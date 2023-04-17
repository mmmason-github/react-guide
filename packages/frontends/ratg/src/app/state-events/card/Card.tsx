import "./Card.css";

export interface CardProps {
  children: React.ReactNode;
  className: string;
}

export function Card({ children, className }: CardProps) {
  const classes = `card ${className}`;
  return <div className={classes}>{children}</div>;
}
export default Card;
