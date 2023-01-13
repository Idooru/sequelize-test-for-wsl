import { Sequelize } from "sequelize";
import { config } from "../config/config.js";
import { User } from "./user.js";

const env = process.env.NODE_ENV || "development";
const devConfig = config.development;
const db = {};

const sequelize = new Sequelize(
  devConfig.database,
  devConfig.username,
  devConfig.password,
  devConfig
);

db.sequelize = sequelize;

db.User = User;

User.init(sequelize);
User.associate(db);

export { db };
