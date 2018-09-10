const bookshelf = require('./bookshelf');

class User extends bookshelf.Model {
  get tableName() {
    return 'users';
  }

  get hasTimestamps() {
    return true;
  }

  crops() {
    return this.hasMany('Crop', 'crop_id');
  }

  photos() {
    return this.belongsTo('Photo', 'user_id');
  }

  toMessages() {
    return this.hasMany('Message', 'to');
  }

  fromMessages() {
    return this.hasMany('Message', 'from');
  }

  sellerMessages() {
    return this.hasMany('Message', 'seller_id');
  }
}

module.exports = bookshelf.model('User', User);
