import { sellsPersistence } from "../persistence/sellsPersistence.js";
import { bookPersistence } from "../persistence/bookPersistence.js";

async function insert(sells) {
  try {
    let cont = 0;
    const result = sells.map(async (sell) => {
      const dbBook = await bookPersistence.getBook("code", sell.bookcode);
      if (!dbBook[0]) {
        return false;
      } else {
        const bookId = dbBook[0].id;
        await sellsPersistence.insert(sell, bookId);
        cont++;
        return true;
      }
    });
    const filter = result.filter((elem) => elem == true);
    if (filter.length == cont) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return null;
  }
}

async function getSell(Numero) {
  try {
    const sell = await sellsPersistence.getSell("code", Numero);
    return sell;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function updateSell(sell) {
  console.log(sell);
  console.log(sell.dados);
  try {
    const livro = await bookPersistence.getBook("code", sell.bookcode);
    console.log(livro, typeof livro);
    if (livro[0]) {
      await sellsPersistence.deleteSell(`"bookId"`, livro[0].id);
      await sellsPersistence.insert(sell.dados, sell.dados.bookId);
      return true;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function deleteSell(code) {
  const resultado = await sellsPersistence.deleteSell("code", code);
  console.log("resultado", resultado);
  if (resultado.rowCount !== 0) {
    return "ok";
  } else {
    return null;
  }
}

export const sellsService = {
  insert,
  getSell,
  updateSell,
  deleteSell,
};
