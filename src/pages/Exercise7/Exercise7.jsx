import { useState } from "react";
import "./Exercise7.css";

import { useForm } from "react-hook-form";

const Exercise7 = () => {
  const [name, setName] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    console.log(data);
    setName([{ ...name, data }]);
    alert("The name submited is : " + JSON.stringify(data));

    // limpiar campos
    event.target.reset();
  };

  return (
    <div className="container ">
      <h1>Exercise 7: Building A Form</h1>

      <form
        className="display-column display-layout"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="text"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 30 })}
        />
        {errors.name && <span className="alert"> This name is required </span>}
        <input
          type="text"
          placeholder="Last name"
          {...register("lastName", { required: true, maxLength: 30 })}
        />
        {errors.lastName && (
          <span className="alert"> The last name is required </span>
        )}
        <button className="btn">"Greet Me"</button>
      </form>
    </div>
  );
};

export { Exercise7 };
