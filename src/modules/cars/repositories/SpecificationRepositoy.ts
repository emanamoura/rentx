import { Specification } from "../model/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "./ISpecificationRepository";


export class SpecificationRepository implements ISpecificationRepository {
    private specifications: Specification[];
    constructor() {
        this.specifications = [];
    }
   
    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification({name, description});
        this.specifications.push(specification)
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find(specification => specification.name === name);
        return specification;
    }
    
}