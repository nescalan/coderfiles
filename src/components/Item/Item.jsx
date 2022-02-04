import React from "react";

const Item = (item) => {
  return (
    <>
      <tr key={item.id}>
        <th scope="row">{item.id}</th>
        <td>{item.name}</td>
      </tr>
    </>
  );
};

export { Item };
