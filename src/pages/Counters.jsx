import React from "react";
import { useForm } from "react-hook-form";

const Counters = () => {
  const { register, handleSubmit, watch, formState } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(watch("example"));
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("example")} />

        <input {...register("exampleRequired", { required: true })} />
        {formState.errors.exampleRequired && (
          <span>This field is required</span>
        )}

        <label>Gender Selection</label>
        <select {...register("gender")}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <br />
        <br />
        <input {...register("firstName", { required: true, maxLength: 20 })} />
        <br />
        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        <br />
        <input
          type="number"
          {...register("age", { min: 18, max: 99, required: true })}
        />
        <br />
        {formState.errors.age && (
          <span>the number must be between 18 and 99 </span>
        )}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Counters;
