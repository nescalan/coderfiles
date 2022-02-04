import React from "react";
import { Item } from "..";

const ItemList = ({ Items }) => {
  return (
    <section>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Description</th>
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
