import React from "react";

import Loading from "../loading";

const ListStudentsView = ({ booksState }) => {
  console.log(booksState);
  if(!booksState.pending && booksState.error){
    /* navigate to error page */
  }
  return (
    <div>
      {booksState.pending && <Loading />}
      {!booksState.pending && booksState.success && (
        <p>
          benim tek görevim bana verilen bilgileri ekrana basmak ve kullanıcı
          isteklerini controller'a iletmek
        </p>
      )}

    </div>
  );
};
export default ListStudentsView;
