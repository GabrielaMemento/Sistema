import { bookService } from "../services/bookService.js";

//inserir
export async function insert(req, res) {
    const { body }= req;
    const result = await bookService.insert(body);

    if (result) res.sendStatus(201);
    else res.sendStatus(404);
}
//busca
export async function getByName(req, res) {
    const { body } = req;
    console.log('controller', body.name)
    const book = await bookService.getByName(body.name);

    if (book) return res.send(book);
    else return res.sendStatus(404);
}

export async function updateBook(req,res){
    const {body} = req;
    const book= body.book;
    const code= body.code;
    const resultado = await bookService.updateBook(book,code);
    if(resultado)res.sendStatus(200);
    else res.sendStatus(400);
}

export async function deleteBook(req,res){
    const {code}= req.params;
    const resultado = await bookService.deleteBook(parseInt(code));
    if(resultado)res.sendStatus(200);
    else res.sendStatus(400);
}
