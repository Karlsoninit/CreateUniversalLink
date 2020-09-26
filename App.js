/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text} from 'react-native';
import dynamicLinks from '@react-native-firebase/dynamic-links';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [link, setLink] = useState('');
  async function buildLink() {
    const link = await dynamicLinks().buildShortLink(
      {
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
      },
      'SHORT',
    );

    return link;
  }

  const generateInviteLink = async () => {
    const url = await buildLink();
    setLink(url);
  };

  useEffect(() => {
    generateInviteLink();
  }, []);

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
