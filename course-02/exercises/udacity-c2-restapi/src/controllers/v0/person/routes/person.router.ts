import { Router, Request, Response } from 'express';
import { Person } from '../models/Person';
import { requireAuth } from '../../users/routes/auth.router';
import * as AWS from '../../../../aws';

const router: Router = Router();

// Get all feed items
router.get('/', async (req: Request, res: Response) => {
    const items = await Person.findAndCountAll({order: [['id', 'DESC']]});
    res.send(items);
});

//@TODO
//Add an endpoint to GET a specific resource by Primary Key

// update a specific resource
router.patch('/:id', 
    requireAuth, 
    async (req: Request, res: Response) => {
        //@TODO try it yourself
        res.status(500).send("not implemented")
});



// Post meta data and the filename after a file is uploaded 
// NOTE the file name is they key name in the s3 bucket.
// body : {caption: string, fileName: string};
router.post('/', 
    async (req: Request, res: Response) => {
    const name = req.body.name;

    // check Caption is valid
    if (!name) {
        return res.status(400).send({ message: 'Name is required or malformed' });
    }

    const item = await new Person({ name });

    const saved_item = await item.save();

    res.status(201).send(saved_item);
});

export const PersonRouter: Router = router;