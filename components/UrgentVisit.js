import React, { Component } from 'react';
import { Text, View, StyleSheet,TouchableOpacity ,Picker,Alert,FlatList,TouchableHighlight,Image ,ImageBackground} from 'react-native';
import { Constants } from 'expo';
import DatePicker from 'react-native-datepicker'
import { StackNavigator } from 'react-navigation';
import * as ReactNavigation from 'react-navigation'
// You can import from local files
import Doctormenu from './Doctormenu.js';
// or any pure javascript modules available in npm
import { Card,Button,Fab,Icon } from 'native-base'; // Version can be specified in package.json
import FindoctorRating from './FindoctorRating.js';
import styles from '/style.js'
import DashBoard from './DashBoard.js'
import CardFlip from 'react-native-card-flip';
export default class UrgentVisit extends Component {
   constructor(props){
    super(props)
    this.state = {
     // datetime:"2016-05-15"
     language:'Dermotologist',
      }
  }
   	onURGENT() {
    this.props.navigation.navigate('Doctormenu');
    //Alert.alert('You have selected UrgentRequest');
  }
  oniconbl()
  {
    this.props.navigation.navigate('DashBoard');
  }
  onicontl() {
    //.props.navigation.navigate('FindoctorRating');
    Alert.alert('Select the type of doctor you need from the options available and tap find a doctor to see the list of specialists od selected type');
  }
  render() {
    return (
      <View style={styles.container}>
        <CardFlip style={[styles.buttonContainer,{alignSelf:'center'}]} ref={(card) => this.card = card} >
     
     <ImageBackground source={require('./BackgroundImg.png')}
      style={styles.backgroundImage} >
          <TouchableHighlight style={[styles.cardButton, styles.topLeft]}>
            <Image
              source={require('./left.png')}
              style={styles.buttonIconTopleft}
            />
          </TouchableHighlight>
          <TouchableHighlight style={[styles.cardButton, styles.topRight]}
           onPress={() => this.card.flip()}>
            <Image
              source={require('./info.png')}
              style={styles.buttonIconTopRight}
            />
          </TouchableHighlight>

          <View>
          <View style={styles.innercontainer}>
          <Text> {''}</Text>
          <Text> {''}</Text>
            
          <Text style={styles.paragraph}>
             
        What type of doctor 
        </Text>
        <Text> {''} </Text>
         <Text style={styles.paragraph}>
             
        do you need now?
        </Text>
         <Text> {''}</Text>
          <Text> {''}</Text>
           <View style={{height:200,width:'100%'}}>
               <Picker
  selectedValue={this.state.language}
  style={{  width: 300 }}
  onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
  <Picker.Item label="Allergists" value="1Hour Before" />
  <Picker.Item label="Anesthesiologists" value="3OUR Before" />
  <Picker.Item label="Cardiologists" value="4HOUR Before" />
  <Picker.Item label="Dermatologists" value="5HOUR Before" />
  <Picker.Item label="Gastroenterologists" value="6HOUR Before" />
  <Picker.Item label="Gastroenterologists" value="7HOUR Before" />
  <Picker.Item label="Hematologists" value="8HOUR Before" />
  <Picker.Item label="Osteopaths" value="9HOUR Before" />
  <Picker.Item label="Pediatricians" value="10HOUR Before" />
  
  <Picker.Item label="Radiologists" value="11HOUR Before" />
  

  
</Picker>
</View>
         <Text> {''}</Text>
         
         <Button block rounded
          //title={'URGENT'}
          style={{alignItems: 'center',width:300,height:60,backgroundColor:'#43266E',alignSelf:'center'}}
           onPress={this.onURGENT.bind(this)}
        >
		<Text style={{color:'#fff',textAlign:'center'}}>    FIND  A DOCTOR  </Text>
		</Button> 
            </View>
</View>
         <TouchableHighlight style={[styles.cardButton, styles.bottomLeft]} onPress={this.oniconbl.bind(this)}>
            <Image
              source={require('./bleft.png')}
              style={styles.buttonIconBottomleft}
            />
          </TouchableHighlight>
       <TouchableOpacity activeOpacity={1} style={[styles.cardButton, styles.bottomRight]}  onPress={() => this.card.flip()}>
            <Image
              source={require('./bright.png')}
              style={styles.buttonIconBottomRight}
            />
          </TouchableOpacity>
         </ImageBackground>
       
       
                 <ImageBackground source={require('./BackgroundImg.png')}
                   style={styles.backgroundImage} >
          <TouchableHighlight style={[styles.cardButton, styles.topLeft]}>
              <Image
                source={require('./left.png')}
                style={styles.buttonIconTopleft}
              />
          </TouchableHighlight>
          <TouchableHighlight style={[styles.cardButton, styles.topRight]}
           onPress={() => this.card.flip()}>
            <Image
              source={require('./info.png')}
              style={styles.buttonIconTopRight}
            />
          </TouchableHighlight>
          <Text> {''}</Text>
          <View style={[styles.innercontainer,{alignItems:'center'}]}>
            <Text >{' '} </Text>
             <Text >{' '} </Text>
              <Text >{' '} </Text>
               <Text >{' '} </Text>
             <Text >{' '} </Text>
              <Text >{' '} </Text>
               <Text >{' '} </Text>
             <Text >{' '} </Text>
              <Text >{' '} </Text>
            <Text
              style={{
                textAlign: 'center',
           
                fontSize: 25,
                color: '#000',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
			      Select the type of doctor you need from the options available and tap find a doctor to see the list of specialists of selected type  
            </Text>
         
          </View>

          <TouchableHighlight style={[styles.cardButton, styles.bottomLeft]}>
            <Image
              source={require('./bleft.png')}
              style={styles.buttonIconBottomleft}
            />
         
          </TouchableHighlight>
            <TouchableOpacity activeOpacity={1} style={[styles.cardButton, styles.bottomRight]}  onPress={() => this.card.flip()}>
         
            <Image
              source={require('./bright.png')}
              style={styles.buttonIconBottomRight}
            />
         
          </TouchableOpacity>
         </ImageBackground>
       
        
         </CardFlip> 
        </View>
      
    );
  }
}


