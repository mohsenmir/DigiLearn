const express = require('express');
const router = express.Router();

// middlewares 
const apiAuth = require('./middleware/apiAuth');
const apiAdmin = require('./middleware/apiAdmin');
const { uploadImage } = require('./middleware/UploadMiddleware');

// Controllers 
const { api : ControllerApi } = config.path.controllers;
const HomeController = require(`${ControllerApi}/v1/HomeController`);
const CourseController = require(`${ControllerApi}/v1/CourseController`);
const EpisodeController = require(`${ControllerApi}/v1/EpisodeController`);
const AuthController = require(`${ControllerApi}/v1/AuthController`);
const UserController = require(`${ControllerApi}/v1/UserController`);

// AdminController
const AdminCourseController = require(`${ControllerApi}/v1/admin/CourseController`);
const AdminEpisodeController = require(`${ControllerApi}/v1/admin/EpisodeController`);

router.get('/' , HomeController.index);
router.get('/version' , HomeController.version);
router.post('/login' , AuthController.login.bind(AuthController));
router.post('/register' , AuthController.register.bind(AuthController));
router.get('/user' , apiAuth , UserController.index.bind(UserController))

router.get('/courses' , CourseController.index.bind(CourseController))
router.get('/episodes/:id' , EpisodeController.single.bind(EpisodeController))



router.post('/user/image' , apiAuth , uploadImage.single('image') , UserController.uploadImage.bind(UserController));

const adminRouter = express.Router();
adminRouter.get('/courses' , AdminCourseController.index.bind(AdminCourseController));
adminRouter.get('/courses/:id' , AdminCourseController.single);
adminRouter.post('/courses' , AdminCourseController.store.bind(AdminCourseController));
adminRouter.put('/courses/:id' , AdminCourseController.update.bind(AdminCourseController));
adminRouter.delete('/courses/:id' , AdminCourseController.destroy);

adminRouter.get('/epsiodes' , AdminEpisodeController.index.bind(AdminEpisodeController));
adminRouter.get('/epsiodes/:id' , AdminEpisodeController.single.bind(AdminEpisodeController));
adminRouter.post('/epsiodes' , AdminEpisodeController.store.bind(AdminEpisodeController));
adminRouter.put('/epsiodes/:id' , AdminEpisodeController.update.bind(AdminEpisodeController));
adminRouter.delete('/epsiodes/:id' , AdminEpisodeController.destroy.bind(AdminEpisodeController));

router.use('/admin' , apiAuth , apiAdmin , adminRouter);

module.exports = router;