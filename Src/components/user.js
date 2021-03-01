import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet,ScrollView, ProgressViewIOSComponent} from 'react-native'
import Login from './login';
import UserInfo from './userInfo';
import {Button,Spinner} from 'native-base';
import Axios from 'axios';
const User = ({route,navigation}) => {
  const {data} = route.params;
  const URL = `https://api.github.com/users/${data}`
  const[details,setDetails] = useState("")

  const fetchInfo = async () => {
    try {
      const Info = await Axios.get(URL)
      const details = Info.data;
      
      setDetails(details)
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(()=>{
    fetchInfo()
  },[])
  if (!details) {
    return(
      <View style={Styles.container}>
        <Spinner color='red' />
      </View>
    ) 
  }
  else{
    return (
      <View style={Styles.container}>
      <UserInfo details={details} />
      </View>
    )
  };
}
const Styles = StyleSheet.create({
    container:{
        flex:1,
      },
})
export default User;