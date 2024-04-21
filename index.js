const express = require('express');
const db = require('./database.js');
const database = require('./database.js');
const path = require('path');
app.use(express.static('public'))

console.log(db.cursos[0].id);


const app = express();

app.use(express.json());

app.listen(3301, () => console.log("Servidor Rodando na porta 3301"));


app.get("/index", (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

//mostra os cursos
app.get("/cursos", (req, res)=>{
    res.send(db.cursos);
});

//mostra tudo do json
app.get("/", (req, res)=>{
    res.send(db);
});


/** READ */
app.get("/id", (req, res) => {
    res.send(db.cursos[0].id);
});


app.get("/nome", (req, res) => {
    res.send(db.cursos[0].nome);
});


app.get("/turno", (req, res) => {
    res.send(db.cursos[0].turno);
});

app.get("/id_campus", (req, res) => {
    res.send(db.cursos[0].id_campus);
});

app.post("/", (req, res) =>{
    const novoCurso = req.body;
    database.cursos.push(novoCurso);
    res.send(200);
});

//delete cursos
app.delete("/delete", (req, res) => {
    id_delete = req.body.id;
    console.log(id_delete);
    //encontrando o index na array
    const index = database.cursos.findIndex(curso => curso.id === id_delete);
    console.log(index); 
    if (index !== -1) {
        console.log(database.cursos.splice(0, 1));
        res.send(302);
    } else {
        return res.send(404);
    }
});
//modificar curso
app.put("/modifyCurso/:id", (req, res) => {
    const id_delete = req.params.id;
    console.log(id_delete);
    const novosDados = req.body;
    console.log(novosDados);
    const index = database.cursos.findIndex(cursos => cursos.id === id_delete);
    console.log(index);
    if (index !== -1) {
        console.log(db.cursos[index] = novosDados);
        res.sendStatus(202);
    } else {
        res.sendStatus(404);
    }
});

//get para os ccrs
app.get("/ccrs", (req, res) => {
    res.send(database.ccrs);
});

//post para os ccrs
app.post("/newCCR", (req, res) => {
    const newCCR = req.body;
    database.ccrs.push(newCCR);
    res.sendStatus(202);
})

//delete para os ccrs
app.delete("/delCCR", (req, res) => {
    id_delete = req.body.id;
    console.log(id_delete);
    //encontrando o index na array
    const index = database.ccrs.findIndex(ccr => ccr.id === id_delete);
    console.log(index); 
    if (index !== -1) {
        console.log(database.ccrs.splice(0, 1));
        res.send(302);
    } else {
        return res.send(404);
    }
});


//atualização para os ccrs
app.put("/modifyCCR/:id", (req, res) => {
    const id_delete = req.params.id;
    console.log(id_delete);
    const novosDados = req.body;
    console.log(novosDados);
    const index = database.ccrs.findIndex(ccr => ccr.id === id_delete);
    console.log(index);
    if (index !== -1) {
        console.log(db.ccrs[index] = novosDados);
        res.sendStatus(202);
    } else {
        res.sendStatus(404);
    }
});