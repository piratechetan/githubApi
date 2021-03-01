import React ,{useState} from 'react'
import {View,Text,StyleSheet,Image, TouchableOpacity} from 'react-native'
import {Container,Card,CardItem,Input,Form,Item,H2,Button} from 'native-base';
import githublogo from '../assets/github.png';


const Login = ({navigation}) => {
const [Username,setUsername] = useState('')

return (

<Container style={styles.container}>
    <Card style={styles.card}>
      <Image source={githublogo} style={styles.image}/>
      <H2 style={styles.text}>Github Username:</H2>
      <Item rounded style={{borderColor:"#FFF"}}>
       <Input 
       placeholder={"Enter your username"}
       placeholderTextColor={"#758283"}
       style={{color:'#FFF'}}
       value={Username}
       onChangeText={(text) => setUsername(text)}
       />
      </Item>
      <TouchableOpacity onPress={() => navigation.navigate('User',{data:Username})}>
          <View style={styles.button}>
          <Text>Next</Text>
          </View>
        
      </TouchableOpacity>
    </Card>
    </Container>

)}
const styles = StyleSheet.create({
    container:{
        flex:1,
        
        justifyContent:'center',
        alignItems:'center'
      },
      text:{
       color:'#FFF',
       marginHorizontal:10,
       marginTop:60,
       
       
      },
      card:{
        width: 350,
        height:350,
        justifyContent:'space-around',
        backgroundColor: '#383CC1',
        borderColor: '#383CC1',
        borderWidth: 2,
        borderRadius:12,
        
       
    
      },
      image:{
        height:150,
        width:150,
        position:'absolute',
        marginTop:-120,
        alignSelf:'center'
      },
      button:{
        alignSelf:'center',
        alignItems:'center',
        width:90,
        height:50,
        justifyContent:'center',
        backgroundColor:'#FFF',
        borderRadius:13
      }
})
export default Login;