import jwt, { JwtPayload } from 'jsonwebtoken';
export function decodeJwt(token: string) {
  try {
    const decoded = jwt.decode(token);
    if (decoded === null) {
      console.error('JWT decoding failed: null');
      return null;
    }
    return decoded as JwtPayload;
  } catch (error) {
    console.error('JWT verification failed:', error);
    return null;
  }
}
