
import bcrypt from 'bcrypt';



export const cryptographyPassword = async (password: string) =>
    await bcrypt.hash(password, 10);

export const comparePassword = async(password: string, hash: string) =>
    await bcrypt.compare(password, hash);
