import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export class CreateCategoryController {
    constructor(private createCategoyUseCase: CreateCategoryUseCase) {
 
    }
    
    handle(request: Request, response: Response) : Response {
        const { name, description } = request.body;
        this.createCategoyUseCase.execute({name, description})
        return response.status(201).send()
    }
}