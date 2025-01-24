import { ErrorRequestHandler } from "express";
import { CustomError } from "../model/error";

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).json({ error: err.message });
    return;
  }

  res.status(500).json({ error: "Internal server error" });
};
