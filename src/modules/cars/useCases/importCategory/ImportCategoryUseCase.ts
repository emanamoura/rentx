import { parse as csvParse } from "csv-parse";
import fs from "fs";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";



class ImportCategoryUseCase {

    constructor(private categoriesRepository: ICategoriesRepository) {}
    

    loadCategories(file: Express.Multer.File) {
        const stream = fs.createReadStream(file.path);

        const parseFile = csvParse();

        stream.pipe(parseFile);

        parseFile.on("data", async (line) => {
            console.log(line);
        });
    }

    execute(file: Express.Multer.File) {
        
    }
}

export { ImportCategoryUseCase };