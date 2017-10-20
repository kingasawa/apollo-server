import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import seeds from '../data/seeds';
const env = process.env.NODE_ENV || 'development';
const config = require('../config/db_config.json')[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);
const basename = path.basename(module.filename);
const db = {};

fs
  .readdirSync(__dirname)
  .filter((file) => {
    return file.indexOf('.') !== 0 && file !== basename;
  })
  .forEach((file) => {
    console.log('file', file);
    if (file.slice(-3) !== '.js') return;
    console.log('p', path.join(__dirname, file));
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

console.log('key db', Object.keys(db));

Object.keys(db).forEach(modelName => {
  if (db[modelName].options.classMethods.associate) {
    db[modelName].options.classMethods.associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
sequelize.sync(config.sync).then(() => seeds(db));

export default db;

