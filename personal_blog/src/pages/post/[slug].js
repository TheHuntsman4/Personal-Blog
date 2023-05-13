import React from 'react'
import { Router, useRouter } from 'next/router';
import {getPosts,getPostDetails} from '../../services';
import { PostDetail, Categories, PostWidget, Author, Loader } from '../../components'

const PostDetails = ({post}) => {
  const router=useRouter()
  if(router.isFallback){
    return <Loader />
  }
    
  return (
    <div className='container mx-auto my-auto px-10 mb-8 '>
        <div className=''>
            <div className='col-span-1 lg:col-span-8'>
                <PostDetail post={post} />
                <Author author={post.author}/>
            </div>
        </div>
      
    </div>
  )
}

export default PostDetails
export async function getStaticProps({params}) {
    const data= await getPostDetails(params.slug)
    return {
      props: { post:data },
    };
  }
  export async function getStaticPaths(){
    const posts=await getPosts();
    return{
        paths:posts.map(({node:{slug}})=>({params:{slug}})),
        fallback:true,
    }
  }
