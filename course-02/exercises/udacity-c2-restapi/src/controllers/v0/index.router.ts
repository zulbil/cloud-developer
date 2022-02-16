import { Router, Request, Response } from 'express';
import { FeedRouter } from './feed/routes/feed.router';
import { UserRouter } from './users/routes/user.router';
import { DogRouter } from './dog/routes/dog.router';
import { PersonRouter } from './person/routes/person.router';

const router: Router = Router();

router.use('/feed', FeedRouter);
router.use('/users', UserRouter);
router.use('/dogs', DogRouter);
router.use('/persons', PersonRouter);

router.get('/', async (req: Request, res: Response) => {    
    res.send(`V0`);
});

export const IndexRouter: Router = router;