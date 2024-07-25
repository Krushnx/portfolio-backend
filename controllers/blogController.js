const Blog = require('../models/blogSchema');

async function createBlog(req, res) {
    const blog = new Blog({
        title: req.body.title,
        content: req.body.content,
        tags: req.body.tags,
        author: req.body.author}
    );
    try {
        const savedBlog = await blog.save();
        res.json(savedBlog);
    } catch (err) {
        res.json({ message: err });
    }
}   



async function getBlogs(req, res) { 
    try {
        const blogs = await Blog.find();
        res.json(blogs);
    } catch (err) {
        res.json({ message: err });
    }
}

// get blog with its name saprated by '-'
// for example : localhost:3000/blog/getByName/this-is-a-blog
async function getBlogByName(req, res) {   
    try {
        const blog = await Blog.find({ title: req.params.blogName.replace(/-/g, ' ') });
        res.json(blog);
    } catch (err) {
        res.json({ message: err });
    }
}

async function getBlog(req, res) {
    try {
        const blog = await Blog.findById(req.params.blogId);
        res.json(blog);
    } catch (err) {
        res.json({ message: err });
    }
}

async function deleteBlog(req, res) { 
    try {
        const removedBlog = await Blog.remove({ _id: req.params.blogId });
        res.json(removedBlog);
    } catch (err) {
        res.json({ message: err });
    }
}   

async function updateBlog(req, res) { 
    try {
        const updatedBlog = await Blog.updateOne(
            { _id: req.params.blogId },
            { $set: { title: req.body.title } }
        );
        res.json(updatedBlog);
    } catch (err) {
        res.json({ message: err });
    }
}
async function updateBlogContent(req, res) { 
    try {
        const updatedBlog = await Blog.updateOne(
            { _id: req.params.blogId },
            { $set: { content: req.body.content } }
        );
        res.json(updatedBlog);
    } catch (err) {
        res.json({ message: err });
    }
}
async function updateBlogTags(req, res) { 
    try {
        const updatedBlog = await Blog.updateOne(
            { _id: req.params.blogId },
            { $set: { tags: req.body.tags } }
        );
        res.json(updatedBlog);
    } catch (err) {
        res.json({ message: err });
    }
}
async function updateBlogAuthor(req, res) { 
    try {
        const updatedBlog = await Blog.updateOne(
            { _id: req.params.blogId },
            { $set: { author: req.body.author } }
        );
        res.json(updatedBlog);
    } catch (err) {
        res.json({ message: err });
    }
}

async function updateBlogDate(req, res) { 
    try {
        const updatedBlog = await Blog.updateOne(
            { _id: req.params.blogId },
            { $set: { date: req.body.date } }
        );
        res.json(updatedBlog);
    } catch (err) {
        res.json({ message: err });
    }
}   

module.exports = {
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
};