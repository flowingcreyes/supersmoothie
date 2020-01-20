'use strict';
let bananaSmoothies = [{
  id: 1,
  name: 'Banana Licuado',
  ingredients: '2 cups milk 1 ripe banana, 2 tablespoons sugar, Several handfuls ice, nutmeg',
  recipe: 'Place milk, banana, sugar, and ice in a high-speed blender and pulse until smooth. Pour in glasses and sprinkle with nutmeg before serving. For a thicker consistency, use more ice. Depending on the sweetness of fruit, you may need more or less sugar.',
  calories: '90 calories per cup',
  source: '../../images/bananaSmoothie1.jpg',
  createdAt: '1/19/20',
  updatedAt: '1/19/20'
 },
 {
  id: 2,
  name: 'Peanut Butter Banana Smoothie',
  ingredients: '2 bananas broken into chunks, 2 cups milk, 1/2 cup peanut butter Jif reduced Fat Creamy Peanut Butter, 2 tablespoons honey, 2 cups ice cubes',
  recipe: 'Place bananas, milk, peanut butter, honey, and ice cubes in a blender; blend until smooth, about 30 seconds.',
  calories: '335 calories per cup',
  source: '../../images/bananaSmoothie2.jpg',
  createdAt: '1/19/20',
  updatedAt: '1/19/20'
 },
 {
  id: 3,
  name: 'Almond-Banana Smoothie',
  ingredients: '2 large ripe bananas, peeled, sliced, 2 cups almond milk or whole milk, 2 cups ice cubes, 2 tablespoons (packed), golden-red sugar, 1 teaspoon vanilla extract, ground nutmeg',
  recipe: 'Blend first 5 ingredients in blender until smooth. Divide smoothies among 4 small glasses. Sprinkle lightly with nutmeg.',
  calories: '170 calories per cup',
  source: '../../images/bananaSmoothie3.jpg',
  createdAt: '1/19/20',
  updatedAt: '1/19/20'
 },
 {
  id: 4,
  name: 'Easy Chiquita Banana Smoothie',
  ingredients: '2 whole Chiquita Bananas, 3 cups ice, 1 cup low-fat yogurt',
  recipe: 'Pour all ingredients into a blender. Blend on high for 30 seconds or until the banana smoothie thickens and enjoy!',
  calories: '185 calories per cup',
  source: '../../images/bananaSmoothie4.jpg',
  createdAt: '1/19/20',
  updatedAt: '1/19/20'
},
{
  id: 5, name: 'Green Banana Mint Smoothie', ingredients: '1 cup unsweetened almond milk, 3 cups baby spinach, 1 frozen banana, 1 scoop protein powder, 3 tbsp mint, 2 tbsp flaxseeds, 1 cup ice', recipe: 'Add all ingredients to a blender and blend until smooth.', calories:  '140 calories per cup' , source:  '../../images/bananaSmoothie5.jpg', createdAt: '8/11/19', updatedAt: '8/11/19'
}
]

module.exports = {
 up: (queryInterface, Sequelize) => {
  /*
    Add altering commands here.
    Return a promise to correctly handle asynchronicity.

    Example:
    return queryInterface.bulkInsert('People', [{
      name: 'John Doe',
      isBetaMember: false
    }], {});
  */
  return queryInterface.bulkInsert("bananaSmoothies", bananaSmoothies, {});

 },

 down: (queryInterface, Sequelize) => {
  /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.

    Example:
    return queryInterface.bulkDelete('People', null, {});
  */
  return queryInterface.bulkDelete("bananaSmoothies", null, {});

 }
};
