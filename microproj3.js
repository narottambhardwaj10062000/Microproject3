import food from './food.json' assert { type: "json" };;

  
  // Task 1: List all the food items
  function AllFoodItems(data) {
    return data.map(item => item.foodname);
  }
  
  // Task 2: List all the food items with category vegetables
  function Vegetables(data) {
    return data.filter(item => item.category === 'Vegetable').map(item => item.foodname);
  }
  
  // Task 3: List all the food items with category fruit
  function Fruits(data) {
    return data.filter(item => item.category === 'Fruit').map(item => item.foodname);
  }
  
  // Task 4: List all the food items with category protein
  function Proteins(data) {
    return data.filter(item => item.category === 'Protein').map(item => item.foodname);
  }
  
  // Task 5: List all the food items with category nuts
  function Nuts(data) {
    return data.filter(item => item.category === 'Nuts').map(item => item.foodname);
  }
  
  // Task 6: List all the food items with category grains
  function Grains(data) {
    return data.filter(item => item.category === 'Grain').map(item => item.foodname);
  }
  
  // Task 7: List all the food items with category dairy
  function Dairy(data) {
    return data.filter(item => item.category === 'Dairy').map(item => item.foodname);
  }
  
  // Task 8: List all the food items with calorie above 100
  function Above100Calories(data,threshold) {
    return data.filter(item => item.calorie > threshold).map(item => item.foodname);
  }
  
  // Task 9: List all the food items with calorie below 100
  function Below100Calories(data,threshold) {
    return data.filter(item => item.calorie < threshold).map(item => item.foodname);
  }
  
  // Task 10: List all the food items with highest protein content to lowest
  function SortedByProtein(data) {
    return data.slice().sort((a, b) => b.protiens - a.protiens).map(item => item.foodname);
  }
  
  // Task 11: List all the food items with lowest carb content to highest
  function SortedByCarb(data) {
    return data.slice().sort((a, b) => a.cab - b.cab).map(item => item.foodname);
  }
  
  // Output
console.log("All Food Items:", AllFoodItems(food));
console.log("Vegetables:", Vegetables(food, "Vegetable"));
console.log("Fruits:", Fruits(food, "Fruit"));
console.log("Protein:", Proteins(food, "Protein"));
console.log("Nuts:", Nuts(food, "Nuts"));
console.log("Grain:", Grains(food, "Grain"));
console.log("Dairy:", Dairy(food, "Dairy"));
console.log("Above 100 Calories:", Above100Calories(food, 100));
console.log("Below 100 Calories:", Below100Calories(food, 100));
console.log("Sorted by Protein (Highest to Lowest):", SortedByProtein(food));
console.log("Sorted by Carb (Lowest to Highest):", SortedByCarb(food));