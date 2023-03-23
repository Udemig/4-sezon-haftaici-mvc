import React, { useState } from "react";
import View from "./View";

import { bookStructure, validationStructure } from "./Model";

const Controller = () => {
  const [form, setForm] = useState(bookStructure);
  const [validation, setValidation] = useState(validationStructure);

  const handleChange = (field, value) => {
    let tempForm = { ...form };
    tempForm[field] = value;
    setForm(tempForm);
  };
  const getFormValue = (field) => {
    return form[field];
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    if (!form.title) {
      setValidation({
        ...validation,
        title: { error: true, errorMessage: "Kitap Adı boş bırakılamaz" },
      });
      setTimeout(() => {
        setValidation({
            ...validation,
            title: { error: false, errorMessage: "" },
          });
      }, 2000);
      return
    }
    if (!form.author) {
        setValidation({
          ...validation,
          author: { error: true, errorMessage: "Yazar adı boş bırakılamaz" },
        });
        setTimeout(() => {
            setValidation({
                ...validation,
                author: { error: false, errorMessage: "" },
              });
          }, 2000);
        return
      }
  };
  const getValidation = (field) => {
    return validation[field];
  };
  return (
    <View
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      getFormValue={getFormValue}
      getValidation={getValidation}
    />
  );
};

export default Controller;
