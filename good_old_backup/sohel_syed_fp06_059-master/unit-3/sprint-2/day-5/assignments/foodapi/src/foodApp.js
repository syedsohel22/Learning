const getCategoriesData = async () => {
  // code here
  try {
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
    );
    let meals = await res.json();
    return "Categories Data:", meals;
  } catch (err) {
    return "something went wrong";
  }
};
//  getCategoriesData()

const getIngredientData = async () => {
  // code here
  try {
    let res2 = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`
    );
    let meals = await res2.json();
    return "Ingredient Data:", meals;
  } catch (err) {
    return "something went wrong";
  }
};
// getIngredientData()
window.onload = function () {
  document
    .getElementById("get-category-data")
    .addEventListener("click", function () {
      getCategoriesData();
    });
  document
    .getElementById("get-ingredient-data")
    .addEventListener("click", function () {
      getIngredientData();
    });
};
//  get the buttons here and add click event

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getCategoriesData,
    getIngredientData,
  };
}
