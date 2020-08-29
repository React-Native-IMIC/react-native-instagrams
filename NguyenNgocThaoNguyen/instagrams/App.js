import React, { Component } from 'react';
import { View, Image, Text, Dimensions, ScrollView } from 'react-native';
import { photo, TV, send, avatar, avatar2, more, image, slide, fill1, combine, fill2, fill346, dots, users, heart, rectangle,
  hear,Image2,search,home,create,rectangle24,
  stories,stories2,stories3,stories4, oval } from "./assets/images"

const Fonts = {
  bold: {
    fontFamily: 'SFProDisplay-Bold'
  },
  semibold: {
    fontFamily: 'SF Pro Display Semibold'
  },
  regular: {
    fontFamily: 'SFProDisplay-Regular'
  },
  normal: {
    fontFamily: 'Helvetica'
  }

}
const { width } = Dimensions.get('window')
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView>
      <View style={{ flex: 1, }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 12,
            paddingRight: 10,
            paddingVertical: 9,
            borderBottomWidth: 1,
            borderBottomColor: '#DADBDA'
          }}>

          <Image
            source={photo}
            style={{
              width: 23 / 375 * width, height: 25 / 375 * width,
            }}
            resizeMode="contain"
          />
          <View style={{ flexDirection: 'row', }}>
            <Image
              source={TV}
              style={{
                width: 23 / 375 * width,
                height: 25 / 375 * width,
                marginRight: 18,

              }}
              resizeMode="contain"
            />

            <Image
              source={send}
              style={{
                width: 23 / 375 * width,
                height: 25 / 375 * width,
                marginRight: 10,
              }}
              resizeMode="contain"
            />
            <View>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 12, borderBottomWidth: 1, borderBottomColor: '#DADBDA', paddingTop: 15, paddingHorizontal: 15, }} >
          <View style={{ alignItems: 'center' }}>
            <Image source={stories4}
              style={{
                width: 62 / 375 * width,
                height: 62 / 375 * width,

              }}
            />
            <Text style={{ fontSize: 10 / 375 * width, }}>helge_nilsen</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image source={avatar}
              style={{
                width: 62 / 375 * width,
                height: 62 / 375 * width
              }}
            />
            <Text style={{ fontSize: 10 / 375 * width, }}>helge_nilsen</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image source={stories}
              style={{
                width: 62 / 375 * width,
                height: 62 / 375 * width
              }}
            />
            <Text style={{ fontSize: 10 / 375 * width, }}>helge_nilsen</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image source={stories2}
              style={{
                width: 62 / 375 * width,
                height: 62 / 375 * width
              }}
            />
            <Text style={{ fontSize: 10 / 375 * width, }}>helge_nilsen</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image source={stories3}
              style={{
                width: 62 / 375 * width,
                height: 62 / 375 * width
              }}
            />
            <Text style={{ fontSize: 10 / 375 * width, }}>helge_nilsen</Text>
          </View>
        </View>
        <View style={{ paddingTop: 13.5, flexDirection: 'row' }}>
          <Image source={avatar2}
            style={{
              width: 34 / 375 * width,
              height: 34 / 375 * width
            }}
          />
          <View style={{ flexDirection: 'column', paddingHorizontal: 9 }}>
            <Text style={{ ...Fonts.bold, fontSize: 14,fontWeight:'bold', color: '#262626' }} >tammyolson</Text>
            <Text style={{ ...Fonts.normal, fontSize: 11, color: '#262626' }}>Holland, Rotterdam</Text>
            <View style={{ flexDirection: 'row', paddingLeft: 338, paddingRight: 12, alignItems: 'center' }}>
              <Image source={more}
                style={{ width: 13 / 375 * width, height: 3 / 375 * width }} />
            </View>
          </View>
        </View>
        <View style={{ paddingTop: 12 }}>
          <Image source={image}
            style={{ width: 375 / 375 * width, height: 278 / 375 * width }}
            resizeMode="contain"
          />
          <View style={{paddingTop:9, paddingLeft:12, flexDirection:'row',}}>
            <Image source={fill1} style={{width:24/ 375 * width, height:22/ 375 * width,  }}
            resizeMode="contain"
            />

            <View style={{flexDirection:'row',paddingHorizontal:18/ 375 * width, }}>
            <Image source={fill346} style={{width:24/ 375 * width, height:24/ 375 * width,  }}
            resizeMode="contain"
            />

            <View style={{flexDirection:'row',paddingHorizontal:18/ 375 * width, }}>
            <Image source={combine} style={{width:24/ 375 * width, height:21/ 375 * width,  }}
            resizeMode="contain"
            />
            <View style={{flexDirection:'row',paddingHorizontal:32/ 375 * width,alignItems:'center'}}>
            <Image source={dots} style={{width:50/ 375 * width, height:6/ 375 * width,  }}
            resizeMode="contain"
            />
            <View style={{flexDirection:'row',paddingHorizontal:140,paddingRight:12/ 375 * width }}>
            <Image source={fill2} style={{width:21/ 375 * width, height:24/ 375 * width,  }}
            resizeMode="contain"
            />
            
            </View>
            </View>
            </View>
            </View>
          </View>
        </View>
        <View style={{paddingTop:13, paddingLeft:12, flexDirection:'row', alignItems:'center'}}>
          <Image source={users}
          style={{width: 29, height:13}}/>
          <View style={{flexDirection:'row',paddingLeft:6}}>

          <Text  style={{...Fonts.regular,fontSize:13}} > Liked by 
          <Text  style={{...Fonts.semibold,fontSize:13, fontWeight:'bold'}}> KnE 
          <Text  style={{...Fonts.regular,fontSize:13}}> and 
          <Text  style={{...Fonts.semibold,fontSize:13, fontWeight:'bold'}}> 115 321 others  
           </Text>
          </Text>
          </Text>
          </Text>
          </View>
        </View>
        <View style={{paddingLeft:12, paddingTop:12, flexDirection:'row' }}>
          <Text style={{...Fonts.bold, fontWeight:'bold',fontSize:13}}>tammyolson</Text>
          <Text style={{...Fonts.bold, fontSize:13,paddingLeft:3 ,color:'#003569'}}>#amazing</Text>
          <Text style={{...Fonts.bold, fontSize:13, color:'#003569'}}>#travel</Text>
          <Text style={{...Fonts.bold, fontSize:13, color:'#003569'}}>#instagram</Text>
         
        </View>
        <View style={{flexDirection:'column',paddingLeft:12, }}>
            <Text style={{...Fonts.bold, fontSize:13, color:'#003569'}}>Look nice!</Text>
         
          </View>
          <View style={{paddingLeft:12, paddingTop:12, flexDirection:'row',}}>
          <Text style={{...Fonts.bold, fontWeight:'bold',fontSize:13}}>tammyolson</Text>
          <View style={{paddingHorizontal: 3, flexDirection:'row',alignItems:'center',  }}>
          <Text style={{...Fonts.regular, fontSize:13, }}>Banjo tote bag bicycle rights, High Life </Text>
          <Image source={heart}
            style={{width:11, height:9,}}/>
          </View>
 
         

        </View>
      <View style={{paddingLeft:12 }}>
      <Text style={{...Fonts.regular, fontSize:13, }}>satorial cray carft beer whatever street srt fap.</Text>
      </View>
     <View style={{flexDirection:'row',paddingLeft:22, paddingTop: 11, alignItems:'center',borderBottomWidth: 1, borderBottomColor: '#DADBDA'  }}>
       <Image source={rectangle}
       style={{width: 2/ 375 * width, height:42/ 375 * width }}
       />
       <View style={{flexDirection:'column', paddingLeft: 10}}>
       <Text>Hashtag typewriter banh mi, squid keffiyer High life </Text>
       <Text>Brooklyn twee craft beer tousled chillwave. PBR&B</Text>
       <Text>selfies chillwave </Text>
       </View>
     </View>
    <View style={{ flexDirection:'row', paddingTop:13/ 375 * width, }}>
      <View style={{paddingLeft:18/ 375 * width, paddingRight:55}}>
      <Image source={home}
      style={{width: 23/ 375 * width, height: 24/ 375 * width}}
      resizeMode="contain"/>
      
      </View >
      <View style={{ paddingRight:55/ 375 * width}}>
      <Image source={search}
      style={{width: 22/ 375 * width, height: 22/ 375 * width}}
      resizeMode="contain"/>
      </View>
      <View style={{ paddingRight:55/ 375 * width}}>
      <Image source={create}
      style={{width: 25/ 375 * width, height: 25/ 375 * width}}
      resizeMode="contain"/>
      </View>
      <View style={{ paddingRight:55,flexDirection:'column', alignItems:'center'}}>
      <Image source={hear}
      style={{width: 24/ 375 * width, height: 22/ 375 * width}}
      resizeMode="contain"/>
      <Image source={oval}
      style={{width: 5/ 375 * width, height: 5/ 375 * width, marginTop: 9}}
      resizeMode="contain"/>
      </View>
      <View style={{ paddingRight:55}}>
      <Image source={Image2}
      style={{width: 24/ 375 * width, height: 23/ 375 * width}}
      resizeMode="contain"/>
      </View>
    </View>
     <View style={{flexDirection:'column', paddingTop: 32,paddingBottom:9 ,alignItems:'center', borderBottomWidth: 1, borderBottomColor: '#DADBDA' }}>
<Image source={rectangle24}
style={{width:134, height: 5}}/>

     </View>
      </View>
      </ScrollView>
    )
  }

}

export default App;

