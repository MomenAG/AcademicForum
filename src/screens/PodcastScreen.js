import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, ScrollView, Text, Image, FlatList, TouchableOpacity, I18nManager ,Dimensions,Linking} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Video } from 'expo-av';
import axios from 'axios';
import { FontAwesome } from '@expo/vector-icons';
import End from '../components/End';


import Header from '../components/Header';
const window = Dimensions.get('window');

export default function PodcastScreen({navigation}) {
    const [videos, setVideos] = useState([]);
    const {t, i18n} = useTranslation();
    const isRTL = I18nManager.isRTL;

    useEffect(() => {
        fetchVideos();
    }, []);

    const fetchVideos = async () => {
        try {
          const response = await axios.get('https://almuntada.onrender.com/api/v1/podcasts');
          setVideos(response.data);
        } catch (error) {
          console.error(error);
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.videoContainer} key={item.id}>
          <Video
            source={{ uri: item.podcastUrl }}
            style={styles.video}
            shouldPlay
            resizeMode="cover"
            useNativeControls 
          />
          <Text style={styles.videoTitle}>{item.title}</Text>
        </View>
    );


    return (
        <SafeAreaView style={styles.container}>
            <Header
                style={styles.header}
                navigation={navigation}
            />
            <ScrollView  nestedScrollEnabled
              contentContainerStyle={styles.pageContainer}
            //   ref={scrollViewRef}
              showsVerticalScrollIndicator={false}
            >
               <TouchableOpacity onPress={()=> navigation.navigate("StartScreen")} style={styles.logoContainer}>
              <Image
                        source={require("../../assets/FinalLogo.png")}
                        style={styles.logo}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate("StartScreen")}>
                
          
                </TouchableOpacity>
                <View style={styles.pageContent}>
                    <Text style={[styles.firstText, isRTL && styles.rtlText]}>{t('podcastpage.desc')}</Text>
                    <Text style={[styles.secondText, isRTL && styles.rtlText]}>{t('podcastpage.subdesc')}</Text>
                    {videos.map((item) => renderItem({ item }))}
                </View>
                <End style={styles.End} navigation={navigation} /> 
                    
            </ScrollView>
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 30,
    },
    logoContainer: {
        width: 200,
        height: 75,
        alignSelf: 'center', 
        resizeMode: "contain",
    },
    logo: {
        width: 200,
        height: 75,
        resizeMode: "contain",
        alignSelf: 'center',
    },
    pageContainer: {
        flexGrow: 1,
        alignItems: "center",
        paddingBottom: 20,
    },
    pageContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    firstText: {
        color: "black",
        textAlign: 'center',
        fontSize:17,
        fontWeight: "bold",
    },
    secondText: {
        color: "black",
        paddingTop: 10,
        textAlign: 'center',
        fontSize:17,
        fontWeight: "bold",
    },
    videoContainer: {
        paddingTop: 30,
        alignItems: "center",
        width: '100%',
        marginBottom: 16,
    },
    video: {
      width: 365,
      height: 200,
    },
    videoTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 8,
    },
    rtlText: {
        textAlign: 'right',
    },
});