import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image, TextInput } from "react-native";
import { Button, Input, TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import common_style from '../../assets/styles/common_style.js';
import homepage_style from '../../assets/styles/homepage_style.js';
import Header from './Header';
import React, {Fragment} from 'react';


const useStyles = makeStyles({
    input: {
      color: "#fff"
    }
});
export default function Home({navigation}) {
const classes = useStyles();

  return (
    <>
    <View width="100%" height="100%" style={common_style.main_wrapper}>
        <ImageBackground source={require('../../assets/images/login_bg.png')} resizeMode="cover" style={common_style.image}>
            <View  style={common_style.container}>
                <Header />
                <View style={homepage_style.homepage_box}>
                    <View style={homepage_style.nameBox}>
                       <Text style={homepage_style.nameBox1}><Text>Welcome</Text> <Text style={homepage_style.nameTitle}>Mr. Shabbir Semari</Text></Text>
                    </View>
                    <View style={homepage_style.container}>
                        <View style={homepage_style.first_col}>
                            <Text style={common_style.heading}>SAP <br />Van Sales<br/> &<br/>Distribution</Text>
                            <Text style={common_style.para}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Text>
                            <Text style={common_style.para}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Text>
                        </View>
                        <View style={homepage_style.snd_col}>
                            <View style={homepage_style.menu}>
                                <View style={homepage_style.tileView}>
                                    <View style={homepage_style.menu_col}>
                                        <View style={homepage_style.menu_icon}>
                                            <Image source={require('../../assets/images/icons/user.png')} style={{width: 70, height:40}} />
                                        </View>
                                        <View style={homepage_style.menu_text}><Text style={homepage_style.menu_word}>User<br/>Management</Text></View>

                                    </View>
                                </View>
                                <View style={homepage_style.tileView}>
                                    <View style={homepage_style.menu_col}>
                                        <View style={homepage_style.menu_icon}>
                                            <Image source={require('../../assets/images/icons/enquiry.png')} style={{width: 70, height:40}} />
                                        </View>
                                        <View style={homepage_style.menu_text}><Text style={homepage_style.menu_word}>Inquiry <br/>Order Booking</Text></View>

                                    </View>
                                </View>
                                <View style={homepage_style.tileView}>
                                    <View style={homepage_style.menu_col}>
                                        <View style={homepage_style.menu_icon}>
                                            <Image source={require('../../assets/images/icons/material.png')} style={{width: 70, height:40}} />
                                        </View>
                                        <View style={homepage_style.menu_text}><Text style={homepage_style.menu_word}>Material<br/>Management</Text></View>

                                    </View>
                                </View>
                                <View style={homepage_style.tileView}>
                                    <View style={homepage_style.menu_col}>
                                        <View style={homepage_style.menu_icon}>
                                            <Image source={require('../../assets/images/icons/customer.png')} style={{width: 70, height:40}} />
                                        </View>
                                        <View style={homepage_style.menu_text}><Text style={homepage_style.menu_word}>Customer<br/>Management</Text></View>

                                    </View>
                                </View>
                            </View>
                            <View style={homepage_style.menu}>
                                <View style={homepage_style.tileView}>
                                    <View style={homepage_style.menu_col}>
                                        <View style={homepage_style.menu_icon}>
                                            <Image source={require('../../assets/images/icons/truck.png')} style={{width: 70, height:40}} />
                                        </View>
                                        <View style={homepage_style.menu_text}><Text style={homepage_style.menu_word}>Truck<br/>Management</Text></View>

                                    </View>
                                </View>
                                <View style={homepage_style.tileView}>
                                    <View style={homepage_style.menu_col}>
                                        <View style={homepage_style.menu_icon}>
                                            <Image source={require('../../assets/images/icons/route.png')} style={{width: 70, height:40}} />
                                        </View>
                                        <View style={homepage_style.menu_text}><Text style={homepage_style.menu_word}>Route<br/>Management</Text></View>
                                    </View>
                                </View>
                                <View style={homepage_style.tileView}  onClick={() => navigation.navigate('Details') }>
                                    <View style={homepage_style.menu_col}>
                                        <View style={homepage_style.menu_icon}>
                                            <Image source={require('../../assets/images/icons/delivery.png')} style={{width: 70, height:40}} />
                                        </View>
                                        <View style={homepage_style.menu_text}><Text style={homepage_style.menu_word}>Delivery<br/>Invoice</Text></View>
                                    </View>
                                </View>
                                <View style={homepage_style.tileView} onClick={() => navigation.navigate('Orderlist') } >
                                    <View style={homepage_style.menu_col}>
                                        <View style={homepage_style.menu_icon}>
                                            <Image source={require('../../assets/images/icons/spotsale.png')} style={{width: 70, height:40}} />
                                        </View>
                                        <View style={homepage_style.menu_text}><Text style={homepage_style.menu_word}>Spot Sales</Text></View>
                                    </View>
                                </View>
                            </View>
                            <View style={homepage_style.menu}  >
                                <View style={homepage_style.tileView} onClick={() => navigation.navigate('CollectionList') }>
                                    <View style={homepage_style.menu_col}>
                                        <View style={homepage_style.menu_icon}>
                                            <Image source={require('../../assets/images/icons/collection_management.png')} style={{width: 70, height:40}} />
                                        </View>
                                        <View style={homepage_style.menu_text}><Text style={homepage_style.menu_word}>Collection<br/>Management</Text></View>
                                    </View>
                                </View>
                                <View style={homepage_style.tileView}  onClick={() => navigation.navigate('DeliveryDetail') }>
                                    <View style={homepage_style.menu_col}>
                                        <View style={homepage_style.menu_icon}>
                                            <Image source={require('../../assets/images/icons/delivery_planing.png')} style={{width: 70, height:40}} />
                                        </View>
                                        <View style={homepage_style.menu_text}><Text style={homepage_style.menu_word}>Delivery<br/>Planing</Text></View>
                                    </View>
                                </View>
                                <View style={homepage_style.tileView}>
                                    <View style={homepage_style.menu_col}>
                                        <View style={homepage_style.menu_icon}>
                                            <Image source={require('../../assets/images/icons/returns_management.png')} style={{width: 70, height:40}} />
                                        </View>
                                        <View style={homepage_style.menu_text}><Text style={homepage_style.menu_word}>Returns<br/>Management</Text></View>
                                    </View>
                                </View>
                                <View style={homepage_style.tileView}>
                                    <View style={homepage_style.menu_col}>
                                        <View style={homepage_style.menu_icon}>
                                            <Image source={require('../../assets/images/icons/spot_purchase.png')} style={{width: 70, height:40}} />
                                        </View>
                                        <View style={homepage_style.menu_text}><Text style={homepage_style.menu_word}>Spot<br/>Purchase</Text></View>
                                    </View>
                                </View>
                            </View>

                        </View>
                    </View>

                </View>
            </View>
        </ImageBackground>
 

    </View>

    
    </>

  );
}

