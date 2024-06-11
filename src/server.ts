import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './app/config/index';

let server: Server;
async function main() {


  try {
    await mongoose.connect(config.database_url as string);
    server = app.listen(config.port, () => {
      console.log(` app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();


process.on("unhandledRejection", () => {

  if (server) {
    console.log("unhelded Rejection is detected, shutting dwon")
    server.close(() => {
      process.exit(1);
    })
    process.exit(1);

  }
})

process.on("uncaughtException", () => {
  console.log("uncaughtException is detected, shutting dwon")
  process.exit(1)
})


