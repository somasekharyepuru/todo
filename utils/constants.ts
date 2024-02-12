import * as dotenv from 'dotenv';
dotenv.config();
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const ENDPOINT = {
  GRAPHQL_API_URL: `${BASE_URL}`,
};
