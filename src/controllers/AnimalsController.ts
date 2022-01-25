import { Request, Response } from 'express';
import Animal from '../models/Animal';

class AnimalController {
    public async create(req: Request, res: Response): Promise<Response> {
        const reqJson: JSON = req.body;
        return res.json(reqJson); 
    }
}

export default AnimalController;