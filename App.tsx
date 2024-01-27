// /* eslint-disable react-native/no-inline-styles */
// import React from 'react';
// import {Text, View, StyleSheet} from 'react-native';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.customFont}>Hello World!</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   customFont: {
//     fontFamily: 'RubikBurned-Regular',
//     fontSize: 24,
//   },
// });

// export default App;

//bai 2

// import {ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// const App = () => {
//   return (
//     <View style={{flex: 1}}>
//       <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
//       <ImageBackground
//         style={{flex: 1}}
//         source={{uri: 'https://4.bp.blogspot.com/-c7uL6mwCuAM/VXGmJspkTyI/AAAAAAAAGtU/cMTrMkuOAI0/s1600/hinh-anh-nen-hd-sieu-ro-net-cuc-dep-cho-may-tinh-img0251.jpg'}}>
//         <View style={styles.content}>
//           <Text style={styles.textContent}>Hello word</Text>
//         </View>
//       </ImageBackground>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   content: {
//     margin:30,
//     flex: 1,
//     justifyContent: 'center',
//   },
//   textContent: {
//     color: 'white',
//     fontSize: 50,
//     fontFamily: 'PoorStory-Regular',
//   },
// });

// export default App;

// //bai 3

import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';

const DetailScreen = () => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={{
          uri: 'https://kienviet.net/wp-content/uploads/2020/12/Picture1.png',
        }}
        style={styles.container}>
        <View style={styles.header}>
          <Image
         
           source={{uri:'https://cdn.pixabay.com/photo/2012/04/18/15/18/heart-37317_960_720.png'}} />
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              paddingBottom: 30,
            }}>
            <Text style={styles.textPhoCo}>PHỐ CỔ HỘI AN</Text>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.icon}>
            
            <Image 
             style={{width: 30, height: 30}}
             source={{uri:'https://cdn.pixabay.com/photo/2012/04/18/15/18/heart-37317_960_720.png'}} />
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Image
              style={{width: 30, height: 30}}
              source={{uri:'https://4.bp.blogspot.com/-c7uL6mwCuAM/VXGmJspkTyI/AAAAAAAAGtU/cMTrMkuOAI0/s1600/hinh-anh-nen-hd-sieu-ro-net-cuc-dep-cho-may-tinh-img0251.jpg'}}
            />
            <Text
              style={{
                color: '#0047FF',
                fontSize: 20,
                fontWeight: 'bold',
                marginLeft: 8,
              }}>
              Quảng Nam
            </Text>
          </View>
          <Text
            style={{flex: 1, marginTop: 8, fontSize: 25, fontWeight: 'bold'}}>
            Thông tin chuyến đi
          </Text>
          <Text style={{flex: 5, color: 'gray'}}>
            Hội An – nơi mà cuộc sống cứ bình lặng như thế. Hội An – nơi mà
            dường như dòng chảy vô tình của thời gian chẳng thể nào vùi lấp đi
            cái không khí cổ xưa. Những mái ngói cũ phủ đầy rêu phong, những con
            đường ngập trong sắc đỏ của đèn lồng, những bức hoành phi được chạm
            trổ tinh vi, tất cả như đưa ta về với một thế giới của vài trăm năm
            trước...
          </Text>
        </View>
      </ImageBackground>
      <View style={styles.footer}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={{fontSize: 19, fontWeight: 'bold', color: 'white'}}>
            $100
          </Text>
          <Text style={{fontSize: 15, color: 'white'}}>/Ngày</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            width: 120,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#0748B2', fontWeight: '500'}}>Đặt ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flex: 7,
    paddingTop: 60,
    paddingLeft: 30,
  },
  textPhoCo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  body: {
    flex: 3,
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  footer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    position: 'relative',
    backgroundColor: '#0748B2',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  icon: {
    position: 'absolute',
    top: '17%',
    right: 30,
    padding: 13,
    borderRadius: 40,
    backgroundColor: 'white',
    transform: [{translateY: -50}],
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});

export default DetailScreen;
