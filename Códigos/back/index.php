<?php

require_once "livro.php";

header("Content-Type: application/json");
$data = [];

$fn= $_REQUEST["fn"]?? null;
$id= $_REQUEST["id"]?? 0;
$nomeLivro= $_REQUEST["nomeLivro"]?? null;
$preco= $_REQUEST["preco"]?? null;
$nomeAutor= $_REQUEST["nomeAutor"]?? null;
$sinopse= $_REQUEST["sinopse"]?? null;

$livro =new livro;
$livro->setId($id);

if(($fn === "create") && ($nomeLivro !== null) && ($preco !== null) && ($nomeAutor !== null) && ($sinopse !== null)){
    $livro->setNomeLivro($nomeLivro);
    $livro->setPreco($preco);
    $livro->setNomeAutor($nomeAutor);
    $livro->setSinopse($sinopse);
    $data["livro"]= $livro->create();

}

if($fn == "read" ){
    $data["livro"]= $livro->read();

}

if($fn === "update" && $id>0 &&$nomeLivro !== null && preco !== null){
    $livro->setNomeLivro($nomeLivro);
    $livro->setPreco($preco);
    $livro->setNomeAutor($nomeAutor);
    $livro->setSinopse($sinopse);
    $data["livro"]= $livro->update();

}

if($fn === "delete" && $id>0){
    $data["livro"]= $livro->delete();

}

die(json_encode($data));