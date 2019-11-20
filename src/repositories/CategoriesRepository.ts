export class CategoriesRepository {
  public getCategories: () => Promise<string[]> = () => Promise.resolve(['terror', 'action']);
}
