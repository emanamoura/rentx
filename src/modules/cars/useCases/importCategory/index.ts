import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository"
import { ImportCategoryController } from "./ImportCategoryController"
import { ImportCategoryUseCase } from "./ImportCategoryUseCase"

const categoriesRepository = CategoriesRepository.getInstance()
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository)
const importCattegoryController = new ImportCategoryController(importCategoryUseCase)

export { importCattegoryController }