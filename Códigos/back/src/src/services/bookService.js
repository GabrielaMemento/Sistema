import { bookPersistence } from "../persistence/bookPersistence.js";

async function insert(book) {
  try {
    const dbBook = await bookPersistence.getBook("code", book.code);
    if (!dbBook[0]) {
      await bookPersistence.insert(book);
      return "ok";
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

async function getByName(bookName) {
  try {
    const book = await bookPersistence.getBook("name", bookName);
    return book;
  } catch (error) {
    return null;
  }
}

async function updateBook(book, code) {
  try {
    const resultado = await bookPersistence.updateBook(book, code);
    console.log("resultado", resultado);
    if (resultado.rowCount !== 0) {
      return "ok";
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

async function deleteBook(code) {
  try {
    const resultado = await bookPersistence.deleteBook(code);
    console.log("resultado", resultado);
    if (resultado.rowCount !== 0) {
      return "ok";
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
}

export const bookService = {
  getByName,
  insert,
  updateBook,
  deleteBook,
};
