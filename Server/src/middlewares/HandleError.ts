import { Request, Response, NextFunction } from "express";
import { AppError } from "../helpers/AppError";

export function HandleError(err: Error, request: Request, response: Response, next: NextFunction) {
    if(err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message
        });
    };

    console.error(err);

    return response.status(500).send({
        status: "error",
        message: "Internal server error"
    });
}