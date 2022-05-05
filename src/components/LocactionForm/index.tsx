import React, { useRef } from "react";
import toast from "react-hot-toast";
import Styles from "./form.module.css";

export function LocationForm({ handleInput }: any) {
  const inputRef = useRef<any>();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputRef.current.value) {
      toast.error("You must provide a location!");
      return;
    }
    handleInput(inputRef.current.value);
  };
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className={Styles.form}
    >
      <input
        className={Styles.input}
        type="text"
        placeholder="Type city here"
        ref={inputRef}
      />
      <datalist></datalist>
      <button type="submit" className={Styles.button}>
        Set Location
      </button>
    </form>
  );
}
