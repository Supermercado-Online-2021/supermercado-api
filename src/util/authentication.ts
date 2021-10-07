
import jwt from 'jsonwebtoken';

const SECRET: string = (process.env.SECRET as string);
const EXPIRED_TIME: number = Number(process.env.EXPIRED_TIME) || 300;


interface TokenLogout {
    token: string,
    date: Date
}

const backlistToken: TokenLogout[] = [];


 
export function sign( payload: string | object ): Promise<string> {
    return new Promise<string>( ( resolve, reject ) => {
        try{
            const token = jwt.sign( payload, SECRET, { expiresIn: EXPIRED_TIME });
            resolve(token);
        }catch(err) {
            reject(err);
        }
    });
}

export function verify<T>( token: string ): Promise<T> {
    return new Promise( ( resolve, reject ) => {
        const findBacklistToken = backlistToken
            .find( backlist => backlist.token === token );

        if(!findBacklistToken)
            jwt.verify( String(token), SECRET, ( err, decode ) => {
                return err
                    ? reject(err)
                    : resolve(decode as T);
            });
        else
            reject({
                name: "TokenExpiredError",
                message: "jwt expired",
                expiredAt: findBacklistToken.date
            });
    });
}

export function destroy( token: string ) {
    return new Promise( async (resolve) => {
        try{
            const validate = await verify(token);
            if(validate){
                backlistToken.push({
                    token,
                    date: new Date()
                });
                resolve(true);
            }
        }catch(err) {
            resolve(true);
        }
    });
}
