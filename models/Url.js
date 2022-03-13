module.exports = (sequelize, Sequelize) => {
    const DataTypes = Sequelize.DataTypes;
    const Url = sequelize.define('Url', {
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hash: {
        type: DataTypes.STRING,
        allowNull: false
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false
      },
    });
    return Url;
  };
  
  /*


create table urls(
   url varchar(50), 
   hash varchar(50), 
   userId int,
  createdAt datetime, 
  updatedAt datetime, 
  id int ,
  primary key(hash)
  );
  */