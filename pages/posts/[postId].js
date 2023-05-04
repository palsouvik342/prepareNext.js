import React from 'react'

const Post = ({data}) => {
  return (
    <div>
      <p>{data.id}{data.title}</p>
      <p>{data.body}</p>
    </div>
  )
}

export default Post

export async function getStaticPaths(){
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await resp.json();
  const paths = data.slice(0,3).map((actData, index) => {
    return {
      params: {postId : `${actData.id}`}
    }
  })
  console.log(paths)
  return {
    // paths: [
    //   {
    //     params: {postId : "1"}
    //   },
    //   {
    //     params: {postId : "2"}
    //   },
    //   {
    //     params: {postId : "3"}
    //   }
    // ],
    paths,
    fallback: false
  }
}

export async function getStaticProps(context){
  let postId = context.params.postId;
  const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const data = await resp.json();
  return {
    props: {data}
  }
}