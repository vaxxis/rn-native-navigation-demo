import React from 'react'
import { Text, Button, StyleSheet } from 'react-native'
import { Screen } from '../components'
import { NavigatorScreen, NavigatorOptions } from '../navigation'

interface Props {
  componentId: string
  title: string
  subtitle: string
  message: string
}

export default class SecondScreen extends NavigatorScreen<Props> {
  static options(props: Props): NavigatorOptions {
    return {
      topBar: {
        title: { text: props.title, color: '#000' },
        subtitle: { text: props.subtitle, fontSize: 13, color: '#555' },
      },
    }
  }

  render() {
    return (
      <Screen>
        <Text style={s.title}>Second Screen</Text>
        <Text style={s.code}>{JSON.stringify(this.props, null, 2)}</Text>
        <Button title="Open Modal Stack" onPress={() => this.navigation.openModal('ThirdScreen')} />
        <Button title="Go Back" onPress={() => this.navigation.pop()} />
      </Screen>
    )
  }
}

const s = StyleSheet.create({
  title: { fontSize: 24 },
  code: { fontSize: 14, fontFamily: 'courier', marginVertical: 20 },
})
