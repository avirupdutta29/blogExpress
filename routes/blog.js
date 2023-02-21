const { response } = require('express');
const express = require('express');
const { request } = require('http');
const router = express.Router();
const path = require('path');
const blogs = require('../data/blogs');

router.get('/', (request,response)=>{

    //response.sendFile(path.join(__dirname, '../templates/index.html'));
    response.render('home')

})

router.get('/blog', (request, response)=>{
    response.render('blogHome', {
        blogs: blogs
    });
})

router.get('/blogpost/:slug', (request,response)=>{

    console.log(request.params.slug);

    myBlog = blogs.filter((element)=>{

       return element.slug == request.params.slug;

    })

    console.log(myBlog);

    response.render('blogPage', {
        title: myBlog[0].title,
        content: myBlog[0].content
    })

    // response.sendFile(path.join(__dirname, '../templates/blogPage.html'));

    // blogs.forEach(element => {
    //     console.log(element.title)
    //     response.send(element.title + "_____________ "+ element.content)
    // });

})

module.exports = router;