import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import { envVars } from "./app/config/env";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";


const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: envVars.FRONT_END_URL,
    credentials: true, 
  })
);

app.use("/api/ps1", router);

app.use(globalErrorHandler);

app.use(notFound);

export default app;
