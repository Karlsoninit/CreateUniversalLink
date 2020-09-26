/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';
import dynamicLinks from '@react-native-firebase/dynamic-links';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
<<<<<<< HEAD
  //commit
=======
  const [link, setLink] = useState('');
  async function buildLink() {
    const link = await dynamicLinks().buildLink({
      link: 'https://goit.ua/',
      domainUriPrefix: 'https://universallinkproject.page.link',
      android: {
        packageName: 'com.universallinkproject',
        fallbackUrl: 'https://goit.ua/',
      },
      ios: {
        bundleId: 'org.reactjs.native.example.universalLinkProject',
        fallbackUrl: 'https://goit.ua/',
      },
    });

    return link;
  }

  const generateInviteLink = async () => {
    const url = await buildLink();
    setLink(url);
  };

  useEffect(() => {
    generateInviteLink();
  }, []);

>>>>>>> 53a78f5fcfa58dcd849bfe74520ad7f344b16d54
  return (
    <>
      <SafeAreaView style={styles.scrollView}>
        <Text>{link}</Text>
        <TextInput value={link} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
