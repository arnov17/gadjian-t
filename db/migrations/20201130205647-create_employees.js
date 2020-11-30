module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Write migration code here.
    return queryInterface.createTable(
      "employees",
      {
        id: {
          type: Sequelize.INTEGER(10),
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          unique: true,
        },
        name: Sequelize.STRING(50),
        phone_number: Sequelize.STRING(16),
        jobtitle: Sequelize.STRING(25),
        created_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW(),
        },
        updated_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW(),
        },
        deleted_at: {
          type: Sequelize.DATE,
        },
      },
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    // If migration fails, this will be called. Rollback your migration changes.
    return queryInterface.dropTable("employees");
  },
};
