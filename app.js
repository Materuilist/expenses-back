import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import initializeDB from "./utils/initializeDB.js";

import authRouter from "./routes/auth.route.js";
import moneyFlowRouter from "./routes/money-flow.router.js";

const app = express();

app.use("/", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type, Authorization"
  );
  next();
});

app.use("/", bodyParser.json({ limit: "50mb" }));

app.use("/auth", authRouter);
app.use("/moneyFlow", moneyFlowRouter);

app.use("/", async (err, req, res, next) => {
  await res.status(err.status || 500).json({
    message:
      err.message ||
      "Произошла ошибка на сервере... Извините за предоставленные неудобства!",
  });
});

mongoose.connect(
  "mongodb+srv://materuilist:borow123@expenses.hzadjhg.mongodb.net/?retryWrites=true&w=majority",
  async (err) => {
    if (err) {
      console.log(err);
      return;
    }

    // await initializeDB();

    app.listen(3200);

    console.log("listening");
  }
);
