export type Environment =

    "development"

    |

    "test"

    |

    "production";



export interface EnvironmentConfig {


    NODE_ENV: Environment;


    PORT: number;


    DATABASE_URL: string;


    JWT_SECRET: string;


    REDIS_URL?: string;


}