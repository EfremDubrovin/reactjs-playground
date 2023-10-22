import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length === 0 ? (
          <>No items</>
        ) : (
          items.map((city, index) => (
            <li
              key={city}
              className={
                selectedIndex == index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(city);
              }}
            >
              {city}
            </li>
          ))
        )}
      </ul>
    </>
  );
}

export default ListGroup;
