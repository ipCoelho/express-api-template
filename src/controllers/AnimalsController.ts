import { Request, Response } from 'express';
import Animal from '@models/Animal';

class AnimalController {
    public async create(req: Request, res: Response): Promise<Response> {
        const animal = new Animal(req.body);

        return res.json(animal); 
    }
}

export default new AnimalController();