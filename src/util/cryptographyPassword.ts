
import bcrypt from 'bcrypt';



const cryptographyPassword = async (password: string) =>
    await bcrypt.hash(password, 10)

export default cryptographyPassword;
