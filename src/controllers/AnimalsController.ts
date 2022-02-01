import { Request, Response } from 'express';
import Animal from '@models/Animal';

class AnimalController {
    public async create(req: Request, res: Response): Promise<Response> {
        const animal = await Animal.create(req.body);

        return res.json(animal); 
    }

    public async read(req: Request, res: Response): Promise<Response> {
        const animal = await Animal.find();

        return res.json(animal); 
    }

    public async readID(req: Request, res: Response): Promise<Response> {
        const animal = await Animal.findById(req.body);

        return res.json(animal); 
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const animal = await Animal.findByIdAndUpdate(req.body);

        return res.json(animal);
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const animal = await Animal.deleteOne(req.body);

        return res.json(animal); 
    }
}

export default new AnimalController();