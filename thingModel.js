const mongoose = require('mongoose');

const thingSchema = new mongoose.Schema({
    name: String
  });

  const Thing = mongoose.model('Thing', thingSchema);

  exports.saveThing = () => {
    let keso = new Thing({
        name: "bryh?"
    })
  
    keso.save()
  }