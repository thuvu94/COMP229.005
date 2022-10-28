//Create a reference eto the model
let Business = require('../models/business.model');

exports.businessList = function(req, res, next){
    Business.find((err, businessList) => {
        //console.log(businessList);
        if(err)
        {
            return console.error(err);
        }
        else{
            res.render('business/list', 
            {title: 'Business Contact List', BusinessList: businessList})
        }
    });
}