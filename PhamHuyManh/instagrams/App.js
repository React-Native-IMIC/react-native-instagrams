import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import {
  photo,
  avatar,
  moreIcon,
  swiperImage,
  user,
  hear,
  image1,
} from './assets/images';
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const userDatas = [
  {
    image: avatar,
    userName: 'helge_nilsen',
  },
  {
    image: avatar,
    userName: 'helge_nilsen1',
  },
  {
    image: avatar,
    userName: 'helge_nilsen2',
  },
  {
    image: avatar,
    userName: 'helge_nilsen3',
  },
  {
    image: avatar,
    userName: 'helge_nilsen4',
  },
];

const galleryDatas = [
  {
    image: image1,
    userName: 'helge_nilsen',
  },
  {
    image: image1,
    userName: 'helge_nilsen1',
  },
  {
    image: image1,
    userName: 'helge_nilsen2',
  },
  {
    image: image1,
    userName: 'helge_nilsen3',
  },
  {
    image: image1,
    userName: 'helge_nilsen4',
  },
  {
    image: image1,
    userName: 'helge_nilsen3',
  },
  {
    image: image1,
    userName: 'helge_nilsen4',
  },
  {
    image: image1,
    userName: 'helge_nilsen3',
  },
  {
    image: image1,
    userName: 'helge_nilsen4',
  },
];

const Fonts = {
  helvetica: {
    fontFamily: 'Helvetica',
  },
  sfProBold: {
    fontFamily: 'SFProDisplay-Bold',
  },
  sfProRegular: {
    fontFamily: 'SFProDisplay-Regular',
  },
};

const Colors = {
  mainColor: '#262626',
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  renderSwiperPagination = (index, total, context) => {
    let paginationView = [];
    for (let swiperIndex = 0; swiperIndex < total; swiperIndex++) {
      paginationView.push(
        <View
          style={{
            width: 6,
            height: 6,
            borderRadius: 3,
            marginRight: 5,
            backgroundColor: swiperIndex === index ? '#3897F0' : '#efefef',
          }}
        />,
      );
    }
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 8,
          paddingBottom: 11,
          paddingHorizontal: 12,
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={hear}
            style={{ marginRight: 18, width: 24, height: 24 }}
            resizeMode="contain"
          />
          <Image
            source={hear}
            style={{ marginRight: 18, width: 24, height: 24 }}
            resizeMode="contain"
          />
          <Image
            source={hear}
            style={{ marginRight: 32, width: 24, height: 24 }}
            resizeMode="contain"
          />

          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            {paginationView}
          </View>
        </View>
        <Image source={hear} />
      </View>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 12,
            paddingRight: 10,
            paddingVertical: 9,
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: '#DADBDA',
          }}>
          <Image
            source={photo}
            style={{ width: 25, height: 23 }}
            resizeMode="contain"
          />

          <View style={{ flexDirection: 'row' }}>
            <Image
              source={photo}
              style={{ width: 22, height: 25, marginRight: 18 }}
              resizeMode="contain"
            />
            <Image
              source={photo}
              style={{ width: 24, height: 21 }}
              resizeMode="contain"
            />
          </View>
        </View>

        <View
          style={{
            paddingVertical: 12,
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: '#DADBDA',
          }}>
          <FlatList
            data={userDatas}
            renderItem={({ item, index }) => {
              return (
                <View style={{ marginLeft: 15 }}>
                  <Image
                    source={item.image}
                    style={{ width: 62, height: 62 }}
                    resizeMode="contain"
                  />
                  <Text
                    style={{
                      ...Fonts.helvetica,
                      fontSize: 10,
                      color: Colors.mainColor,
                    }}>
                    {item.userName}
                  </Text>
                </View>
              );
            }}
            keyExtractor={(item, index) => `list-user-${index}`}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 12,
            paddingHorizontal: 12,
          }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={avatar}
              style={{ width: 34, height: 34, marginRight: 9 }}
            />
            <View>
              <Text
                style={{
                  ...Fonts.sfProBold,
                  fontSize: 14,
                  color: Colors.mainColor,
                }}>
                tammyolson
              </Text>
              <Text
                style={{
                  ...Fonts.helvetica,
                  fontSize: 11,
                  color: Colors.mainColor,
                }}>
                Holland, Rotterdam
              </Text>
            </View>
          </View>

          <Image
            source={moreIcon}
            style={{ width: 13, height: 3 }}
            resizeMode="contain"
          />
        </View>

        <Swiper
          showsPagination
          loop={false}
          renderPagination={this.renderSwiperPagination}>
          <View>
            <Image
              source={swiperImage}
              style={{
                width,
                height: 278,
              }}
              resizeMode="cover"
            />
            <Image
              source={user}
              style={{ position: 'absolute', left: 12, bottom: 12 }}
            />

            <View
              style={{
                position: 'absolute',
                top: 12,
                right: 12,
                width: 43,
                height: 24,
                backgroundColor: 'rgba(38, 38, 38, 0.85)',
                borderRadius: 12,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{ color: '#fff', ...Fonts.sfProRegular, fontSize: 12 }}>
                1/9
              </Text>
            </View>
          </View>
          <View>
            <Image
              source={swiperImage}
              style={{
                width,
                height: 278,
              }}
              resizeMode="cover"
            />
            <Image
              source={user}
              style={{ position: 'absolute', left: 12, bottom: 12 }}
            />

            <View
              style={{
                position: 'absolute',
                top: 12,
                right: 12,
                width: 43,
                height: 24,
                backgroundColor: 'rgba(38, 38, 38, 0.85)',
                borderRadius: 12,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{ color: '#fff', ...Fonts.sfProRegular, fontSize: 12 }}>
                2/9
              </Text>
            </View>
          </View>
          <View>
            <Image
              source={swiperImage}
              style={{
                width,
                height: 278,
              }}
              resizeMode="cover"
            />
            <Image
              source={user}
              style={{ position: 'absolute', left: 12, bottom: 12 }}
            />

            <View
              style={{
                position: 'absolute',
                top: 12,
                right: 12,
                width: 43,
                height: 24,
                backgroundColor: 'rgba(38, 38, 38, 0.85)',
                borderRadius: 12,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{ color: '#fff', ...Fonts.sfProRegular, fontSize: 12 }}>
                2/9
              </Text>
            </View>
          </View>
          <View>
            <Image
              source={swiperImage}
              style={{
                width,
                height: 278,
              }}
              resizeMode="cover"
            />
            <Image
              source={user}
              style={{ position: 'absolute', left: 12, bottom: 12 }}
            />

            <View
              style={{
                position: 'absolute',
                top: 12,
                right: 12,
                width: 43,
                height: 24,
                backgroundColor: 'rgba(38, 38, 38, 0.85)',
                borderRadius: 12,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{ color: '#fff', ...Fonts.sfProRegular, fontSize: 12 }}>
                2/9
              </Text>
            </View>
          </View>
        </Swiper>

        <View style={{ flex: 1 }}>
          <FlatList
            data={galleryDatas}
            keyExtractor={(item, index) => `gallery-${index}`}
            numColumns={3}
            renderItem={({ item, index }) => {
              return (
                <Image
                  source={item.image}
                  style={{
                    width: (124 / 375) * width,
                    height: (124 / 375) * width,
                  }}
                />
              );
            }}
            columnWrapperStyle={{
              justifyContent: 'space-between',
              marginBottom: (2 / 375) * width,
            }}
          />
        </View>
      </View>
    );
  }
}

export default App;
