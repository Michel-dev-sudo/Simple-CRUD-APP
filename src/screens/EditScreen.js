import React,{useState, useContext} from 'react';
import {Text,View,StyleSheet,TextInput} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen =({navigation})=>{
    
    const id = navigation.getParam('id');
    const {state,editPost} = useContext(Context);
    const blogPost=state.find(
        blogPost=>blogPost.id==id
    );

   // const[title,setTitle]=useState(blogPost.title); ===title n content get fromm blogPostForm
    //const[content,setContent]=useState(blogPost.content);
        return<BlogPostForm

            initialValues={{title:blogPost.title,content:blogPost.content}}
             onSubmit={(title,content)=>{
                editPost(id,title,content,()=>navigation.navigate('Index'));
              
            }}
        /> 
};

const styles =StyleSheet.create({

});
export default EditScreen;