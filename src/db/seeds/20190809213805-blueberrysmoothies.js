'use strict';

let blueberrySmoothies = [
  {
    id: 1, name: 'Banana Licuado', ingredients: '2 cups milk 1 ripe banana, 2 tablespoons sugar, Several handfuls ice, nutmeg' , recipe: 'Place milk, banana, sugar, and ice in a high-speed blender and pulse until smooth. Pour in glasses and sprinkle with nutmeg before serving. For a thicker consistency, use more ice. Depending on the sweetness of fruit, you may need more or less sugar.', calories: '90 calories per cup', source: '../../image/bananasmoothie1.jpg', createdAt: '8/9/19', updatedAt: '8/9/19'
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
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
