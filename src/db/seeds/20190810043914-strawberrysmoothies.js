'use strict';

let strawberrySmoothies = [{
  id: 1,
  name: 'Strawberry Smoothie',
  ingredients: '1 cup low fat milk, 1/2 cup strawberry Greek yogurt, 1 frozen banana cut in chunks, 1 and 1/2 cups fresh or frozen strawberries',
  recipe: 'Place ingredients in blender in the order written. Puree until smooth, add a bit more milk or water if the smoothie is too thick to blend. Taste and add a bit of honey if desired to sweeten.',
  calories: '200 calories per cup',
  source: '../../images/strawberrySmoothie1.jpg',
  createdAt: '8/9/19',
  updatedAt: '8/9/19'
 },
 {
  id: 2,
  name: "B and L's Strawberry Smoothie",
  ingredients: '8 strawberries, hulled, 1/2 cup skim milk, 1/2 cup plain yogurt, 3 tablespoons white sugar, 2 teaspoons vanilla extract, 6 cubes (crushed)',
  recipe: 'In a blender combine strawberries, milk, yogurt, sugar, and vanilla. Toss in the ice. Blend until smooth and creamy. Pour into glasses and serve.',
  calories: '160 calories per cup',
  source: '../../images/strawberrySmoothie2.jpg',
  createdAt: '8/9/19',
  updatedAt: '8/9/19'
 },
 {
  id: 3,
  name: 'STRAWBERRY WATERMELON SMOOTHIE',
  ingredients: '10 oz. of frozen strawberries, 3 cups of fresh watermelon',
  recipe: 'Blend ingredients until smooth and serve immediately.',
  calories: '120 calories per cup',
  source: '../../images/strawberrySmoothie3.jpg',
  createdAt: '8/9/19',
  updatedAt: '8/9/19'
 },
 {
  id: 4,
  name: 'Dark Chocolate Strawberry Smoothie',
  ingredients: '1/2 cup nonfat or low-fat strawberry Greek yogurt, 3/4 cup frozen strawberries, 1 cup skim milk, 1 tablespoon unsweetened dark cocoa powder, 1/2 cup ice (only if using fresh berries)',
  recipe: 'Place all ingredients in a blender (or Bullet, food processor, etc.) and blend until smooth. Pour into a glass and top with sliced fresh strawberries, if desired. Enjoy immediately!',
  calories: 'N/A',
  source: '../../images/strawberrySmoothie4.jpg',
  createdAt: '8/9/19',
  updatedAt: '8/9/19'
},
{
  id: 5, name: 'Strawberry Mint Smoothie', ingredients: '8 ounces strawberries (hulled and frozen), 1/2 cup vanilla yogurt, 1 cup milk (skim, reduced fat, or whole), 1 tablespoon honey, 10–12 leaves fresh mint)', recipe: 'Place all ingredients in a high powered blender. Process until fully blended and smooth. Taste test and adjust ingredients, if necessary. Pour into glasses and serve immediately.', calories:  'N/A', source: '../../images/strawberrySmoothie5.jpg', createdAt:  '8/11/19', updatedAt: '8/11/19'
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
  return queryInterface.bulkInsert("strawberrySmoothies", strawberrySmoothies, {});

 },

 down: (queryInterface, Sequelize) => {
  /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.

    Example:
    return queryInterface.bulkDelete('People', null, {});
  */
  return queryInterface.bulkInsert("strawberrySmoothies", null, {});

 }
};
