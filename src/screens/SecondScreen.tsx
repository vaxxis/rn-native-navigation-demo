import React from 'react'
import { Text, Button, StyleSheet } from 'react-native'
import { NavigatorScreen, NavigatorOptions } from '../navigation'
import { Screen } from '../components'

interface Props {
  componentId: string
  title: string
  subtitle: string
  message: string
}

export default class SecondScreen extends NavigatorScreen<Props> {
  static navigatorOptions(props: Props): NavigatorOptions {
    return {
      topBar: {
        title: { text: props.title || 'Second', color: '#000' },
        subtitle: { text: props.subtitle, fontSize: 13, color: '#555' },
      },
    }
  }

  render() {
    return (
      <Screen center>
        <Text style={s.title}>Second Screen</Text>
        <Text style={s.code}>{JSON.stringify(this.props, null, 2)}</Text>
        <Button title="Open Modal Stack" onPress={() => this.navigation.openModal('ThirdScreen')} />
        <Button title="Open First with long back (iOS)" onPress={() => this.navigation.push('FirstScreen')} />
        <Button title="Go Back" onPress={() => this.navigation.pop()} />
      </Screen>
    )
  }
}

const s = StyleSheet.create({
  title: { fontSize: 24 },
  code: { fontSize: 14, fontFamily: 'courier', marginVertical: 20 },
})
