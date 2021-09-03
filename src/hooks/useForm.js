// write your custom hook here to control your checkout form
import React, { useState } from "react";


const useForm = (initialFormValues) => {
    const [ formValues, setFormValues] = useState(initialFormValues);

    const handleChanges = (e) => {
      setFormValues({
        ...formValues,
        input: { ...formValues.input, [e.target.name]: e.target.value}
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setFormValues({
        ...formValues,
        toggle: true
      })
    };

    return ([ formValues, handleChanges, handleSubmit ]);
  }

export default useForm;