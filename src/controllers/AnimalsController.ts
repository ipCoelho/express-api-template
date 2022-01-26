import Animal from '@models/Animal';
import { Request, Response } from 'express';

class AnimalController {
    public async create(req: Request, res: Response): Promise<Response> {
        const animal = new Animal();
        const reqJson: JSON = req.body;

        return res.json(reqJson); 
    }
}

export default AnimalController;