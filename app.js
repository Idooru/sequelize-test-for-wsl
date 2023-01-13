import express from "express";
import path from "path";
import morgan from "morgan";
import { db } from "./models/index.js";
import { User } from "./models/user.js";

const { sequelize } = db;

const app = express();
app.set("port", process.env.PORT || 3000);
sequelize
  .sync({ force: false })
  .then(() => console.log("데이터 베이스 연결 성공!"))
  .catch((err) => console.error(err));

app.listen(app.get("port"), () => console.log("서버 시작"));
