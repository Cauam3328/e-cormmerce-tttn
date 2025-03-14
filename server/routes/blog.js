const router = require('express').Router()
const {verifyAccessToken, isAdmin} = require('../middlewares/verifyToken')
const ctrls = require('../controllers/blog')
const uploader = require('../config/cloudinary.config')

router.post('/', [verifyAccessToken,isAdmin], ctrls.createNewBlog)
router.get('/', ctrls.getBlogs)
router.get('/getone/:bid', ctrls.getBlog)
router.put('/like/:bid', [verifyAccessToken], ctrls.likeBlog)
router.put('/dislike/:bid', [verifyAccessToken], ctrls.dislikeBlog)
router.put('/:bid', [verifyAccessToken,isAdmin], ctrls.updateBlog)
router.put('/image/:bid', [verifyAccessToken,isAdmin], uploader.single('image'), ctrls.uploadImagesBlog)
router.delete('/:bid', [verifyAccessToken,isAdmin], ctrls.deleteBlog)



module.exports = router