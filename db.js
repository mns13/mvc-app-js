const mongodb = require('mongodb');

const connectionString = "mongodb+srv://root:salami4@cluster0-ymp3h.mongodb.net/ComplexApp?retryWrites=true&w=majority";
mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true} ,function(err, client){
  module.exports = client.db();
  const app = require('./app');
  app.listen(3000);
});