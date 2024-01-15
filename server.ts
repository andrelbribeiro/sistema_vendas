import express , { json } from "express";
import mysql from "mysql2";

const conexao = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "sistema_vendas_sql_ansi"
})

const app = express();

app.use(json());

//Testando meu Servidor Web
app.get('/', (req,res) =>{
    res.send('Hello');
})

//Operações de CRUD na tabela TRANSPORTADORAS.

//SELECT
app.get('/transportadora', (req,res)=>{

    const consulta = "SELECT * FROM sistema_vendas_sql_ansi.transportadoras;";

    conexao.query(consulta,(erro, resultado)=>{
        if(erro){
            res.status(404).json({'erro': erro});
        }else{
            res.status(200).json(resultado);
        }
    })
})
//INSERT


//UPDATE


//DELETE


//Operações de CRUD na tabela CLIENTE.

//INSERT

//SELECT

//UPDATE

//DELETE




app.listen(3000, ()=>{
    console.log('Funcionou');
});
