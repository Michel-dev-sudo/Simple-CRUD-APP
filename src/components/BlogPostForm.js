import React,{useState} from 'react';
import {Text,StyleSheet,View,TextInput,Button} from 'react-native';

const BlogPostForm =({onSubmit,initialValues})=>{

    const[title,setTitle] = useState(initialValues.title);
    const[content,setContent] = useState(initialValues.content);
    return (
        <View>
        <Text style={styles.label}>Enter title:</Text>
            <TextInput 
                style={styles.cont}
                value={title}
                onChangeText={setTitle}
            />
            <Text style={styles.label}>Enter content:</Text>
            <TextInput 
                style={styles.cont}
                value={content}
                onChangeText={setContent}
            />
            <Button 
            title="save Content"
            onPress={()=>onSubmit(title,content)}
            style={styles.button}
           
            />
        </View>
    );
};

BlogPostForm.defaultProps={
    initialValues:{
        title:'',
        content:''
    }
};
const styles = StyleSheet.create({
    label:{
        fontSize:18,
       
        padding:5,
        margin:5

    },
    cont:{
        fontSize:18,
        borderWidth:2,
        borderColor:'black',
        margin:5,
        marginBottom:15
    },
    button:{
        marginTop:10,
    }
});

export default BlogPostForm;