import {Text, View, StyleSheet, Pressable} from 'react-native';
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

function Home({  navigation }) {
    return (
      <View>
        <View style={styles.Box_white}>
          <Pressable onPress={() => navigation.navigate('Categories')}>
            <Icon
              name="list"
              size={50}
              style={styles.Box_icon_white}
            />
            <Text style={styles.Box_text_white}>Categories</Text>
          </Pressable>
        </View>
        <View style={styles.Box_white}>
          <Pressable onPress={() => navigation.navigate('Favorites')}>
            <Icon
              name="heart"
              size={50}
              style={styles.Box_icon_white}
            />
            <Text style={styles.Box_text_white}>Favorites</Text>
          </Pressable>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  //   main_box: {
  //     backgroundColor: 'White',
  //     borderTopStartRadius: 15,
  //     borderTopRightRadius: 15,
  //     justifyContent: 'center',
  //     height: '80%',
  //     // marginTop:5,
  //     // flexDirection:'row',
  //     // gap: '1rem',
  //     flexWrap: 'wrap',
  //   },
  //   Box_brown: {
  //     borderRadius: 20,
  //     backgroundColor: 'Brown',
  //     width: '40%',
  //     height: '36%',
  //     shadowOpacity: 20,
  //     margin: 20,

  //     shadowColor: 'Black',
  //     shadowOffset: {
  //       width: 0,
  //       height: 8,
  //     },
  //     shadowOpacity: 0.46,
  //     shadowRadius: 11.14,

  //     elevation: 17,
  //   },
  //   Box_icon_brown: {
  //     margin: 25,
  //     color: 'White',
  //   },
  //   Box_text_brown: {
  //     marginTop: 50,
  //     margin: 30,
  //     color: 'White',
  //     fontSize: 20,
  //     fontWeight: 'bold',
  //   },
  Box_white: {
    borderRadius: 20,
    // backgroundColor: 'White',
    // width: '40%',
    // height: '30%',
    shadowOpacity: 20,
    margin: 20,

    shadowColor: 'Black',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
  Box_icon_white: {
    margin: 25,
    // color: 'Brown',
  },
  Box_text_white: {
    margin: 30,
    // color: 'Brown',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
export default Home;
