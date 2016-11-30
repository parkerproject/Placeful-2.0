/* @flow */

import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Container from '@components/Container'
// import Title from '@components/Title'

export default () => (
  <Container>
    <View style={{ flex: 0.7, borderColor: 'blue', borderWidth: 1 }}>
      <Image
        source={{ uri: 'https://unsplash.it/375/?random' }}
        style={{ width: 375, height: 465 }}
      />
    </View>
    <View style={{ flex: 0.3, borderColor: 'green', borderWidth: 1, alignItems: 'center' }}>
      <View style={{ paddingVertical: 10 }}><Text>Experience amazing things</Text></View>
      <Text style={{ fontSize: 10 }}>Let yourself driven by like-minded people</Text>
      <Text style={{ fontSize: 10 }}>and get to experience the life</Text>
      <Text style={{ fontSize: 10 }}>happening around you</Text>
    </View>
  </Container>
)
