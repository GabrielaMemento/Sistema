import { sellsService } from "../services/sellsService.js";

//inserir
export async function insert(req, res) {
  const { body } = req;
  const result = await sellsService.insert(body);
  console.log(typeof result);
  if (result) {
    res.sendStatus(201);
  } else {
    res.sendStatus(400);
  }
}

export async function getSell(req, res) {
  const { body } = req;
  console.log("controller", body.code);
  const sell = await sellsService.getSell(body.code);
  console.log(sell);

  if (sell) return res.send(sell);
  else return res.sendStatus(404);
}

export async function updateSell(req, res) {
  const { body } = req;
  const resultado = await sellsService.updateSell(body);
  if (resultado) res.sendStatus(200);
  else res.sendStatus(400);
}

export async function deleteSell(req, res) {
  const { code } = req.params;
  const resultado = await sellsService.deleteSell(parseInt(code));
  if (resultado) res.sendStatus(200);
  else res.sendStatus(400);
}
