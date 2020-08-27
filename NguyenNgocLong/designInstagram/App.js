 
import React, { Component } from 'react';
import { View, Text, Image, Dimensions, ScrollView,TouchableOpacity, Slider } from 'react-native';
import { avatar,iconCamera,iconDirectMessage,iconWatch,yourStory
  ,story1,story2,story3,story4,iconMore,imageUpload,iconSave,addButton,iconUser,iconSlide
  ,iconNumberOfPictures,iconHeart,iconComment} from './assets/images';
const { width } = Dimensions.get('window');
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: (12 / 375) * width,
            paddingRight: (10 / 375) * width,
            paddingVertical: (9 / 375) * width,
            borderBottomWidth: (1 / 375) * width,
            borderBottomColor: '#DADBDA',
            backgroundColor:'#F9FAF9'
          }}>
          <Image
            source={iconCamera}
            style={{ width: (25 / 375) * width, height: (23 / 375) * width }}
          />

          <View style={{ flexDirection: 'row', alignItems:'center' }}>
            <Image
              source={iconWatch}
              style={{
                width: (22 / 375) * width,
                height: (25 / 375) * width,
                marginRight: (18 / 375) * width,
              }}
            />
            <Image
              source={iconDirectMessage}
              style={{ width: (24 / 375) * width, height: (21 / 375) * width, paddingTop: (4 / 375) * width}}
            />
          </View>
        </View>

        <View style={{ height: (104 / 375) * width,borderBottomWidth: (1 / 375) * width,borderBottomColor: '#DADBDA', }}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              flexDirection: 'row',
              paddingVertical: (12 / 375) * width,
              borderBottomWidth: (1 / 375) * width,
              borderBottomColor: '#DADBDA',
            }}>
              <View style={{ paddingLeft: (15 / 375) * width }}>
              <Image
                source={yourStory}
                style={{ width: (62 / 375) * width, height: (62 / 375) * width }}
              />
              <Text style={{ fontSize: (10 / 375) * width, fontFamily:'Helvetica',color:'#999999' }}>Your Story</Text>
            </View>
            <View style={{ paddingLeft: (15 / 375) * width }}>
              <Image
                source={story1}
                style={{ width: (62 / 375) * width, height: (62 / 375) * width }}
              />
              <Text style={{ fontSize: (10 / 375) * width, fontFamily:'Helvetica',color:'#262626' }}>helge_nilsen</Text>
            </View>
            <View style={{ paddingLeft: (15 / 375) * width }}>
              <Image
                source={story2}
                style={{ width: (62 / 375) * width, height: (62 / 375) * width }}
              />
              <Text style={{ fontSize: (10 / 375) * width, fontFamily:'Helvetica',color:'#262626' }}>helge_nilsen</Text>
            </View>
            <View style={{ paddingLeft: (15 / 375) * width }}>
              <Image
                source={story3}
                style={{ width: (62 / 375) * width, height: (62 / 375) * width }}
              />
              <Text style={{ fontSize: (10 / 375) * width, fontFamily:'Helvetica',color:'#262626' }}>helge_nilsen</Text>
            </View>
            <View style={{ paddingLeft: (15 / 375) * width }}>
              <Image
                source={story4}
                style={{ width: (62 / 375) * width, height: (62 / 375) * width }}
              />
              <Text style={{ fontSize: (10 / 375) * width, fontFamily:'Helvetica',color:'#262626' }}>helge_nilsen</Text>
            </View>

          </ScrollView>
        </View>

        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row',justifyContent:'space-between',padding:(12 / 375) * width }}>
            <View style={{ flexDirection: 'row'}}>
              <Image
              source={avatar}
              style={{ width: (32 / 375) * width, height: (32 / 375) * width }}
              />
              <View style ={{paddingLeft:(12 / 375) * width,paddingVertical:(1 / 375) * width}}>
                <Text
                  style={{fontFamily:'SF-Pro-Display-Bold', fontSize:14, color:'#262626'}}
                >tammyolson</Text>
                <Text
                  style={{fontFamily:'Helvetica', fontSize:11, color:'#262626'}}
                >Holand, Rotterdam</Text>
              </View>
            </View>
            <TouchableOpacity
              style={{ width: (13 / 375) * width, height: (3 / 375) * width,marginTop:(15 / 375) * width}}
              onPress = {()=>{}}
            >
              <Image
              source={iconMore}
              />
             </TouchableOpacity>
          </View>
          <View>
              <Image
              source={imageUpload}
              style = {{width: width , height:(278/ 375) * width }}
              />
              <View style={{position:"absolute", right:12, top:12, width: (43/375) * width , height:(24/ 375) * width}}>
                <Image
                  source = {iconSlide}
                />
              </View>
              <View style={{position:"absolute", left:12, bottom:12, width: (43/375) * width , height:(24/ 375) * width}}>
                <Image
                  source = {iconUser}
                />
              </View>
            </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center', paddingVertical:10,paddingHorizontal:12}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                  <TouchableOpacity
                  onPress = {()=>{}}
                  style={{ width: (24 / 375) * width, height: (22 / 375) * width,marginRight:18 }}
                >
                  <Image
                    source={iconHeart} 
                    
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress = {()=>{}}
                  style={{ width: (24 / 375) * width, height: (24 / 375) * width,marginRight:18 }}
                >
                  <Image
                    source={iconComment} 
                  
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress = {()=>{}}
                  style={{ width: (24 / 375) * width, height: (21 / 375) * width, marginRight:32 }}
                >
                  <Image
                    source={iconDirectMessage}
                    
                  />
                </TouchableOpacity>

              </View>
              <Image
                source={iconNumberOfPictures} 
                style={{ width: (50 / 375) * width, height: (6 / 375) * width}}
              />
              
            </View>
            <TouchableOpacity
              onPress = {()=>{}}
              style={{ width: (21 / 375) * width, height: (24 / 375) * width }}
            >
              <Image
                source={iconSave }
                
              />
            </TouchableOpacity>
          </View>

        </View>
      </View>
    );
  }
}

export default App;