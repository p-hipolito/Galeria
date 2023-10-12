const { Sequelize, DataTypes, Model } = require('sequelize');

// Tabela - usuário - senha - {local, tipo de database}
const sequelize = new Sequelize('usuarios', 'root', 'paulo20102011', {
    host: 'localhost',
    dialect: 'mysql'
});

// Conferindo conexão com banco de dados:
sequelize.authenticate().then(function() {
    console.log('Conectado com sucesso!') //promessa concluída
}).catch(function(erro){
    console.log('N deu n fião:'+ erro) //quebrou a promessa :c
});

// Linkando um Modelo à tabela real no MySQL

const tbUsuarios = sequelize.define('tbUsuarios', {
    Usuario: {
        type: DataTypes.STRING,
        allowNull: false, 
        primaryKey: true
    },
    Email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Profile_Picture: {
        type: DataTypes.BLOB,
        defaultValue: 'tiraptiuru',
    },
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true
      }
}, {
    tableName: 'tbUsuarios'
});

// true confirma a criação
console.log(tbUsuarios === sequelize.models.tbUsuarios);

(async () => {
    //await sequelize.sync({ force: true });
    await sequelize.sync({ alter: true });
    console.log("The table for the User model was just (re)created!");
  })();

/*tbUsuarios.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }
  }, { sequelize });

  const user = new tbUsuarios({
    id: 1,
    Usuário: 'mariajoão',
    Email: 'sss@ggg.ss',
    Senha: 'arrobaoito',
    Profile_Picture: 'arroteinoteupai' 
});

console.log(user.id);
*/
//alterando tabela para refletir mudanças feitas pelo modelo

function criarUsuario(user, mail, password) {
    const newUser = tbUsuarios.create({
        Usuario: user,
        Email: mail,
        Senha: password
    });
};