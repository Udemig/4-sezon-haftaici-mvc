import React, { useState, useEffect } from "react";

import ListStudentsView from "./ListStudentsView";

import { booksState as initialState } from "./ListControllerModel";

import axios from "axios";

const ListStudentsController = () => {
  const [booksState, setBooksState] = useState(initialState);

  useEffect(() => {
    setBooksState({ ...booksState, pending: true });
    axios
      .get("http://localhost:3004/books")
      .then((res) => {
        setTimeout(() => {
            setBooksState({
                ...booksState,
                pending: false,
                error: false,
                success: true,
                books: res.data,
              });
        }, 3000);
      })
      .catch((err) => {
        setTimeout(() => {
            setBooksState({
                ...booksState,
                pending: false,
                success: false,
                error: true,
                errorMessage: "Öğrenci bilgileri çekilirken bir hata oluştu",
              });
        }, 3000);
      });
  }, []);

  return <ListStudentsView booksState={booksState} />;
};

export default ListStudentsController;
