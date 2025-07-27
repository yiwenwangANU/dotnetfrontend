const requiredEnvVars = {
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
} as const;

type EnvVarKey = keyof typeof requiredEnvVars;

function validateEnvVars(): void {
  const missingVars: string[] = [];

  (Object.keys(requiredEnvVars) as EnvVarKey[]).forEach((key) => {
    if (!requiredEnvVars[key]) {
      missingVars.push(key);
    }
  });

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}\n` +
      'Please check your .env.local file.'
    );
  }
}

// Validate on module load
validateEnvVars();

// Export validated environment variables with proper typing
export const env = {
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL as string,
} as const;

// Type-safe environment variable access
export type Env = typeof env;