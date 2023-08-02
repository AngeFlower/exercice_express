const { Model } = require('objection');

class CoursModel extends Model {
  static get tableName() {
    return 'cours';
  };
}

module.exports = CoursModel;