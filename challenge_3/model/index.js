var db = require('../db');

module.exports = {
  user: {
    post function(params, callback) {
      var queryStr = 'insert into userdata(name, email, password, line1, line2, city, state, zip, card, exp, cvv, bzip) value(?,?,?,?,?,?,?,?,?,?,?,?)';
      db.query(queryStr, params, (err, result) => {
        callback(err, result);
      })
    }
  }
}