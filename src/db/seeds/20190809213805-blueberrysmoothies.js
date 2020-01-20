'use strict';

let blueberrySmoothies = [
  {
  id: 1,
  name: 'BLUEBERRY SMOOTHIE',
  ingredients: '1 1/2 cups apple juice, 1 banana halved, 1 1/2 cups frozen blueberries, 3/4 cup vanilla Greek yogurt, fresh blueberries, and mint sprigs for garnish',
  recipe: 'Place the apple juice, banana, blueberries and Greek yogurt in a blender. Blend until completely smooth. Pour into glasses and serve, topped with blueberries and mint if desired.',
  calories: '270 calories per cup',
  source: '/images/blueberrysmoothie1.jpg',
  createdAt: '1/19/20',
  updatedAt: '1/19/20'
 },
 {
  id: 2,
  name: 'Very Blueberry Smoothie',
  ingredients: '2 cups fresh blueberries, 2 cups plain yogurt, 1/4 cup milk, 2 tablespoons honey, 1 cup ice cubes',
  recipe: 'In a blender, combine the blueberries, yogurt, milk and honey. Puree until smooth. When ready to serve, add the ice and then pulse and blend the mixture until it is smooth. Taste for sweetness and add more honey, if desired.',
  calories: 'N/A',
  source: '/images/blueberrysmoothie2.jpg',
  createdAt: '1/19/20',
  updatedAt: '1/19/20'
 },
 {
  id: 3,
  name: 'BLUEBERRY ALMOND BUTTER SMOOTHIE',
  ingredients: '1 1/2 cups ripe chunks frozen banana, 1/2 cup frozen blueberries, 1 Tbsp almond butter (or peanut or sunflower seed butter), 3/4 cup unsweetened plain almond milk, 1 Tbsp flaxseed meal, 1 Tbsp chia seed, 1-2 Tbsp protein powder',
  recipe: 'Add frozen banana, blueberries, almond butter, flaxseed meal, chia seeds, and almond milk to a high-speed blender and blend on high until creamy and smooth. If it has trouble blending, add a bit more almond milk. Then taste and adjust flavor as needed, adding more banana (or a bit of stevia) for sweetness, blueberries for fruitiness, almond butter for nuttiness/creaminess, or almond milk to thin. Garnish with additional chia seeds and/or almond butter (optional) and enjoy!',
  calories: '190 calories per cup',
  source: '/images/blueberrysmoothie3.jpg',
  createdAt: '1/19/20',
  updatedAt: '1/19/20'
 },
 {
  id: 4,
  name: 'Chocolate Blueberry Smoothie',
  ingredients: '1 ripe banana, 1 cup frozen blueberries, 1/2 cup almond milk, 1 tablespoon maple syrup, 1  tablespoon cocoa powder, 1/2 teaspoon vanilla extract',
  recipe: 'Slice the banana into pieces. Add all the ingredients into a blender and blend on high until combined.',
  calories: '140 calories per cup',
  source: '/images/blueberrysmoothie4.jpg',
  createdAt: '1/19/20',
  updatedAt: '1/19/20'
},
{
  id: 5, name: 'Cherry-Blueberry Banana Smoothies', ingredients: '1½ cups frozen unsweetened pitted dark sweet cherries or sour cherries, 1 cup unsweetened vanilla-flavored almond milk, 1 small banana, peeled, ½ cup fresh or frozen unsweetened blueberries,  6-ounce carton blueberry-flavored fat-free Greek yogurt', recipe: 'In a blender combine cherries, almond milk, yogurt, blueberries, and banana. Cover and blend until smooth. Pour into glasses to serve.', calories: '105 calories per cup', source: '/images/blueberrysmoothie5.jpg', createdAt: '8/11/19', updatedAt: '8/11/19'
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
  return queryInterface.bulkInsert("blueberrySmoothies", blueberrySmoothies, {});

 },

 down: (queryInterface, Sequelize) => {
  /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.

    Example:
    return queryInterface.bulkDelete('People', null, {});
  */
  return queryInterface.bulkDelete("blueberrySmoothies", null, {});

 }
};
