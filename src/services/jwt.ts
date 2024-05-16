import { User } from '@prisma/client';
import { prismaClient } from '../clients/db';
// import JWT from 'jsonwebtoken';
import jwt from 'jsonwebtoken'; // Import jwt directly
const JWT_SECRET = 'DEEPAKSINGH';
class JWTService {
  public static async generateTokenForUser(user: User) {
    // generate payload
    const payload = {
      id: user?.id,
      email: user?.id,
    };
    const token = jwt.sign(payload, JWT_SECRET);
    return token;
  }
}
export default JWTService;
