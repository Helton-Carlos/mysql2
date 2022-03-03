const { Sequelize } = require('sequelize');

// Option 1: Passing a connection URI
const sequelize = new Sequelize('nodedb','root','root',{
    host:'localhost',
    dialect:'mysql'
})
sequelize.authenticate()
.then( function(){
    console.log("Conexão realizada com sucesso.")
})
.catch(function(){
    console.log("Erro, problemas com a conexão.")
})
module.exports=sequelize;