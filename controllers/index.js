var Applicant = require('../models/applicant.js');

var indexController = {
  index: function(req, res) {
      res.render('index');
  },

  applicants:function(req, res) {
    Applicant.find({}, function(err,result){
      res.render('applicants', {
        applicants:result
      });
    });
  },

  applicant:function(req, res) {
    console.log(req.body);
    
    //var submittedData = req.body;

    var newApplicant = new Applicant({
      name: req.body.name,
      bio: req.body.bio,
      skills:req.body.skills,
      years: req.body.years,
      why:req.body.why
    });

    newApplicant.save();
    
    //res.redirect('/success');
    res.redirect('applicants');
  },

  success:function(req, res) {
    res.render('success');
  }

};

module.exports = indexController;