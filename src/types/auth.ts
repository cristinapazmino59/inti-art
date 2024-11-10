import { DefaultSession } from 'next-auth';
import { UserRole } from './user';

declare module "next-auth" {
    interface Session {
      user: {
        id: string;
        role: UserRole;
      } & DefaultSession["user"];
    }
}