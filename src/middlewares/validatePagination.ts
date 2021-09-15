import { Request, Response, NextFunction } from 'express';



const limitPossibilities = [ 8, 16, 24 ];
const defaultLimit = limitPossibilities[0];
const defaultPage = 1; 

async function validatePagination( req: Request, res: Response, next: NextFunction ){
    const { query } = req;

    try {
        const limit = Number(query.limit) || defaultLimit;
        const page = Number(query.page) || defaultPage;

        const correctLimit = limitPossibilities.find( possibility => possibility === limit ) || defaultLimit;

        res.locals = {
            ...res.locals,
            limit: correctLimit, 
            offset: correctLimit * (page-1),
            page
        };
    
        return next();
    } catch(err) {
        return res.status(503).json(err);
    }
}



export default validatePagination;