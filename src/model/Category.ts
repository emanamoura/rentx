import { v4 as uuidv4} from "uuid";

interface ICategory {
    name: string,
    description: string
}

export class Category {
    private id: string;
    name: string;
    description: string;
    private created_at: Date;

    constructor({name, description} :ICategory) {
        this.id = uuidv4()
        this.name = name;
        this.description = description;
        this.created_at = new Date();
    }
}