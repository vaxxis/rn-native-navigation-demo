import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, StatusBar, ScrollView, View } from 'react-native'

interface Props {
  scroll?: boolean
  center?: boolean
}

export default class Screen extends Component<Props> {
  render() {
    const { scroll, center } = this.props

    const centered = center ? s.center : undefined

    const content = scroll ? (
      // scrolling
      <ScrollView style={s.flex} contentContainerStyle={s.flex}>
        <View style={[s.container, centered]}>{this.props.children}</View>
      </ScrollView>
    ) : (
      // no scrolling
      <View style={[s.container, centered]}>{this.props.children}</View>
    )

    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={s.flex}>{content}</SafeAreaView>
      </>
    )
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flex: {
    flex: 1,
    backgroundColor: 'white',
  },
})
