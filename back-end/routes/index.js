/**
 * ajax 服务路由集合
 */
const router = require('koa-router')({
    prefix: '/weapp'
})
const controllers = require('../controllers')

router.get('/login',controllers.login)

router.post('/add-blog',controllers.addBlog)
router.get('/search-blog',controllers.searchBlog)
router.get('/query-blog',controllers.searchMainBlog)
router.post('/del-blog',controllers.deleteBlog)
router.post('/update-blog',controllers.updateBlog)

router.get('/search-category',controllers.category)

module.exports = router