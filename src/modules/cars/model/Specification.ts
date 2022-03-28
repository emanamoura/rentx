import { v4 as uuidv4 } from 'uuid';

interface ISpecification {
    name: string,
    description: string
}

export class Specification {
    private id: string;
    name: string;
    description: string;
    private created_at: Date;

    constructor({name, description} :ISpecification) {
        this.id = uuidv4()
        this.name = name;
        this.description = description;
        this.created_at = new Date();
    }
}