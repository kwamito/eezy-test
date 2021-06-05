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
    Modal
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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


const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: FontAwesome;
}`;

const RecipeHome = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';
    const [modalVisible, setModalVisible] = useState(false);

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        height: '100%',
    };
    const [login, setLogin] = useState(false);
    const [text, setText] = useState([]);

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
                        <MaterialIcons
                            name="verified"
                            color="#00D1FF"
                            style={{ marginLeft: 5 }}
                            size={20}
                        />
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
                style={{ height: '100%' }}>
                <View
                    style={{
                        color: isDarkMode ? 'white' : 'black',
                        marginTop: 20,
                        padding: 10,
                    }}>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        <Text
                            style={{
                                fontSize: 32,
                                fontWeight: 'bold',
                                fontFamily: 'Nunito',
                                color: isDarkMode ? 'white' : 'black',
                            }}>
                            Welcome Marques
            </Text>
                        <TouchableOpacity style={{}} onPress={() => {
                            console.log(modalVisible)
                           setModalVisible(!modalVisible)

                           console.log(modalVisible)
                        }}>
                            <Image
                                source={{
                                    uri:
                                        'https://yt3.ggpht.com/ytc/AAUvwngW9TQgw7E7NqS3Qzd3Up3tjUzkpvMXPWAhYf3LaQ=s88-c-k-c0x00ffffff-no-rj',
                                }}
                                style={{
                                    borderRadius: 50,
                                    padding: 10,
                                    height: 60,
                                    width: 60,
                                    marginRight: 10,
                                }}
                               
                            />
                            <MaterialIcons
                                name="verified"
                                color="#00D1FF"
                                style={{ position: 'absolute', right: 5, bottom: 0 }}
                                size={20}
                            />
                        </TouchableOpacity>
                    </View>

                   {/* MODAL */}
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={{flex:1,justifyContent:"flex-start",alignItems:"center",marginTop:22,marginBottom:22,elevation:6}}>
                            <View style={{margin:20,backgroundColor:"white",borderRadius:6,padding:10,width:"90%",elevation:6}}>
                                <View>
                                    
                                </View>
                                <View
                                style={{width:'30%',position:"absolute",left:0,zIndex:20}}
                                   // style={{ position: 'absolute', right: 0, padding: 10,paddingLeft:10,paddingRight:10,backgroundColor:"red"}}
                                   >
                                    <MaterialIcons.Button
                                        name="cancel"
                                        style={{ right: 0 }}
                                        color="black"
                                        backgroundColor="white"
                                        size={35}
                                        onPress={() => {
                                            console.log(modalVisible);
                                            setModalVisible(!modalVisible);
                                            console.log(modalVisible);
                                        }}
                                    ></MaterialIcons.Button>
                                </View>
                                <Text style={{ textAlign:"center",fontSize: 20, fontWeight: 'bold', padding: 5 }}>
                                    Eezy
                </Text>
                <View style={{marginTop:10,padding:10,display:"flex",flexDirection:"row"}}>
                                    <TouchableOpacity style={{}} onPress={() => {
                                        console.log(modalVisible)
                                        setModalVisible(!modalVisible)

                                        console.log(modalVisible)
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
                                        <MaterialIcons
                                            name="verified"
                                            color="#00D1FF"
                                            style={{ position: 'absolute', left: 1, bottom: 0 }}
                                            size={20}
                                        />
                                    </TouchableOpacity>
                                    <View>
                                        <Text>Kwame Kuhney</Text>
                                    <Text>nana@email.com</Text>
                                    </View>
                                    
                </View>
                                <View style={{ padding:2,borderColor:"grey",borderBottomWidth:1,width:"100%"}}></View>

                                <TouchableOpacity style={{display:"flex",justifyContent:"flex-start",flexDirection:"row",alignItems:"center",padding:10}}>
                                    <MaterialIcons name="settings" color="black" size={22} />
                                    <Text style={{fontSize:18,fontWeight:"normal",marginLeft:30}}>Settings</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ display: "flex", justifyContent: "flex-start", flexDirection: "row", alignItems: "center", padding: 10 }}>
                                    <Icon name="user-circle" color="black" size={22} />
                                    <Text style={{ fontSize: 18, fontWeight: "normal", marginLeft: 30 }}>Profile</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ display: "flex", justifyContent: "flex-start", flexDirection: "row", alignItems: "center", padding: 10 }}>
                                    <MaterialIcons name="view-list" color="black" size={22} />
                                    <Text style={{ fontSize: 18, fontWeight: "normal", marginLeft: 30 }}>My recipes</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ display: "flex", justifyContent: "flex-start", flexDirection: "row", alignItems: "center", padding: 10 }}>
                                    <MaterialIcons name="bookmark" color="black" size={22} />
                                    <Text style={{ fontSize: 18, fontWeight: "normal", marginLeft: 30 }}>Saved recipes</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ display: "flex", justifyContent: "flex-start", flexDirection: "row", alignItems: "center", padding: 10 }}>
                                    <Icon name="users" color="black" size={22} />
                                    <Text style={{ fontSize: 18, fontWeight: "normal", marginLeft: 30 }}>Followers</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate("SearchByIngredient")} style={{ display: "flex", justifyContent: "flex-start", flexDirection: "row", alignItems: "center", padding: 10 }}>
                                    <Icon name="search" color="black" size={22} />
                                    <Text style={{ fontSize: 18, fontWeight: "normal", marginLeft: 30 }}>Search recipe by ingredient</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ display: "flex", justifyContent: "flex-start", flexDirection: "row", alignItems: "center", padding: 10 }}>
                                    <MaterialIcons name="logout" color="black" size={22} />
                                    <Text style={{ fontSize: 18, fontWeight: "normal", marginLeft: 30 }}>Logout</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>

                    <Text
                        style={{
                            fontSize: 20,
                            marginTop: 5,
                            fontStyle: 'italic',
                            color: isDarkMode ? 'white' : 'black',
                        }}>
                        What would you like to cook this morning?
          </Text>
                </View>

                <View style={{ height: 230, marginTop: 20, padding: 10 }}>
                    <Text
                        style={{
                            color: isDarkMode ? 'white' : 'black',
                            fontSize: 20,
                            fontStyle: 'italic',
                            marginBottom: 15,
                        }}>
                        Trending today
          </Text>
                    <ScrollView horizontal={true}>
                        {trendingRecipes.map(recipe => {
                            return (
                                <View style={{ borderRadius: 10 }}>
                                    <ImageBackground
                                        style={cardStyle}
                                        source={{ uri: recipe.image }}>
                                        <View
                                            style={{
                                                height: '100%',
                                                width: '60%',
                                                backgroundColor: 'rgba(52, 52, 52, 0.6)',
                                                top: 0,
                                                borderTopRightRadius: 10,
                                                borderBottomRightRadius: 10,
                                                display: 'flex',
                                                flexDirection: 'column',
                                                paddingLeft: 10,
                                                //backgroundColor: 'rgba(102, 52, 52, 0.8)',
                                            }}>
                                            <Text
                                                style={{
                                                    color: 'white',
                                                    fontSize: 20,
                                                    padding: 2,
                                                    textAlign: 'left',
                                                    fontFamily: 'Roboto',
                                                    fontWeight: 'bold',
                                                }}>
                                                {recipe.name}
                                            </Text>

                                            <View
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                }}>
                                                <Image
                                                    source={{ uri: recipe.profile_pic }}
                                                    style={{
                                                        borderRadius: 50,
                                                        padding: 10,
                                                        height: 40,
                                                        width: 40,
                                                        marginRight: 10,
                                                    }}
                                                />
                                                <Text style={{ color: 'white' }}>{recipe.owner}</Text>
                                            </View>
                                            <View style={{ width: '50%', marginTop: 10 }}>
                                                <Button title="40 mins" color={'#FF5C00'} width={40} />
                                            </View>
                                        </View>
                                    </ImageBackground>
                                </View>
                            );
                        })}
                    </ScrollView>
                </View>
                <View
                    style={{
                        display: 'flex',
                        flex: 1,
                        marginTop: 10,
                        padding: 10,
                    }}>
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
                    <FlatList
                        keyExtractor={(item, index) => index}
                        data={allRecipes}
                        renderItem={renderList}
                        ItemSeparatorComponent={() => <View style={{ margin: 10 }} />}
                        style={{ paddingBottom: '20%' }}
                    />
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

export default RecipeHome;
