export interface CategoriesRepository {
  getCategories: () => Promise<string[]>;
}
