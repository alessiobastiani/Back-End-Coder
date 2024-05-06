import dotenv from "dotenv";
import { Command } from "commander";

const program = new Command();

program
  .option("-d", "Debug variable", false)
  .option("-p <port>", "Server Port", 9090)
  .option("--mode <mode>", "Work mode", "dev");
program.parse();

dotenv.config({
  path: "./src/config/.env",
});

const PORT = process.env.PORT || 9090;

console.log("PORT:", PORT);
console.log("MONGO_URL:", process.env.MONGO_URL);
console.log("GITHUB_CLIENT_ID:", process.env.GITHUB_CLIENT_ID);
console.log("GITHUB_CLIENT_SECRET:", process.env.GITHUB_CLIENT_SECRET);
console.log("GITHUB_CALLBACK_URL:", process.env.GITHUB_CALLBACK_URL);
console.log("PRIVATE_KEY:", process.env.PRIVATE_KEY);
console.log("GMAIL_ACCOUNT:", process.env.GMAIL_ACCOUNT);
console.log("GMAIL_APP_PASSWD:", process.env.GMAIL_APP_PASSWD);
console.log("RESET_PASSWORD_KEY:", process.env.RESET_PASSWORD_KEY);
console.log("ADMIN_EMAIL:", process.env.ADMIN_EMAIL);
console.log("STRIPE_PK:", process.env.STRIPE_PK);
console.log("STRIPE_SK:", process.env.STRIPE_SK);

export default {
  port: PORT,
  mongoUrl: process.env.MONGO_URL,
  enviroment: program.opts().mode,
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackUrl: process.env.GITHUB_CALLBACK_URL,
  privateKey: process.env.PRIVATE_KEY,
  gmailAccount: process.env.GMAIL_ACCOUNT,
  gmailAppPassword: process.env.GMAIL_APP_PASSWD,
  resetPasswordKey: process.env.RESET_PASSWORD_KEY,
  adminEmail: process.env.ADMIN_EMAIL,
  adminPass: process.env.ADMIN_PASS,
  stripePK: process.env.STRIPE_PK,
  stripeSK: process.env.STRIPE_SK,
};
