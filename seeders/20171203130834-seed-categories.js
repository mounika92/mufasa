'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('categories', [
      {
        id: 1,
        name: "dairy"
      }
    ]);
  }
};
