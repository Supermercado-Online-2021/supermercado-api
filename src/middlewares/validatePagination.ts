import { Request, Response, NextFunction } from 'express';



const defaultLimit = 15;
const defaultPage = 1; 

async function validatePagination( req: Request, res: Response, next: NextFunction ){
    const { query } = req;

    try {
        const limit = Number(query.limit) || defaultLimit;
        const page = Number(query.page) > 0 
            ? Number(query.page)
            : defaultPage;

        res.locals = {
            ...res.locals,
            limit, 
            offset: limit * (page-1),
            page
        };
    
        return next();
    } catch(err) {
        return res.status(503).json(err);
    }
}



export default validatePagination;