 
import React, { Component } from 'react';
import { View, Text, Image, Dimensions, ScrollView,TouchableOpacity, Slider, Linking } from 'react-native';
import { avatar,iconCamera,iconDirectMessage,iconWatch,yourStory
  ,story1,story2,story3,story4,iconMore,imageUpload,iconSave,addButton,iconUser,iconSlide
  ,iconNumberOfPictures,iconHeart,iconComment,iconBlackHeart, iconCreatePost, iconHome,iconSearch,
  imageUser, likeComment, likedUsers,popupLikeComment,rectangle,rectangleBot,belowHeart } from './assets/images';
const { width } = Dimensions.get('window');
class Galery extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
          <ScrollView>
          </ScrollView>
          <View style={{paddingVertical: (12/ 375) * width, backgroundColor:'#F9FAF9'}}>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Image
                  source = {iconHome}
                  style ={{width:(23 / 375)* width, height: (24 / 375)* width,marginLeft:(18/375)*width}}
                />
                 <Image
                  source = {iconSearch}
                  style ={{width:(22 / 375)* width, height: (22 / 375)* width}}
                />
                <Image
                  source = {iconCreatePost}
                  style ={{width:(25 / 375)* width, height: (25 / 375)* width}}
                />
                <View style={{alignItems:'center'}}>
                    <Image
                    source = {popupLikeComment}
                    style={{position:"absolute", bottom:(53 / 375) * width, width: (80/375) * width , height:(43/ 375) * width}}
                  />
                  <Image
                    source = {iconBlackHeart}
                    style ={{width:(24 / 375)* width, height: (22 / 375)* width}}
                  />
                  <Image
                    source = {belowHeart}
                    style ={{width:(5 / 375)* width, height: (5 / 375)* width, marginTop: (9/ 375)* width}}
                  />
                </View>
                <Image
                  source = {imageUser}
                  style ={{width:(24 / 375)* width, height: (23 / 375)* width, marginRight:(21/375)*width}}
                />

              </View>
              <View style={{alignItems:'center'}} >
                <Image
                  source={rectangleBot}
                  style={{width: (134 / 375)*width, height: (5 / 375)* width,marginBottom:(9 / 375) *width, marginTop:(20 / 375) *width,borderRadius:(100/375)*width }}
                />
              </View>
            </View>
      </View>
    );
  }
}
    export default Galery;
     