import type { CodegenConfig } from '@graphql-codegen/cli';
import * as dotenv from 'dotenv';
dotenv.config();
const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.NEXT_PUBLIC_BASE_URL,
  documents: './api/documents/**/*.gql',
  generates: {
    './api/hooks/graphql/hooks.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-rtk-query'],
      config: {
        importBaseApiFrom: '../../graphql-api-base',
        importBaseApiAlternateName: 'graphql_api',
        exportHooks: true,
      },
    },
  },
};
export default config;
