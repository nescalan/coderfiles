import React from "react";
import { Item } from "..";

const ItemList = ({ Items }) => {
  return (
    <section>
      <table border="1">
        <thead>
          <tr>
            <th>Code</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {Items.map((item) => (
            <Item {...item} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export { ItemList };
