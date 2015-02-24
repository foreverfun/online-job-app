var mongoose = require('mongoose');

var applicantSchema = mongoose.Schema({
  name:String,
  bio:String,
  skills:String,
  years:String,
  why:String
});

var Applicant = mongoose.model('Applicant', applicantSchema);

// var applicantInstance = new Applicant({
//   name:'cj',
//   bio: 'bio section',
//   skills: 'javascript,testing',
//   years:'2',
//   why:'love it'
// });

// applicantInstance.save(function(err,result){
//   console.log(result);
// });

module.exports = Applicant;