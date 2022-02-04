import React from "react";

const Item = (item) => {
  return (
    <>
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
      </tr>
    </>
  );
};

export { Item };
