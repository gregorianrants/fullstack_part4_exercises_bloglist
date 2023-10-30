let countBy = require('lodash/countBy')
let reduce = require('lodash/reduce')
let groupBy = require('lodash/groupBy')
let mapValues = require('lodash/mapValues')

const dummy = (blogs) => {
  blogs
  return 1
}

const totalLikes = (blogs) =>
  blogs.map(blog => blog.likes).reduce((a,b) => a+b,0)


const favouriteBlog = (blogs) => {
  if(blogs.length===0){
    return null
  }
  const likes = blogs.map(blog => blog.likes)
  const maxLikes = Math.max(...likes)
  const maxIndex = likes.indexOf(maxLikes)
  return blogs[maxIndex]
}

// const blogCount = ()=>
//     blogs.reduce((result,blog) => {
//         if(!(blog.author in result)){
//         result[blog.author]=1
//         return result
//         }
//         result[blog.author]+=1
//         return result
//     },{})







const mostBlogs = (blogs) => {
  let authorBlogCountMap =  countBy(blogs,(blog) => blog.author)
  return reduce(authorBlogCountMap,(result,value,key) =>
    value > result['blogs'] ? { blogs: value, author: key } : result
  ,{ blogs: 0, author: null })
}

const mostLikedAuthor = (blogs) => {
  let grouped = groupBy(blogs,(blog) => blog.author)
  let authorLikeCounts = mapValues(grouped,
    (authorBlogs) =>
      authorBlogs.map(blog => blog.likes)
        .reduce((a,b) => a+b,0)
  )
  return reduce(authorLikeCounts,(result,value,key) =>
    value > result['likes'] ? { likes: value, author: key } : result
  ,{ author: null, likes: 0 })

}





const forExport = {
  favouriteBlog,
  dummy,
  totalLikes,
  mostBlogs,
  mostLikedAuthor


}

module.exports = forExport