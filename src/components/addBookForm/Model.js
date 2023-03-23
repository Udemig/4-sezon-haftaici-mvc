export const bookStructure = {
  id: String(new Date().getTime()),
  title: "",
  author: "",
  publisher: "",
  price: "",
  isbn: "",
  categoryId: "empty",
};

export const validationStructure={
    title:{
        error:false,
        errorMessage:""
    },
    author:{
        error:false,
        errorMessage:""
    }
}
