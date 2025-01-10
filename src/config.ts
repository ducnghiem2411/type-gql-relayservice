import 'dotenv/config'

export function validateEnvVars() {
    // Lấy tất cả các key từ interface ProcessEnv
    type EnvKeys = keyof NodeJS.ProcessEnv
    const requiredKeys = Object.keys(process.env) as EnvKeys[]

    const missingVars = requiredKeys.filter(key => !process.env[key])

    if (missingVars.length > 0) {
        throw new Error(
            `Missing required environment variables: ${missingVars.join(', ')}`
        )
    }
}

validateEnvVars()

export const MONGO_URI = process.env.MONGO_URI