const express = require('express');
const router = express.Router();


router.get('/courses' , (req , res) => {
    res.json({
        data : [
            {
                title : 'course 1',
                content : 'this is course 1'
            },
            {
                title : 'course 2',
                content : 'this is course 2'                
            }
        ]
    })
});


module.exports = router;