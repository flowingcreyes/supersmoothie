'use strict';

let blueberrySmoothies = [
  {
    id: 1, name: 'Banana Licuado', ingredients: '2 cups milk 1 ripe banana, 2 tablespoons sugar, Several handfuls ice, nutmeg' , recipe: 'Place milk, banana, sugar, and ice in a high-speed blender and pulse until smooth. Pour in glasses and sprinkle with nutmeg before serving. For a thicker consistency, use more ice. Depending on the sweetness of fruit, you may need more or less sugar.', calories: '90 calories per cup', source: '../../image/bananasmoothie1.jpg', createdAt: '8/9/19', updatedAt: '8/9/19'
  },
  {
 id: 2, name: 'Very Blueberry Smoothie' , ingredients:  '2 cups fresh blueberries, 2 cups plain yogurt, 1/4 cup milk, 2 tablespoons honey, 1 cup ice cubes', recipe: 'In a blender, combine the blueberries, yogurt, milk and honey. Puree until smooth. When ready to serve, add the ice and then pulse and blend the mixture until it is smooth. Taste for sweetness and add more honey, if desired.', calories: 'N/A' , source: '../../image/blueberrysmoothie2.jpg', createdAt:  '8/9/19' , updatedAt: '8/9/19'
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
