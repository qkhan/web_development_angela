const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we are connected");
  const personSchema = new mongoose.Schema ({
    name: String,
    age: Number,
  });

  const Person = mongoose.model("Person", personSchema);

  const person = new Person( {
    name: "Mehwish",
    age: 38
  })

  person.save();

});
//db.close();
