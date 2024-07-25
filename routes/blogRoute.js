const express = require('express');

const router = express.Router();
const {
    createBlog,
    getBlogs,
    getBlog,
    deleteBlog,
    updateBlog,
    updateBlogContent,
    updateBlogTags,
    updateBlogAuthor,
    updateBlogDate,
    getBlogByName
} = require('../controllers/blogController');

router.post('/create', createBlog);
router.get('/get', getBlogs);
router.get('/get/:blogId', getBlog);
router.delete('/delete/:blogId', deleteBlog);
router.patch('/update/:blogId', updateBlog);
router.patch('/updateContent/:blogId', updateBlogContent);
router.patch('/updateTags/:blogId', updateBlogTags);
router.patch('/updateAuthor/:blogId', updateBlogAuthor);
router.patch('/updateDate/:blogId', updateBlogDate);
router.get('/getByName/:blogName', getBlogByName);
module.exports = router;