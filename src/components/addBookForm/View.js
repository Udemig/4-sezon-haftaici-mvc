import React from "react";

import styles from './style/addBookForm.module.css'

const View = ({ handleChange, getFormValue, handleSubmit, getValidation }) => {
  return (
    <form className={`${styles.container} ${styles.container2}`} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Kitap Adı</label>
        <input
          value={getFormValue("title")}
          onChange={(event) => handleChange("title", event.target.value)}
          id="title"
          placeholder="Puslu Kıtalar Atlası"
        />
        {getValidation("title").error && (
          <p style={{ color: "orangered" }}>
            <small>{getValidation("title").errorMessage}</small>
          </p>
        )}
      </div>
      <div>
        <label htmlFor="author">Kitap Yazarı</label>
        <input id="author" placeholder="İhsan Oktay Anar" />
        {getValidation("author").error && (
          <p style={{ color: "orangered" }}>
            <small>{getValidation("author").errorMessage}</small>
          </p>
        )}
      </div>
      <div>
        <button type="submit">Kaydet</button>
      </div>
    </form>
  );
};

export default View;
