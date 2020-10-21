import { Injectable } from '@angular/core';
import { ApicategoriesService, ApiService } from 'src/todo-api/src/services';
import { CategoryDto } from 'src/todo-api/src/models';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(
    public apiService: ApiService,
    public categoryService: ApicategoriesService
  ) { }

  save(category: CategoryDto) {
    return this.categoryService.updateCategory(category);
  }

  getById(categoryId: number) {
    return this.categoryService.getCategory(categoryId);
  }

  getAll() {
    return this.apiService.getAllCategories();
  }

  getAllByUser(idUser: number) {
    return this.categoryService.getAllCategoriesByUserId(idUser);
  }

  getAllForToday(userId: number) {
    return this.categoryService.getAllTodoByCategoriesForToday(userId);
  }

  delete(categoryId: number) {
    this.categoryService.deleteCategory(categoryId);
  }
}
