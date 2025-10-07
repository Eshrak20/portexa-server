import dotenv from "dotenv";

dotenv.config()

interface EnvConfig {
    PORT: string,
    DB_URL: string,
    NODE_ENV: string,
    FRONT_END_URL: string,
    JWT_ACCESS_SECRET: string,
    JWT_ACCESS_EXPIRES: string,
    JWT_REFRESH_SECRET: string,
    JWT_REFRESH_EXPIRES: string,
}

const loadEnvVariables = (): EnvConfig => {
    const requiredEnvVariables: string[] = ["PORT", "DB_URL", "NODE_ENV", "FRONT_END_URL", "JWT_ACCESS_SECRET", "JWT_ACCESS_EXPIRES", "JWT_REFRESH_SECRET", "JWT_REFRESH_EXPIRES"];

    requiredEnvVariables.forEach(key => {
        if (!process.env[key]) {
            throw new Error(`Missing require environment variable ${key}`)
        }
    })

    return {
        PORT: process.env.PORT as string,
        DB_URL: process.env.PORT as string,
        NODE_ENV: process.env.PORT as string,
        FRONT_END_URL: process.env.PORT as string,
        JWT_ACCESS_SECRET: process.env.PORT as string,
        JWT_ACCESS_EXPIRES: process.env.PORT as string,
        JWT_REFRESH_SECRET: process.env.PORT as string,
        JWT_REFRESH_EXPIRES: process.env.PORT as string,
    }
}

export const envVars = loadEnvVariables()