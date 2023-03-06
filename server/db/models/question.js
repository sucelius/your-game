const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Game, { foreignKey: 'questionId' });
    }
  }
  Question.init({
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    points: DataTypes.INTEGER,
    category: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
