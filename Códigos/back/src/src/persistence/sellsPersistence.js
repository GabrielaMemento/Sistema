import { db } from "../config/db.js";

async function insert(sell, bookId) {
  console.log(bookId);
  return await db.query(
    `INSERT INTO sells (code,date,price,"bookId") VALUES ($1, $2, $3, $4)`,
    [sell.code, sell.date, sell.price, bookId]
  );
}

async function getSell(columnN, valor) {
  const { rows } = await db.query(`SELECT * FROM sells WHERE ${columnN} = $1`, [
    valor,
  ]);

  return rows;
}

async function deleteSell(columnN, valor) {
  return await db.query(`DELETE FROM sells WHERE ${columnN} = $1`, [valor]);
}

export const sellsPersistence = {
  insert,
  getSell,
  deleteSell,
};
