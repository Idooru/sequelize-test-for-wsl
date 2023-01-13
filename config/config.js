export const config = {
  development: {
    username: "root",
    password: "shere12345!",
    database: "sequelize-test",
    host: "mysql-wsl.cy2zc1vkzrge.us-west-2.rds.amazonaws.com",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
