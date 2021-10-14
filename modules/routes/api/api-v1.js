const express = require('express');
const router = express.Router();

router.get('/' , (req , res) => {
    res.json('Welcome to Api');    
});
router.get('/courses' , (req , res) => {
    res.json({
        data : [
            {
                title : 'course 1',
                body : 'this is course 1'
            },
            {
                title : 'course 2',
                body : 'this is course 2'                
            }
        ]
    })
})



module.exports = router;