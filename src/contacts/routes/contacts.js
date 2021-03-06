var express = require('express');
var router = express.Router();
var db_array= [];
var buff = new Object();
var index_2_mod;
var count  = 0;
var fs = require('fs');
var getContactFileName = function(id) {

    // We assume contacts are stored under data sub-folder
    return "E:\mrnd-nodejs-master-2\spec\tests\data\\" + id + "-Contact.json";

}
/* GET contacts */
router.get('/:id', function (req, res, next) {
    var id = req.params.id;
    res.status(200);
    res.send(db_array[id]); 
    });

router.post('/', function(req, res, next) {
    db_array.push(req.body);
    res.status(200);
    var id = db_array.length-1+"";
    var fp = getContactFileName(id);
    fs.
});

router.put('/:id', function (req, res, next)
{
    //BRUTE FORCE SOLUTION
    var id = req.params.id;
    
    var key_array = Object.keys(req.body);
    for(var i in key_array)
    {
            db_array[id][key_array[i]] = req.body[key_array[i]];
    }
    res.status(200);
    res.send(db_array[id]);
   
});

router.post('/:contact_id', function(req, res, next)
{
    var id = req.params.contact_id;
    var new_keys = Object.keys(req.body);
    for (var i in new_keys)
    {
        db_array[id][new_keys[i]] = req.body[new_keys[i]];
    }
    res.status(200);
    res.send(db_array[id]);
});

router.get('/:contact_id', function(req, res, next){
    var id = req.params.contact_id;
    res.status(200);
    res.send(db_array[id]);
});




module.exports = router;
