const Controller = require(`${config.path.controller}/Controller`);
const CourseTransform = require(`${config.path.transform}/v1/CourseTransform`);

module.exports = new class CourseController extends Controller {
    index(req , res) {
        // this.model.Course.find({}).populate('episodes').exec((err , courses) => {
        //     if(err) throw err;
    
        //     if(courses) {
        //         return res.json({
        //             data : new CourseTransform().withEpsiodes().transformCollection(courses),
        //             success : true
        //         });
        //     }

        //     res.json({
        //         message : 'Courses empty',
        //         success : false
        //     })
        // })
        const page = req.query.page || 1
        this.model.Course.paginate({} , { page , limit : 2 , populate : ['episodes']})
        .then(result => {
            if(result) {
                return res.json({
                    // data : {
                    //     items : new CourseTransform().transformCollection(result.docs),
                    //     total : result.total,
                    //     limit : result.limit,
                    //     page : result.page,
                    //     pages : result.pages
                    // },
                    data : new CourseTransform().withPaginate().transformCollection(result),
                    success : true
                });
            }

            res.json({
                message : 'Courses empty',
                success : false
            })
        })
        .catch(err => console.log(err));
    }
}