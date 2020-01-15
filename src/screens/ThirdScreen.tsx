import React from 'react'
import { Text, Button } from 'react-native'
import { Screen } from '../components'
import { NavigatorScreen, NavigatorOptions } from '../navigation'

interface Props {}

export default class ThirdScreen extends NavigatorScreen<Props> {
  static options(_: Props): NavigatorOptions {
    return { topBar: { title: { text: 'Third Screen' } } }
  }

  render() {
    return (
      <Screen>
        <Text style={{ fontSize: 24 }}>Third Screen</Text>
        <Button title="Open Stack Screen" onPress={() => this.navigation.push('ThirdScreen')} />
        <Button title="Close Modal" onPress={() => this.navigation.closeModal()} />
      </Screen>
    )
  }
}
