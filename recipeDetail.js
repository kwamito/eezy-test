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
    Modal,
    Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';
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

import { SwipeablePanel } from 'rn-swipeable-panel';

function RecipeDetail({ navigation }) {
    const [mult, setMult] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const recipeDetail = {
        name: 'Pizza',
        description: 'This is how we cook the pizza with mozarella',
        likes: 34,
        reviews: 55,
        average_rating: 4,
        steps: [
            {
                number: 1,
                body: 'The first step is to boil the rice at the boiling point',
            },
            {
                number: 2,
                body: "Wash chicken thighs, for faster cooking make a 1/2  slit into chicken thigh meat on either side of the chicken wipe with a paper towel.Season with salt(about 1 1 / 2 teaspoons) bouillon powder",
            },
            {
                number: 3,
                body: 'The pound the rice until smooth',
            },
        ],
        ingredients: [
            {
                name: 'Pepper',
                amount: 3 + mult,
            },
            {
                name: 'Tomatoes',
                amount: 6 + mult,
            },
            {
                name: 'Cheese',
                amount: 3 + mult,
            },
        ],
        calories: '223kcal',
        difficulty_level: 'Medium',
    };

    const reviews = [
        {
            id: 1,
            stars: 3,
            user: 'Kwame',
            body: "Tastes delicious, the best recipe i've tried so far",
            profile_image:
                'https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            date_created: '3 days ago',
            is_verified: false,
        },
        {
            id: 2,
            stars: 3,
            user: 'Chef Chenko',
            body:
                'The chicken has a really puffy texture, that makes it great for a party or a get together',
            profile_image:
                'https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            date_created: '3 days ago',
            is_verified: true,
        },
        {
            id: 3,
            stars: 3,
            user: 'MKBHD',
            body:
                'Exceedingly mouth watering, delicious and perfect. Would like to know how you came up with this recipe, thank you',
            profile_image:
                'https://yt3.ggpht.com/ytc/AAUvwngW9TQgw7E7NqS3Qzd3Up3tjUzkpvMXPWAhYf3LaQ=s88-c-k-c0x00ffffff-no-rj',
            date_created: '3 days ago',
            is_verified: true,
        },
        {
            id: 4,
            stars: 3,
            user: 'Gordon123',
            body:
                'The word pefect sounds like an understatement when used to describe this dish, in fact no word describes it, you indeed are the best keep it up.',
            profile_image:
                'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            date_created: '3 days ago',
            is_verified: false,
        },
        {
            id: 5,
            stars: 3,
            user: 'Ramsey Moses',
            body:
                'Sometimes i wonder how people come up with such great recipes, it makes me wonder, kudos chef',
            profile_image:
                'https://images.pexels.com/photos/2102934/pexels-photo-2102934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            date_created: '3 days ago',
            is_verified: true,
        },
        {
            id: 6,
            stars: 3,
            user: 'Gordon Ramsey',
            body:
                'Avocado and chick peas, what! you indeed are the best, i happily give you my crown.',
            profile_image:
                'https://www.lironboylston.com/wp-content/uploads/2021/03/GordonRamsay.jpg',
            date_created: '3 days ago',
            is_verified: true,
        },
        {
            id: 7,
            stars: 3,
            user: 'Raphael Mane',
            body: 'Gracias, simply the best',
            profile_image:
                'https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            date_created: '3 days ago',
            is_verified: false,
        },
        {
            id: 8,
            stars: 3,
            user: 'Zinchenko',
            body:
                'Reminds me of the first time i tasted chef Ramseys corn biscuits, wow i was blown away, this just did the same',
            profile_image:
                'https://images.pexels.com/photos/8136890/pexels-photo-8136890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            date_created: '3 days ago',
            is_verified: true,
        },
    ];

    const styles = StyleSheet.create({
        centeredView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 22,
        },
        modalView: {
            margin: 20,
            backgroundColor: 'white',
            borderRadius: 6,
            padding: 10,

            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
        },
        button: {
            borderRadius: 20,
            padding: 10,
            elevation: 2,
        },
        buttonOpen: {
            backgroundColor: '#F194FF',
        },
        buttonClose: {
            backgroundColor: '#2196F3',
        },
        textStyle: {
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
        },
        modalText: {
            marginBottom: 15,
            textAlign: 'center',
        },
    });

    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        height: '100%',
    };

    const [panelProps, setPanelProps] = useState({
        fullWidth: true,
        openLarge: false,
        showCloseButton: true,
        onClose: () => closePanel(),
        onPressCloseButton: () => closePanel(),
        // ...or any prop you want
    });
    const [isPanelActive, setIsPanelActive] = useState(false);

    const openPanel = () => {
        setIsPanelActive(true);
    };

    const closePanel = () => {
        setIsPanelActive(false);
    };
    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            {/* <ImageBackground
        source={{
          uri:
            'https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        }}
        style={{
          borderRadius: 50,
          padding: 1,
          height: '100%',
          resizeMode: 'cover',
        }}>
        <ScrollView style={{marginBottom: 0, bottom: 0, position: 'absolute'}}>
          {recipeDetail.steps.map(step => {
            return (
              <View
                style={{
                  display: 'flex',
                }}>
                <Text
                  style={{
                    color: 'white',
                    borderRadius: 100,
                    borderColor: 'orange',
                    padding: 5,
                    borderWidth: 2,
                    height: 40,
                    width: 40,
                    textAlign: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {step.number}
                </Text>
                <Text style={{color: 'white', fontSize: 20}}>{step.body}</Text>
              </View>
            );
          })}
        </ScrollView>
      </ImageBackground> */}
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={{ height: '100%' }}>
                <View style={{ padding: 0 }}>
                    <ImageBackground
                        source={{
                            uri:
                                'https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
                        }}
                        style={{
                            width: '100%',
                            height: 500,

                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Icon name="play" size={40} color="white" />
                        <Icon
                            name="bookmark"
                            size={30}
                            color="#FF5C00"
                            style={{ position: 'absolute', top: 0, right: 0, padding: 20 }}
                        />
                    </ImageBackground>
                </View>
                <View
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 10,
                        borderRadius: 6,
                    }}>
                    <Text
                        style={{
                            fontSize: 35,
                            fontWeight: 'bold',
                            color: isDarkMode ? 'white' : 'black',
                            fontFamily: 'Roboto',
                        }}>
                        {recipeDetail.name}
                    </Text>
                    {/* <Icon name="bookmark" size={30} color="#FF5C00" /> */}
                </View>
                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 10,
                    }}>
                    <Image
                        style={{ borderRadius: 50, height: 50, width: 50, padding: 10 }}
                        source={{
                            uri:
                                'https://yt3.ggpht.com/ytc/AAUvwngW9TQgw7E7NqS3Qzd3Up3tjUzkpvMXPWAhYf3LaQ=s88-c-k-c0x00ffffff-no-rj',
                        }}
                    />
                    <MaterialIcons
                        name="verified"
                        color="blue"
                        size={20}
                        style={{ marginLeft: 10 }}
                    />
                    <Text
                        style={{
                            marginLeft: 10,
                            fontSize: 15,
                            color: isDarkMode ? 'white' : 'black',
                        }}>
                        Owned by Micah
          </Text>
                </View>

                <View
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        padding: 10,
                    }}>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <Icon name="star" color="#FF5C00" size={20} style={{}} />
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                marginLeft: 5,
                                color: isDarkMode ? 'white' : 'black',
                            }}>
                            4.5
            </Text>
                        <Text style={{ marginLeft: 5, color: isDarkMode ? 'white' : 'grey' }}>
                            (432 reviews)
            </Text>
                    </View>

                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <MaterialCommunityIcons
                            name="timer-outline"
                            size={20}
                            style={{ marginLeft: 5 }}
                            color="grey"
                            activeOpacity={0.5}
                        />
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                marginLeft: 5,
                                color: isDarkMode ? 'white' : 'black',
                            }}>
                            20 mins
            </Text>
                    </View>

                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <MaterialCommunityIcons
                            name="chef-hat"
                            size={20}
                            style={{ marginLeft: 5 }}
                            color={isDarkMode ? 'white' : 'grey'}
                            activeOpacity={0.5}
                        />
                        <Text
                            style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                                marginLeft: 5,
                                color: isDarkMode ? 'white' : 'black',
                            }}>
                            Easy
            </Text>
                    </View>
                </View>

                <View
                    style={{
                        padding: 10,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                    <View>
                        <Button
                            title="ingredients"
                            onPress={() => {
                                openPanel();
                            }}
                        />
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                            style={{
                                padding: 10,
                                backgroundColor: 'orange',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#FF5C00',
                                borderRadius: 3,
                                paddingLeft: 10,
                                paddingRight: 10,
                            }}>
                            <Icon
                                name="star"
                                color="yellow"
                                size={20}
                                style={{ marginRight: 5 }}
                            />
                            <Text>Reviews</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ paddingBottom: 100 }}>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontSize: 30,
                            fontWeight: 'bold',
                            color: isDarkMode ? 'white' : 'black',
                            marginTop: 20,
                        }}>
                        Steps
          </Text>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.centeredView}>
                            <ScrollView style={styles.modalView}>
                                <View
                                    style={{ position: 'absolute', right: 0, padding: 10,zIndex:20 }}
                                    onPress={() => {
                                        console.log(modalVisible);
                                        setModalVisible(!modalVisible);
                                        console.log(modalVisible);
                                    }}>
                                    <MaterialIcons
                                        name="cancel"
                                        style={{ right: 0, padding: 15 }}
                                        color="black"
                                        size={35}
                                        onPress={() => {
                                            console.log(modalVisible);
                                            setModalVisible(!modalVisible);
                                            console.log(modalVisible);
                                        }}
                                    />
                                </View>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 15 }}>
                                    Reviews
                </Text>
                                <View>
                                    {reviews.map(review => {
                                        return (
                                            <View
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    padding: 20,
                                                }}>
                                                <View
                                                    style={{
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                    }}>
                                                    <Image
                                                        source={{
                                                            uri: review.profile_image,
                                                        }}
                                                        style={{
                                                            borderRadius: 50,
                                                            padding: 10,
                                                            height: 40,
                                                            width: 40,
                                                            marginRight: 10,
                                                        }}
                                                    />
                                                    <Text
                                                        style={{
                                                            marginRight: 10,
                                                            fontSize: 15,
                                                            fontWeight: 'bold',
                                                            fontFamily: 'Roboto',
                                                        }}>
                                                        {review.user}
                                                    </Text>
                                                    {review.is_verified ? (
                                                        <MaterialIcons
                                                            name="verified"
                                                            color="blue"
                                                            size={15}
                                                        />
                                                    ) : (
                                                        <Text></Text>
                                                    )}
                                                </View>
                                                <View style={{ padding: 5 }}>
                                                    <Text style={{ fontSize: 15, fontFamily: 'Arial' }}>
                                                        {review.body}
                                                    </Text>
                                                </View>
                                            </View>
                                        );
                                    })}
                                </View>
                            </ScrollView>
                        </View>
                    </Modal>

                    {recipeDetail.steps.map(step => {
                        return (
                            <View
                                style={{
                                    display: 'flex',
                                    padding: 10,
                                }}>
                                <View
                                    style={{
                                        borderRadius: 100,
                                        borderColor: 'orange',
                                        padding: 0,
                                        borderWidth: 2,
                                        height: 30,
                                        width: 30,
                                        textAlign: 'center',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        color: isDarkMode ? 'white' : 'black',
                                    }}>
                                    <Text style={{ color: isDarkMode ? 'white' : 'black' }}>
                                        {step.number}
                                    </Text>
                                </View>

                                <Text
                                    style={{
                                        fontSize: 17,
                                        color: isDarkMode ? 'white' : 'black',
                                        marginLeft: '10%',
                                    }}>
                                    {step.body}
                                </Text>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>

            <SwipeablePanel
                {...panelProps}
                // style={{backgroundColor: 'black'}}
                // noBackgroundOpacity={true}
                isActive={isPanelActive}>
                <Text
                    style={{
                        textAlign: 'center',
                        color: 'black',
                        fontSize: 25,
                        fontWeight: 'bold',
                    }}>
                    Ingredients
        </Text>
                <View style={{ padding: 15, marginTop: 15, marginBottom: 30 }}>
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            padding: 5,
                            backgroundColor: '#FF5C00',
                            width: '50%',
                            borderRadius: 6,
                            justifyContent: 'space-between',
                            marginBottom: 30,
                        }}>
                        <Icon
                            style={{ padding: 10 }}
                            name="minus"
                            size={20}
                            color="black"
                            onPress={() => {
                                mult >= 1 ? setMult(mult - 1) : setMult(mult);
                            }}
                        />
                        <Text
                            style={{
                                padding: 10,
                                fontWeight: 'bold',
                                fontSize: 15,
                            }}>
                            Add
            </Text>
                        <Icon
                            name="plus"
                            style={{ padding: 10 }}
                            size={20}
                            color={'black'}
                            onPress={() => {
                                setMult(mult + 1);
                            }}
                        />
                        
                    </View>
                    {recipeDetail.ingredients.map(ingredient => {
                        return (
                            <View style={{ padding: 5, paddingLeft: 0, paddingRight: 0 }}>
                                <View
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        backgroundColor: 'white',
                                        padding: 10,
                                        borderRadius: 6,
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        elevation:5
                                    }}>
                                    <Text
                                        style={{
                                            fontWeight: 'bold',
                                            fontFamily: 'Roboto',
                                            fontSize: 16,
                                        }}>
                                        {ingredient.name}
                                    </Text>
                                    <View
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                        }}>
                                        <Text>Amount:</Text>
                                        <Text
                                            style={{
                                                padding: 10,
                                                fontSize: 16,
                                                backgroundColor: 'white',
                                                borderRadius: 10,
                                                textAlign: 'center',
                                                fontWeight:"bold"
                                            }}>
                                            {ingredient.amount}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        );
                    })}
                </View>
            </SwipeablePanel>
        </SafeAreaView>
    );
}

export default RecipeDetail;
