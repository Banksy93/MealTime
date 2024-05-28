const baseUrl = "http://www.themealdb.com/api/json/v1/1";

export default class MealDbRoutes {
  static generateRandomRecipe = baseUrl + "/random.php";
  static recipeCategories = baseUrl + "/categories.php";
  static categoryList = baseUrl + "/list.php?c=list";
  static areaList = baseUrl + "/list.php?a=list";
  static ingredientList = baseUrl + "/list.php?i=list";

  static getReicpeById(id) {
    return baseUrl + "/lookup.php?i=" + id;
  }

  static listAll(type) {
    return baseUrl + "/list.php?" + type + "=list";
  }

  static getByIngredient(ingredient) {
    return baseUrl + "/filter.php?i=" + ingredient;
  }

  static getByCategory(category) {
    return baseUrl + "/filter.php?c=" + category;
  }

  static getByArea(area) {
    return baseUrl + "/filter.php?a=" + area;
  }

  static searchMealByName(name) {
    return baseUrl + "/search.php?s=" + name;
  }

  static searchByIngredient(ingredient) {
    const urlFriendlyIngredient = ingredient.split(' ').join('_');
    return baseUrl  + "/filter.php?i=" + urlFriendlyIngredient;
  }
}