import React,{useReducer} from 'react';
import createDataContext from './createDataContext';

//import jsonServer from '../api/jsonServer';


    //here state is the blogPost 
const blogReducer = (state,action)=>{
    switch(action.type){
        case 'add_BlogPost':
            return [
                ...state,
                {id: Math.floor(Math.random() *999),
                //title:`Blog Post #${state.length+1} `
                title:action.payload.title,
                content:action.payload.content
            }
        ];
        case 'delete_BlogPost':
            return state.filter((blogPost)=>blogPost.id!==action.payload);
        
        case 'edit_blogPost':
            return state.map(blogPost => {
                return blogPost.id ===action.payload.id ? action.payload : blogPost
            });
        //this is done for the json server
       // case 'get_blogPost':
          //  return action.payload; 
        default:
            return state;
    }
};  
const addBlogPost = dispatch => {

    return   (title,content,callback) =>{
       //we are saving on json server so we comment dispatch if not doing on server then
       //use dispatch code and remove async
         dispatch({type:'add_BlogPost', payload:{title,content} });
       // await jsonServer.post('/blogPost',{title,content});
  
   if(callback){
    callback();
}
};
};

const deleteBlogPost = dispatch =>{

    return  id => { 
       // await jsonServer.delete(`/blogPost/${id}`);
       //for json
        dispatch({type:'delete_BlogPost',payload:id})

    };
};

//if not on server remove async and await whole line
const editPost = dispatch => {
    return  (id,title,content,callback)=>{
       // await jsonServer.put(`/blogPost/${id}`,{title,content});
        
       dispatch({ type:'edit_blogPost',payload:{id,title,content} });
        if(callback){
        callback();
    }
    };
};

//for jsonServer 
const getBlogPost = dispatch =>{
    return async()=>{
      //  const response = await jsonServer.get('/blogPost');
        dispatch({type:'get_blogPost' , payload:response.data});
    };
};

export const {Context,Provider} = createDataContext(
    blogReducer,
    {addBlogPost,deleteBlogPost,editPost}
    ,[]
    );
