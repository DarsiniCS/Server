const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
coverimg: {
  type: String,
  required: true,
},
link: {
  type: String,
  required: false,
},
git: {
  type: String,
  required: true,
}
});

const Projects = mongoose.model("Projects", projectSchema);
module.exports = Projects;