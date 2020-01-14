import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'

export default class Screen extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={s.container}>{this.props.children}</SafeAreaView>
      </>
    )
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
