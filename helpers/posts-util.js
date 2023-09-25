import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postDirectory = path.join(process.cwd(),'content/posts');

export function getPostData(fileName) {

    const filePath = path.join(postDirectory, fileName)

    const fileContent = fs.readFileSync(filePath,'utf-8')

    const {data, content} = matter(fileContent);

    const postSlug = fileName.replace(/\.md$/, '');

    const postData = {
        slug: postSlug,
        ...data,
        content
    };

    return postData
}

export function getServerCodes() {

    const filePath = path.join(process.cwd(), 'content/posts/how-to-defi-1.md') // get the current file path of the server
     
    const fileContent = fs.readFileSync(filePath,'utf-8') // return the content of the file (text file, or markdown file)

    const detailsData = matter(fileContent) // an object contain the meta data and the content of the markdown file

    const postFiles = fs.readdirSync(postDirectory) // a list of all md file names

    const allPosts = postFiles.map( post => {
        return getPostData(post)
    })
    
    return allPosts
}

export function getAllPosts() {
    const postFiles = fs.readdirSync(postDirectory);

    const allPosts = postFiles.map( postFile => {
        return getPostData(postFile)
    })

    const sortedPosts = allPosts.sort( (postA, postB) => postA.date > postB.date ? -1 : 1);

    return sortedPosts;
}

export function getFeaturedPosts() {
    const allPosts = getAllPosts();

    const featuredPosts = allPosts.filter ( post => post.isFeatured);

    return featuredPosts;
}