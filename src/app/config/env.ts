import dotenv from "dotenv";

dotenv.config()

interface EnvConfig {
    PORT: string,
    DB_URL: string,
    NODE_ENV: string,
    FRONT_END_URL: string,
}

const loadEnvVariables = (): EnvConfig => {
    const requiredEnvVariables: string[] = ["PORT","DB_URL","NODE_ENV","FRONT_END_URL"];

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
    }
}

export const envVars = loadEnvVariables()