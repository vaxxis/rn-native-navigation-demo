import React from 'react'
import { Text, Button } from 'react-native'
import { Screen } from '../components'
import { NavigatorScreen, NavigatorOptions } from '../navigation'

interface Props {}

export default class ThirdScreen extends NavigatorScreen<Props> {
  static navigatorOptions(_: Props): NavigatorOptions {
    return {
      topBar: {
        title: { text: 'Third Screen' },
        rightButtons: [{ id: 'close', text: 'Close' }],
      },
    }
  }

  navigationButtonPressed({ buttonId }: any) {
    buttonId === 'close' && this.navigation.closeModal()
  }

  screenDidAppear() {}
  screenDidDisappear() {}

  render() {
    return (
      <Screen center>
        <Text style={{ fontSize: 24 }}>Third Screen</Text>
        <Button title="Open Stack Screen" onPress={() => this.navigation.push('SecondScreen')} />
        <Button title="Close Modal" onPress={() => this.navigation.closeModal()} />
      </Screen>
    )
  }
}
