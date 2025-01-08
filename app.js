//Creamos el servidor con express
const express = require('express');
const app = express();
//Creamos el array donde dentro se encuentran los usuarios
const usersData = [
    { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
    { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
    { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
    { id: 4, name: 'David', age: 25, specialty: 'QAs' },
    { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
    { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
    { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
    { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
    { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
    { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
    { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
    { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
    { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
    { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
    { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
    { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
    { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
    { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
    { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
    { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
    { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
    { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
    { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
    { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
    { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
    { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
    { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
    { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
    { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
    { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
  ];

  //Creo una función para filtrar según la especialidad, debo probar a hacerlo en una solo y no duplicarla varias veces
  //Reducida la función para filtrar por especialidad utilizando una única función
function filtrarEspecialidad(specialty) {
    return usersData.filter(user => user.specialty === specialty);
}
filtrarEspecialidad();


//Utilizamos la llamada del .get para crear cada enlace web
app.get('/', (req, res) =>{
    res.send(
    '<h1>Esta es la página principal</h1> <ul><li><a href="/marketing">marketing</a></li><li><a href="/developers">developers</a></li><li><a href="/ventas">ventas</a></li><li><a href="/QAs">QAs</a></li></ul>');
});

//Creamos cada enlace con el filtro de los usuarios según su especialidad
app.get('/marketing', (req, res) =>{
    const usuariosMarketing = filtrarEspecialidad('marketing');
    const listaMarketing = usuariosMarketing.map(user => `<li>${user.name}</li>`)
    res.send (
        `<h1>Aquí están las personas de marketing</h1>
        <ul>${listaMarketing}</ul>
        <p><ul><a href="/">home</a>
        <a href="/atras">atras</a>
        <a href="/developers">developers</a>
        <a href="/ventas">ventas</a></p>`
        
    )
})

app.get('/ventas', (req, res) =>{
    const usuariosVentas = filtrarEspecialidad('ventas');
    const listaVentas = usuariosVentas.map(user => `<li>${user.name}</li>`)
    res.send (
        `<h1>Aquí están las personas de ventas</h1>
        <ul>${listaVentas}</ul>
        <p><ul><a href="/">home</a>
        <a href="/marketing">marketing</a>
        <a href="/developers">developers</a>
        <a href="/qas">qas</a></p>`
        
    )
})

app.get('/developers', (req, res) =>{
    const usuariosDevelopers = filtrarEspecialidad('developers');
    const listaDevelopers = usuariosDevelopers.map(user => `<li>${user.name}</li>`)
    res.send (
        `<h1>Aquí están las personas de marketing</h1>
        <ul>${listaDevelopers}</ul>
        <p><ul><a href="/">home</a>
        <a href="/marketing">marketing</a>
        <a href="/qas">qas</a>
        <a href="/ventas">ventas</a></p>`
        
    )
})

app.get('/qas', (req, res) =>{
    const usuariosQas = filtrarEspecialidad('QAs');
    const listaQas = usuariosQas.map(user => `<li>${user.name}</li>`)
    res.send (
        `<h1>Aquí están las personas de marketing</h1>
        <ul>${listaQas}</ul>
        <p><ul><a href="/">home</a>
        <a href="/marketing">marketing</a>
        <a href="/developers">developers</a>
        <a href="/ventas">ventas</a></p>`
        
    )
})

//Creamos una página de error que nos permita volver al home
app.use((req,res) =>{
    res.status(404).send('<h1>No se encuentra esta página</h1><p><a href="/">home<a/></p>')
})

//Comprobamos que el servidor responde en el puerto asignado, en este caso el 3000
app.listen(3000, () =>{
    console.log('Express está escuchando en el puerto 3000')
})