import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    ImageBackground,
    Image,
    Button,
    FlatList,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import NetInfo from '@react-native-community/netinfo';
import { BlurView } from '@react-native-community/blur';

import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
import Login from './Login';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: FontAwesome;
}`;

const SearchByIngredient = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        height: '100%',
        color: isDarkMode ? 'white' : 'black',
    };
    const [login, setLogin] = useState(false);
    const [text, setText] = useState([]);
    const [search,setSearch] = useState([])
    const [ingredient,setIngredient] = useState('')

    const onAdd = event => {
        setSearch(search.concat(ingredient))
        event.target.value = ''
    }

    const renderList = ({ item }) => {
        return (
            <ImageBackground
                source={{ uri: item.image }}
                style={{
                    borderRadius: 10,
                    width: 300,
                    height: 134,
                    marginRight: 20,
                    overflow: 'hidden',
                    height: 368,
                    width: '100%',
                    resizeMode: 'cover',
                }}>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        padding: 10,
                        height: '50%',
                        backgroundColor: 'rgba(52, 52, 52, 0.6)',
                        width: '100%',
                        borderRadius: 10,
                        overflow: 'hidden',
                    }}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 30,
                            color: 'white',
                            fontFamily: 'Roboto',
                        }}>
                        {item.name}
                    </Text>

                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 10,
                        }}>
                        <Image
                            source={{
                                uri:
                                    'https://yt3.ggpht.com/ytc/AAUvwngW9TQgw7E7NqS3Qzd3Up3tjUzkpvMXPWAhYf3LaQ=s88-c-k-c0x00ffffff-no-rj',
                            }}
                            style={{
                                borderRadius: 50,
                                padding: 10,
                                height: 45,
                                width: 45,
                                marginRight: 10,
                            }}
                        />
                        <Text style={{ color: 'white' }}>{item.owner}</Text>
                    </View>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginTop: 10,
                        }}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Login');
                            }}
                            activeOpacity={1.5}
                            style={{
                                padding: 7,
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#FF5C00',
                                borderRadius: 3,
                                paddingLeft: 10,
                                paddingRight: 10,
                            }}>
                            <Text
                                style={{
                                    fontWeight: 'normal',
                                    color: 'white',
                                    fontSize: 15,
                                    textAlign: 'center',
                                }}>
                                30 MINS
              </Text>
                            <MaterialCommunityIcons
                                name="timer"
                                size={25}
                                style={{ marginLeft: 5 }}
                                color="white"
                                activeOpacity={0.5}
                            />
                        </TouchableOpacity>
                        {/* <View>
              <Button
                color={'#FF5C00'}
                title={'44 mins'}
                //  icon={<MaterialCommunityIcons name="timer" color={'white'} />}
                icon={<Icon name="arrow-right" size={15} color="white" />}
                iconRight
              />
            </View> */}

                        <View>
                            <Button
                                color={'#FF5C00'}
                                title={'Try recipe'}
                                onPress={() => navigation.navigate('Details')}
                            />
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    };

    const trendingRecipes = [
        {
            name: 'Fruit salad',
            description: 'This is how we cook the pizza with mozarella',
            likes: 34,
            reviews: 55,
            average_rating: 4,
            image:
                'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            owner: 'MKBDDF',
            profile_pic:
                'https://yt3.ggpht.com/ytc/AAUvwngW9TQgw7E7NqS3Qzd3Up3tjUzkpvMXPWAhYf3LaQ=s88-c-k-c0x00ffffff-no-rj',
        },
        {
            name: 'French Baggete',
            description: 'This is how we cook the pizza with mozarella',
            likes: 34,
            reviews: 55,
            average_rating: 4,
            image:
                'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?cs=srgb&dl=pexels-mariana-kurnyk-1775043.jpg&fm=jpg',
            owner: 'MKBDDF',
            profile_pic:
                'https://yt3.ggpht.com/ytc/AAUvwngW9TQgw7E7NqS3Qzd3Up3tjUzkpvMXPWAhYf3LaQ=s88-c-k-c0x00ffffff-no-rj',
        },
        {
            name: 'Mozarella',
            description: 'This is how we cook the pizza with mozarella',
            likes: 34,
            reviews: 55,
            average_rating: 4,
            image:
                'https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            owner: 'MKBDDF',
            profile_pic:
                'https://yt3.ggpht.com/ytc/AAUvwngW9TQgw7E7NqS3Qzd3Up3tjUzkpvMXPWAhYf3LaQ=s88-c-k-c0x00ffffff-no-rj',
        },
        {
            name: 'Burger',
            description: 'This is how we cook the pizza with mozarella',
            likes: 34,
            reviews: 55,
            average_rating: 4,
            image:
                'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            owner: 'MKBDDF',
            profile_pic:
                'https://yt3.ggpht.com/ytc/AAUvwngW9TQgw7E7NqS3Qzd3Up3tjUzkpvMXPWAhYf3LaQ=s88-c-k-c0x00ffffff-no-rj',
        },
    ];

    const allRecipes = [
        {
            name: 'Khebab',
            description: 'This is how we cook the pizza with mozarella',
            likes: 34,
            reviews: 55,
            average_rating: 4,
            image:
                'https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            owner: 'MKBDDF',
            profile_pic:
                'https://yt3.ggpht.com/ytc/AAUvwngW9TQgw7E7NqS3Qzd3Up3tjUzkpvMXPWAhYf3LaQ=s88-c-k-c0x00ffffff-no-rj',
        },
        {
            name: 'French Baggete',
            description: 'This is how we cook the pizza with mozarella',
            likes: 34,
            reviews: 55,
            average_rating: 4,
            image:
                'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?cs=srgb&dl=pexels-mariana-kurnyk-1775043.jpg&fm=jpg',
            owner: 'MKBDDF',
            profile_pic:
                'https://yt3.ggpht.com/ytc/AAUvwngW9TQgw7E7NqS3Qzd3Up3tjUzkpvMXPWAhYf3LaQ=s88-c-k-c0x00ffffff-no-rj',
        },
        {
            name: 'Mozarella',
            description: 'This is how we cook the pizza with mozarella',
            likes: 34,
            reviews: 55,
            average_rating: 4,
            image:
                'https://images.pexels.com/photos/604969/pexels-photo-604969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            owner: 'MKBDDF',
            profile_pic:
                'https://yt3.ggpht.com/ytc/AAUvwngW9TQgw7E7NqS3Qzd3Up3tjUzkpvMXPWAhYf3LaQ=s88-c-k-c0x00ffffff-no-rj',
        },
        {
            name: 'Burger',
            description: 'This is how we cook the pizza with mozarella',
            likes: 34,
            reviews: 55,
            average_rating: 4,
            image:
                'https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            owner: 'MKBDDF',
            profile_pic:
                'https://yt3.ggpht.com/ytc/AAUvwngW9TQgw7E7NqS3Qzd3Up3tjUzkpvMXPWAhYf3LaQ=s88-c-k-c0x00ffffff-no-rj',
        },
        {
            name: 'Avocado Mix',
            description: 'This is how we cook the pizza with mozarella',
            likes: 34,
            reviews: 55,
            average_rating: 4,
            image:
                'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            owner: 'MKBDDF',
            profile_pic:
                'https://yt3.ggpht.com/ytc/AAUvwngW9TQgw7E7NqS3Qzd3Up3tjUzkpvMXPWAhYf3LaQ=s88-c-k-c0x00ffffff-no-rj',
        },
    ];

    useEffect(() => {
        // auth.onAuthStateChanged(user => {
        //     if (user) {
        //         setLogin(true);
        //         db.collection('dairy').onSnapshot(snap => {
        //             setText(snap.docs);
        //         });
        //     } else {
        //         setLogin(false);
        //     }
        // });
    }, []);

    NetInfo.addEventListener(networkState => {
        console.log('Connection type - ', networkState.type);
        console.log('Is connected? - ', networkState.isConnected);
        if (networkState.isConnected != true) {
            db.enablePersistence();
        }
    });

    const buttonParentStyle = {
        marginTop: 20,
        height: 100,
        padding: 20,
    };

    const cardStyle = {
        borderRadius: 10,
        width: 320,
        height: 154,
        marginRight: 20,
        overflow: 'hidden',
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={{
                    height: '100%',
                    zIndex: 0,
                }}>
                <View style={{ padding: 10 }}>
                    <View
                        style={{
                            color: 'white',
                            backgroundColor: 'white',
                            marginTop: 20,
                            padding: 5,
                            elevation: 5,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderRadius: 6,
                        }}>
                        <Icon name="search" style={{ padding: 5 }} size={20} color="black" />
                        <TextInput
                            type="search"
                            placeholder={'Add ingredient'}
                            placeholderTextColor={'black'}
                            
                            onChangeText={text => setIngredient(text)}
                            style={{
                                backgroundColor: 'white',
                                borderRadius: 6,
                                zIndex: 500,
                                width: '80%',
                                fontWeight: 'bold',
                                fontFamily: 'Roboto',
                                color:"black"
                            }}
                        />
                        <TouchableOpacity onPress={(event) => {
                            onAdd(event)
                            console.log(search)
                        }}>
                                                    <Icon name="plus" size={20} color="green"  />
                        </TouchableOpacity>
                    </View>
                </View>

                <View
                    style={{
                        display: 'flex',
                        flex: 1,
                        marginTop: 10,
                        padding: 10,
                        flexDirection:"row",
                        flexWrap:"wrap"
                    }}>
                        {search.map(text => {
                            return(
                                <View style={{padding:10,backgroundColor:"orange",margin:5,paddingLeft:40,paddingRight:40,borderRadius:20,display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                                    <Text style={{color: isDarkMode ? "white":"black",textAlign:'right'}}>{text}</Text>
                                    <MaterialIcons name="close" size={20} color="black" style={{position:"absolute",right:0,padding:12}} />
                                </View>
                            )
                        })}
                        {/* {search.forEach(text => {
                            return(
                                <Text style={{ color: isDarkMode ? 'white' : 'black',}}>{text}</Text>
                            )
                        })}
                    <Text style={{ color: isDarkMode ? 'white' : 'black',}}>{search}</Text> */}
                    {/* {allRecipes.map(recipe => {
            return (
              <ImageBackground
                key={recipe.name}
                source={{uri: recipe.image}}
                style={{
                  borderRadius: 10,
                  width: 300,
                  height: 134,
                  marginRight: 20,
                  overflow: 'hidden',
                }}>
                <Text>{recipe.name}</Text>
              </ImageBackground>
            );
          })} */}
                    {/* <FlatList
                        keyExtractor={(item, index) => index}
                        data={allRecipes}
                        renderItem={renderList}
                        style={{ paddingBottom: 80 }}
                        ItemSeparatorComponent={() => <View style={{ margin: 10 }} />}
                    /> */}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default SearchByIngredient
