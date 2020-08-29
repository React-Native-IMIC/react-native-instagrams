import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { galleryIMG, galleryIonIMG, galleryProfileIMG, chevLIMG, photoIMG, igtvIMG, messageIMG, myStoryIMG, avatarIMG, moreIcon, postIMG, userIconIMG, heartIMG, commentIMG, saveIMG, homeIMG, searchIMG, createPostIMG, actionHeartIMG, cmttIMG, heartttIMG } from '../../assets/images';

const { width } = Dimensions.get('window');
const scale = width / 375;

const DATA = [
    {
        id: 1,
        source: galleryIMG
    },
    {
        id: 2,
        source: galleryIMG
    },
    {
        id: 3,
        source: galleryIMG
    },
    {
        id: 4,
        source: galleryIMG
    },
    {
        id: 5,
        source: galleryIMG
    },
    {
        id: 6,
        source: galleryIMG
    }
];


const Gallery = () => {
    const renderItem = ({ item }) => (
        <View style={styles.galleryList}>
            <Image style={styles.item} source={item.source} />
            <Image style={styles.item} source={item.source} />
            <Image style={styles.item} source={item.source} />
        </View>

    );

    return (
        <View style={styles.contaier}>
            <View style={styles.header} >
                <Image source={chevLIMG} />
                <Text style={styles.headTitle}>antoninagarsia</Text>
                <Image source={moreIcon} />
            </View>
            <View style={styles.tabGallery}>
                <Image source={galleryIonIMG} />
                <Image source={galleryProfileIMG} />
            </View>
            <View style={{ flex: 1 }}>
                <SafeAreaView >
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
            </View>
            <View style={styles.menuNavigator}>
                <View>
                    <Image style={{ width: 24 * scale, height: 24 * scale }} source={homeIMG} />
                </View>
                <View>
                    <Image style={{ width: 24 * scale, height: 24 * scale }} source={searchIMG} />
                </View>
                <View>
                    <Image style={{ width: 24 * scale, height: 24 * scale }} source={createPostIMG} />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#ED4956', width: 80 * scale, height: 36 * scale, borderRadius: 8 * scale, flexDirection: 'row', justifyContent: 'space-around', position: 'absolute', top: -60 * scale, alignItems: 'center', tintColor: '#ED4956' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={cmttIMG} />
                            <Text style={{ color: 'white', paddingLeft: 2 * scale }}>1</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image source={heartttIMG} />
                            <Text style={{ color: 'white', paddingLeft: 2 * scale }}>1</Text>
                        </View>
                        <View style={{
                            width: 15 * scale, height: 15 * scale, bottom: -4 * scale, left: 32 * scale, position: 'absolute', backgroundColor: '#ED4956', transform: [
                                { rotate: '45deg' }
                            ]
                        }}>

                        </View>
                    </View>
                    <Image style={{ width: 26 * scale, height: 24 * scale }} source={actionHeartIMG} />
                    <View style={{ width: 5 * scale, height: 5 * scale, borderRadius: 50 * scale, backgroundColor: '#ED4956', marginTop: 10 * scale }}></View>
                </View>
                <View>
                    <Image style={{ width: 24 * scale, height: 24 * scale }} source={myStoryIMG} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contaier: {
        flex: 1,
        paddingTop: 54 * scale
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 12 * scale,
        paddingLeft: 12 * scale
        // backgroundColor: 'red'
    },
    headTitle: {
        fontSize: 18 * scale,
        color: '#262626',
        fontWeight: 'bold'
    },
    tabGallery: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 13 * scale
    },
    galleryList: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    item: {
        width: 124 * scale,
        height: 124 * scale
    },
    menuNavigator: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 12 * scale,
        borderTopWidth: 1 * scale,
        borderTopColor: '#DADBDA',
        height: 83 * scale,
        alignItems: 'flex-start'
    }
});

export default Gallery;