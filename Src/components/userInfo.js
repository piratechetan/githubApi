import React from 'react'
import {View,Text,StyleSheet,Image,ScrollView} from 'react-native'
import {Container,Header,Content,Card,CardItem,H1} from 'native-base';
import moment from 'moment';
const userInfo = ({details}) => {
return (
<ScrollView>
    
<Card style={Styles.card1}>
<Image
    source={{
        uri:details.avatar_url,
        
    }}
    style={Styles.image}
    />
    <View style={{alignItems:'center',marginTop:60}}>
    <Text style={{fontSize:25,}}>{details.name}</Text>
    <Text style={{fontSize:15,marginTop:4}}>{details.location}</Text>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:10,borderTopColor:'#eee',borderTopWidth:1}}>
    <View style={[Styles.view,{borderBottomLeftRadius:20}]}>
            <Text style={{fontSize:25,}}>{details.public_repos}</Text>
            <Text>Repos</Text>

       </View>
        <View style={Styles.view}>
            <Text style={{fontSize:25,}}>{details.followers}</Text>
            <Text>Followers</Text>
       </View>
       <View style={[Styles.view,{borderBottomRightRadius:20}]}>
          <Text style={{fontSize:20}}>{details.following}</Text>
          <Text>Following</Text>
       </View>
    
    </View>
</Card>
<Card style={Styles.otherCard}>
<View style={{marginTop:10}}>
    <Text style={{fontSize:20,fontStyle:'italic',alignSelf:'center'}}>Personal</Text>
    <View style={{flexWrap:'wrap'}}>
    <View>
     <Text style={{fontSize:15}}>Join on: {moment(details.created_at).format('DD-MM-YY')}</Text>
    </View>
    </View>
</View>
</Card>
<Card style={Styles.otherCard}>

</Card>


</ScrollView>
)}
const Styles = StyleSheet.create({
    card1:{
        height:200,
        width:'90%',
        marginLeft:20,
        marginTop:140,
        borderRadius:20,
        justifyContent:'space-between',
        
        elevation:3
    },
    otherCard:{
        height:200,
        width:'90%',
        marginLeft:20,
        marginTop:20,
        borderRadius:20,
        justifyContent:'space-between',
        elevation:3
    },
view:{
    width:'33.33%',height:50,
    alignItems:'center',
    justifyContent:'center'
    

},
image:{
    position:'absolute',
    marginTop:-50,
    borderRadius:50,
    alignSelf:'center',
    borderColor:'#4078c0',
    borderWidth:3,
    width:100,
    height:100,
}
})
export default userInfo;