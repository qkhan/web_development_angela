const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we are connected");
  const fruitSchema = new mongoose.Schema ({
    name: String,
    rating: Number,
    review: String
  });

  const Fruit = mongoose.model("Fruit", fruitSchema);

  const kiwi = new Fruit( {
    name: "Kiwi",
    rating: 7,
    review: "Very Nice"
  })

  const mango = new Fruit( {
    name: "Mango",
    rating: 8,
    review: "Sweet"
  })

  const guava = new Fruit( {
    name: "Guava",
    rating: 7.5,
    review: "Tasty"
  })

  //fruit.save();

  // Fruit.insertMany([kiwi, mango, guava], function(err) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("successfully saved all the fruits to fruitsDB")
  //   }
  // });

  Fruit.find(function(err, fruits) {
    if (err) {
      console.log(err);
    } else {
      // fruits.forEach(function(currentValue, index, arr) {
      //   console.log(currentValue);
      // });
      fruits.forEach(function(fruit) {
        console.log(fruit.name);
      });

    }
  });


});
//db.close();
