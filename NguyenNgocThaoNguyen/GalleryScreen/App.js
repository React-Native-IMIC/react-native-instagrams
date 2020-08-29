import React, { Component } from 'react';
import { View, Text, Image, Dimensions, ScrollView } from 'react-native';
import { shape, more, combine, human, image1, image2, image3,
  image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,image15,
  home, search, hear, image, rectangle } from './assets/images';

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
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 19, paddingTop: 16 }}>
            <Image source={shape}
              style={{ width: 10 / 375 * width, height: 17 / 375 * width, }}
              resizeMode="contain"
            />
            <Text style={{ paddingLeft: 100/ 375 * width, ...Fonts.bold, fontSize: 18/ 375 * width, fontWeight: 'bold' }} >antoniagarsia</Text>
            <Image source={more}
              style={{ width: 13 / 375 * width, height: 3 / 375 * width, paddingHorizontal: 89 / 375 * width, }}
              resizeMode="contain"
            />
          </View>
          <View style={{ flexDirection: 'row', paddingTop: 13, paddingBottom: 13, borderBottomWidth: 1, borderColor: '#DADBDA' }}>
            <Image
              source={combine}
              style={{ width: 23, height: 23, marginLeft: 85, marginRight: 180 }}
              resizeMode="contain"
            />

            <Image
              source={human}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"

            />

          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image source={image1}
              style={{ width: 124 / 375 * width, height: 124 / 375 * width }}
            />
            <Image source={image2}
              style={{ width: 124 / 375 * width, height: 124 / 375 * width }}
            />
            <Image source={image3}
              style={{ width: 124 / 375 * width, height: 124 / 375 * width }}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image source={image4}
              style={{ width: 124 / 375 * width, height: 124 / 375 * width }}
            />
            <Image source={image5}
              style={{ width: 124 / 375 * width, height: 124 / 375 * width }}
            />
            <Image source={image6}
              style={{ width: 124 / 375 * width, height: 124 / 375 * width }}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image source={image7}
              style={{ width: 124 / 375 * width, height: 124 / 375 * width }}
            />
            <Image source={image8}
              style={{ width: 124 / 375 * width, height: 124 / 375 * width }}
            />
            <Image source={image9}
              style={{ width: 124 / 375 * width, height: 124 / 375 * width }}
            />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <Image source={image10}
              style={{ width: 124 / 375 * width, height: 124 / 375 * width }}
            />
            <Image source={image11}
              style={{ width: 124 / 375 * width, height: 124 / 375 * width }}
            />
            <Image source={image12}
              style={{ width: 124 / 375 * width, height: 124 / 375 * width }}
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Image source={image13}
              style={{ width: 124 / 375 * width, height: 124 / 375 * width }}
            />
            <Image source={image14}
              style={{ width: 124 / 375 * width, height: 124 / 375 * width }}
            />
            <Image source={image15}
              style={{ width: 124 / 375 * width, height: 124 / 375 * width }}
            />
          </View>
          <View style={{ flexDirection: 'row', paddingLeft: 18, paddingRight: 55, paddingTop: 13, }}>
            <Image source={home}
              style={{ width: 23 / 375 * width, height: 24 / 375 * width }} resizeMode='contain' />
            <View style={{ flexDirection: 'row', paddingRight: 55, paddingTop: 13 }}></View>
            <Image source={search}
              style={{ width: 23 / 375 * width, height: 24 / 375 * width }} resizeMode='contain' />
            <View style={{ flexDirection: 'row', paddingRight: 55, paddingTop: 13 }}></View>
            <Image source={combine}
              style={{ width: 23 / 375 * width, height: 24 / 375 * width }} resizeMode='contain' />
            <View style={{ flexDirection: 'row', paddingRight: 55, paddingTop: 13 }}></View>
            <Image source={hear}
              style={{ width: 23 / 375 * width, height: 24 / 375 * width }} resizeMode='contain' />
            <View style={{ flexDirection: 'row', paddingRight: 55, paddingTop: 13 }}></View>
            <Image source={image}
              style={{ width: 23 / 375 * width, height: 24 / 375 * width }} resizeMode='contain' />
          </View>
          <View style={{alignItems: 'center', paddingTop: 32, paddingBottom:9 }}>
              <Image source={rectangle}
                style={{ width: 134 / 375 * width, height: 5 / 375 * width }}/>
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default App