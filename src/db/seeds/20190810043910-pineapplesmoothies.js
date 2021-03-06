"use strict";

let pineappleSmoothies = [
  {
    id: 1,
    name: "PINEAPPLE SMOOTHIE",
    ingredients:
      "1 1/2 cups pineapple juice, 1 banana cut in half, 1 1/2 cups frozen pineapple chunks, 3/4 cup vanilla Greek yogurt, fresh pineapple wedges (and mint sprigs for garnish)",
    recipe:
      "Place the pineapple juice, banana, frozen pineapple and vanilla Greek yogurt in a blender. Blend until smooth. Pour into 2 glasses. Garnish with pineapple wedges and mint sprigs if desired.",
    calories: "170 calories per cup",
    source: "/images/pineapplesmoothie1.jpg",
    createdAt: "1/19/20",
    updatedAt: "1/19/20"
  },
  {
    id: 2,
    name: "SKINNY PINEAPPLE SMOOTHIE",
    ingredients:
      "1 sliced frozen banana, 1 cup frozen pineapple chunks, 1 tbsp. unsweetened cocoa powder, 1 chopped pitted date, 1/2 cup almond milk, Black or white chia seeds, Sliced strawberries, Cacao nibs",
    recipe:
      "In a blender, puree 1 sliced frozen banana, 1 cup frozen pineapple chunks, 1 tbsp. unsweetened cocoa powder, 1 chopped pitted date, and 1/2 cup almond milk. Top with black or white chia seeds, sliced strawberries, and cacao nibs.",
    calories: "N/A",
    source: "/images/pineapplesmoothie2.jpg",
    createdAt: "1/19/20",
    updatedAt: "1/19/20"
  },
  {
    id: 3,
    name: "PINEAPPLE MANGO SMOOTHIE",
    ingredients:
      "1 cup frozen pineapple, 1 cup frozen mango pieces, 1 cup vanilla yogurt, 1/3 cup milk, 2 teaspoons sugar, a couple of ice cubes",
    recipe:
      "Place the above ingredients in a blender and blend until smooth. Add more milk if too thick or ice if too thin.",
    calories: "N/A",
    source: "/images/pineapplesmoothie3.jpg",
    createdAt: "1/19/20",
    updatedAt: "1/19/20"
  },
  {
    id: 4,
    name: "PINEAPPLE KIWI SMOOTHIE",
    ingredients:
      "2 kiwis, halved, 1 cup pineapple juice, 2 Tablespoons raw honey",
    recipe:
      "Combine everything in the blender and serve! Would be great as a tropical cocktail using some coconut rum!",
    calories: "140 calories per cup",
    source: "/images/pineapplesmoothie4.jpg",
    createdAt: "1/19/20",
    updatedAt: "1/19/20"
  },
  {
    id: 5,
    name: "Refreshing Watermelon Pineapple Smoothie",
    ingredients:
      "1/2 cup frozen pineapple chunks, 1/2 cup frozen raspberries, 3/4 cup fresh diced seedless watermelon, 1/4 cup Almond Breeze Almondmilk Unsweetened Vanilla",
    recipe:
      "In a blender, place all ingredients together and blend until smooth. If necessary add in more almond milk just a tablespoon or two at a time until you get a nice thick smoothie consistency. Pour into a chilled glass or into a pineapple that's been carved in the middle.",
    calories: "145 calories per cup",
    source: "/images/pineapplesmoothie5.jpg",
    createdAt: "8/11/19",
    updatedAt: "8/11/19"
  }
];

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
    return queryInterface.bulkInsert(
      "pineappleSmoothies",
      pineappleSmoothies,
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
    Add reverting commands here.
    Return a promise to correctly handle asynchronicity.

    Example:
    return queryInterface.bulkDelete('People', null, {});
  */
    return queryInterface.bulkInsert("pineappleSmoothies", null, {});
  }
};
