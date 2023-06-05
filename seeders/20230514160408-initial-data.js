'use strict';
const bcrypt = require('bcryptjs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let transcation

    try {
      const hash = await bcrypt.hash('12345678', 10);

      transcation = await queryInterface.sequelize.transaction()

      await queryInterface.bulkInsert('Users', [
        {
          id: 1,
          name: 'root',
          email: 'user1@example.com',
          password: hash,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], { transcation })
      await queryInterface.bulkInsert('Todos',
        Array.from({ length: 10 }).map((_, i) =>
        ({
          name: `todo-${i}`,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        })
        )
        , { transcation })

      await transcation.commit()
    } catch (e) {
      if (transcation) transcation.rollback()
      // throw e
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null)
    await queryInterface.bulkDelete('Todos', null)
  }
}
