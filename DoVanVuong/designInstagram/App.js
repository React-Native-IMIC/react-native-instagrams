import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import { photoIMG, igtvIMG, messageIMG, myStoryIMG, avatarIMG, moreIcon, postIMG, userIconIMG, heartIMG, commentIMG, saveIMG, homeIMG, searchIMG, createPostIMG, actionHeartIMG, cmttIMG, heartttIMG } from './assets/images';
import Carousel, { Pagination } from 'react-native-snap-carousel';
const { width } = Dimensions.get('window');

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSlide: 0,
            entries: [
                {
                    image: postIMG
                },
                {
                    image: postIMG
                },
                {
                    image: postIMG
                },
                {
                    image: postIMG
                },
                {
                    image: postIMG
                },
            ]
        }
    }

    _renderItem = ({ item, index }) => {
        return (
            <View style={{
                borderRadius: 5,
                width: width
            }}>
                <Image
                    style={{
                        width: width,
                    }}
                    source={item.image} />
            </View>
        );
    }

    pagination = () => {
        const { entries, activeSlide } = this.state;
        return (
            <View
                style={{
                    flexDirection: 'row',
                    paddingRight: 12,
                    paddingLeft: 12
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        flex: 1,
                        justifyContent: 'space-between'
                    }}
                >
                    <Image style={{ width: 24, height: 22, }} source={heartIMG} />
                    <Image style={{ width: 24, height: 24 }} source={commentIMG} />
                    <Image style={{ width: 24, height: 22 }} source={messageIMG} />
                </View>
                <View style={{ flex: 2 }}>
                    <Pagination
                        dotsLength={entries.length}
                        activeDotIndex={activeSlide}
                        dotStyle={{
                            marginHorizontal: 0,
                            backgroundColor: '#3897F0'
                        }}
                        inactiveDotStyle={{
                            backgroundColor: '#EFEFEF'
                        }}
                        inactiveDotOpacity={1}
                        inactiveDotScale={0.6}
                    />
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                    <Image style={{ width: 21, height: 24, }} source={saveIMG} />
                </View>
            </View>
        );
    }

    render() {
        return (
            <View style={{ flex: 1 }} >
                {/* header */}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingTop: 54 * width / 375,
                    paddingLeft: 12 * width / 375,
                    paddingRight: 12 * width / 375,
                    paddingBottom: 12 * width / 375,
                    backgroundColor: '#F9FAF9'
                }}
                >
                    <Image
                        style={{
                            width: 25 * width / 375,
                            height: 23 * width / 375,
                            alignSelf: 'flex-end'
                        }}
                        source={photoIMG}
                    />
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            style={{
                                width: 21 * width / 375,
                                height: 23 * width / 375,
                                marginRight: 18 * width / 375

                            }}
                            source={igtvIMG}
                        />
                        <Image
                            style={{
                                width: 25 * width / 375,
                                height: 23 * width / 375,

                            }}
                            source={messageIMG}
                        />
                    </View>
                </View>
                {/* stories */}
                <View
                    style={{
                        paddingVertical: 13 * width / 375,
                        borderTopWidth: 1 * width / 375,
                        borderColor: '#DADBDA',
                        borderBottomWidth: 1 * width / 375
                    }}
                >
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            height: 80 * width / 375
                        }}
                    >
                        <View
                            style={{
                                marginLeft: 15 * width / 375,
                                justifyContent: 'space-between'
                            }}
                        >
                            <Image
                                style={{
                                    width: 56 * width / 375,
                                    height: 56 * width / 375
                                }}
                                source={myStoryIMG}
                            />
                            <Text
                                style={{
                                    fontSize: 10 * width / 375,
                                    color: '#999999'
                                }}
                            >Your Story</Text>
                        </View>
                        <View
                            style={{
                                marginLeft: 15 * width / 375,
                                justifyContent: 'space-between'
                            }}
                        >
                            <Image
                                style={{
                                    width: 62 * width / 375,
                                    height: 62 * width / 375
                                }}
                                source={avatarIMG}
                            />
                            <Text
                                style={{
                                    fontSize: 10 * width / 375,
                                    color: '#262626'
                                }}
                            >
                                Other Story
                        </Text>
                        </View>
                        <View
                            style={{
                                marginLeft: 15 * width / 375,
                                justifyContent: 'space-between'
                            }}
                        >
                            <Image
                                style={{
                                    width: 62 * width / 375,
                                    height: 62 * width / 375
                                }}
                                source={avatarIMG}
                            />
                            <Text
                                style={{
                                    fontSize: 10 * width / 375,
                                    color: '#262626'
                                }}
                            >
                                Other Story
                        </Text>
                        </View>
                        <View
                            style={{
                                marginLeft: 15 * width / 375,
                                justifyContent: 'space-between'
                            }}
                        >
                            <Image
                                style={{
                                    width: 62 * width / 375,
                                    height: 62 * width / 375
                                }}
                                source={avatarIMG}
                            />
                            <Text
                                style={{
                                    fontSize: 10 * width / 375,
                                    color: '#262626'
                                }}
                            >
                                Other Story
                        </Text>
                        </View>
                        <View
                            style={{
                                marginLeft: 15 * width / 375,
                                justifyContent: 'space-between'
                            }}
                        >
                            <Image
                                style={{
                                    width: 62 * width / 375,
                                    height: 62 * width / 375
                                }}
                                source={avatarIMG}
                            />
                            <Text
                                style={{
                                    fontSize: 10 * width / 375,
                                    color: '#262626'
                                }}
                            >
                                Other Story
                        </Text>
                        </View>
                        <View
                            style={{
                                marginLeft: 15 * width / 375,
                                justifyContent: 'space-between'
                            }}
                        >
                            <Image
                                style={{
                                    width: 62 * width / 375,
                                    height: 62 * width / 375
                                }}
                                source={avatarIMG}
                            />
                            <Text
                                style={{
                                    fontSize: 10 * width / 375,
                                    color: '#262626'
                                }}
                            >
                                Other Story
                        </Text>
                        </View>
                    </ScrollView>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingLeft: 15,
                        paddingRight: 15,
                        paddingVertical: 12,
                        alignItems: 'center'
                    }}>


                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: "center"
                            }}
                        >
                            <Image
                                style={{
                                    width: 34,
                                    height: 34,
                                    marginRight: 9
                                }}
                                source={avatarIMG}
                            />
                            <View>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        fontWeight: 'bold',
                                        color: '#262626'
                                    }}
                                >tammyolson</Text>
                                <Text
                                    style={{
                                        fontSize: 11,
                                        color: '#262626'
                                    }}
                                >Holland, Rotterdam</Text>
                            </View>
                        </View>
                        <Image source={moreIcon} />


                    </View>
                    <View>
                        <View>
                            <Carousel
                                ref={(c) => { this._carousel = c; }}
                                data={this.state.entries}
                                renderItem={this._renderItem}
                                sliderWidth={width}
                                itemWidth={width}
                                onSnapToItem={(index) => this.setState({ activeSlide: index })}
                            />
                            <View
                                style={{
                                    width: 43,
                                    height: 24,
                                    backgroundColor: 'rgba(38, 38, 38, 0.851043)',
                                    borderRadius: 12,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'absolute',
                                    right: 12,
                                    top: 12
                                }}
                            >
                                <Text
                                    style={{ fontSize: 13, color: '#FFFFFF' }}
                                >{this.state.activeSlide + 1}/{this.state.entries.length}</Text>
                            </View>
                            <Image
                                style={{
                                    position: 'absolute',
                                    left: 12,
                                    bottom: 12
                                }}
                                source={userIconIMG}
                            />
                        </View>
                        {this.pagination()}
                    </View>
                    <View
                        style={{
                            paddingRight: 12,
                            paddingLeft: 12

                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: 10
                            }}
                        >
                            <View
                                style={{ flexDirection: 'row', marginRight: 6 }}
                            >
                                <Image style={{ width: 13, height: 13 }} source={myStoryIMG} />
                                <Image style={{ width: 13, height: 13, marginLeft: -5 }} source={myStoryIMG} />
                                <Image style={{ width: 13, height: 13, marginLeft: -5 }} source={myStoryIMG} />
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row'
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 13,
                                        color: '#262626'
                                    }}
                                >Liked by </Text>
                                <Text style={{ color: '#262626', fontWeight: 'bold', fontSize: 13 }}>KnE </Text>
                                <Text>and </Text>
                                <Text style={{ color: '#262626', fontWeight: 'bold', fontSize: 13 }}>115 321 others</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',

                            }}
                        >
                            <Text style={{ fontSize: 13, color: '#262626', fontWeight: 'bold' }}>tammyolson </Text>
                            <Text style={{ fontSize: 13, color: '#3897F0' }}>#amazing #travel #instagram </Text>

                        </View>
                        <View>
                            <Text style={{ fontSize: 13, color: '#3897F0' }}>Look nice!</Text>
                        </View>
                        <View>
                            <View style={{ marginVertical: 10 }}>
                                <Text><Text style={{ fontSize: 13, fontWeight: 'bold' }}>tammyolson</Text> <Text>Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.</Text></Text>
                            </View>
                            <View style={{ marginLeft: 22, borderLeftWidth: 2, borderColor: '#EFEFEF' }}>
                                <Text style={{ fontSize: 13, marginLeft: 10 }}>Hashtag typewriter banh mi, squid keffiyeh High Life Brooklyn twee craft beer tousled chillwave. PBR&B selfies chillwave</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 12, borderTopWidth: 1, borderTopColor: '#DADBDA', height: 83, alignItems: 'flex-start' }}>
                    <View>
                        <Image style={{ width: 24, height: 24 }} source={homeIMG} />
                    </View>
                    <View>
                        <Image style={{ width: 24, height: 24 }} source={searchIMG} />
                    </View>
                    <View>
                        <Image style={{ width: 24, height: 24 }} source={createPostIMG} />
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#ED4956', width: 80, height: 36, borderRadius: 8, flexDirection: 'row', justifyContent: 'space-around', position: 'absolute', top: -60, alignItems: 'center', tintColor: '#ED4956' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={cmttIMG} />
                                <Text style={{ color: 'white', paddingLeft: 2 }}>1</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={heartttIMG} />
                                <Text style={{ color: 'white', paddingLeft: 2 }}>1</Text>
                            </View>
                            <View style={{
                                width: 15, height: 15, bottom: -4, left: 32, position: 'absolute', backgroundColor: '#ED4956', transform: [
                                    { rotate: '45deg' }
                                ]
                            }}>

                            </View>
                        </View>
                        <Image style={{ width: 26, height: 24 }} source={actionHeartIMG} />
                        <View style={{ width: 5, height: 5, borderRadius: 50, backgroundColor: '#ED4956', marginTop: 10 }}></View>
                    </View>
                    <View>
                        <Image style={{ width: 24, height: 24 }} source={myStoryIMG} />
                    </View>
                </View>
            </View>
        );
    }
}