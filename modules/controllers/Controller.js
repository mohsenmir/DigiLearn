// Model
const Course = require(`${config.path.model}/course`);
const Episode = require(`${config.path.model}/episode`);
const User = require(`${config.path.model}/user`);

module.exports = class Controller {
    constructor() {
        this.model = { Course , Episode , User }
    }

    showValidationErrors(req , res , callback) {
        let errors = req.validationErrors();
        if(errors) {
            res.status(422).json({
                message : errors.map(error => {
                    return {
                        'field' : error.param,
                        'message' : error.msg
                    }
                }),
                success : false
            });
            return true;
        }
        return false
    }


    escapeAndTrim(req , items) {
        items.split(' ').forEach(item => {
            req.sanitize(item).escape();
            req.sanitize(item).trim();            
        });
    }
}