<?php



class Livro{
    private $id=0;
    private $nomeLivro=null;
    private $preco=0;
    private $nomeAutor=null;
    private $sinopse=null;

    public function setId(int $id):void{
        $this->id= $id;
    }
    public function getId(int $id):int{
        return $this->id;
    }



    public function setNomeLivro(string $nomeLivro):void{
        $this->nomeLivro= $nomeLivro;
    }
    public function getNomeLivro(string $nomeLivro):string{
        return $this->nomeLivro;
    }


    public function setPreco(int $preco):void{
        $this->preco= $preco;
    }
    public function getPreco(float $preco):float{
        return $this->preco;
    }


    public function setNomeAutor(string $nomeAutor):void{
        $this->nomeAutor= $nomeAutor;
    }
    public function getNomeAutor(string $nomeAutor): string{
        return $this->nomeAutor;
    }


    public function setSinopse(string $sinopse): void{
        $this->sinopse= $sinopse;
    }
    public function getSinopse(string $sinopse): string{
        return $this->sinopse;
    }



    private function connection() :\PDO{
        return new \PDO("mysql:host=localhost;port=3307;bdsebo","root","");
    }

    public function create() :array {
        $con = $this->connection();
        $stmt= $con->prepare("INSERT INTO BDSebo VALUES (NULL, :_nomeLivro, :_preco, :_nomeAutor, :_sinopse)");
        $stmt->bindValue(":_nomeLivro", $this->getNomeLivro(), \PDO::PARAM_STR);
        $stmt->bindValue(":_preco", $this->getPreco(), \PDO::PARAM_FLOAT);
        $stmt->bindValue(":_nomeAutor", $this->getNomeAutor(), \PDO::PARAM_STR);
        $stmt->bindValue(":_sinopse", $this->getSinopse(), \PDO::PARAM_STR);
        
        if ($stmt->execute()){
            $this->setId($con->lastInsert());
            return $this->read();

        }
        return [];
   
    }


    public function read() :array {
        $con = $this->connection();

        if($this->getId()=== 0){

            $stmt= $con->prepare("SELECT *FROM BDSebo");
        
            if ($stmt->execute()){
                 return $stmt->fetchAll(\PDO::FETCH_ASSOC);
            }

        } elseif($this->getId()>0){

            $stmt= $con->prepare("SELECT *FROM BDSebo WHERE id= :_id");
            $stmt->bindValue(":_nomeLivro",$this->getId(),\PDO::PARAM_INT);
            if ($stmt->execute()){
                return $stmt->fetchAll(\PDO::FETCH_ASSOC);
            }


        }
    
            return [];
    }
        
    
   
        public function update() :array {
            $con = $this->connection();
            $stmt= $con->prepare("UPDATE BDSebo SET  nomeLivro= :_nomeLivro,preco= :_preco,nomeAutor= :_nomeAutor,sinopse= :_sinopse WHERE id= :_id");
            $stmt->bindValue(":_nomeLivro", $this->getNomeLivro(), \PDO::PARAM_STR);
            $stmt->bindValue(":_preco", $this->getPreco(), \PDO::PARAM_FLOAT);
            $stmt->bindValue(":_nomeAutor", $this->getNomeAutor(), \PDO::PARAM_STR);
            $stmt->bindValue(":_sinopse", $this->getSinopse(), \PDO::PARAM_STR);
            $stmt->bindValue(":_id", $this->getId(), \PDO::PARAM_INT);
            if ($stmt->execute()){
                return $this->read();
            }
            return [];
       
        }

        public function delete() :array {
            $BDSebo= $this->read();
            $con = $this->connection();
            $stmt= $con->prepare("DELETE FROM BDSebo WHERE id= :_id");
            $stmt->bindValue(":_id", $this->getId(), \PDO::PARAM_INT);
            if ($stmt->execute()){
                return $BDSebo;
            }
            return [];
       
        }
}
