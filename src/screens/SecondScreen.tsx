import React, { Component } from 'react'
import { Text, Button } from 'react-native'
import { Screen } from '../components'
import Navigator, { NavigatorOptions, ScreenProps } from '../Navigator'

interface Props {
  componentId: string
}

export default class SecondScreen extends Component<Props> {
  static options(props: ScreenProps): NavigatorOptions {
    return {
      topBar: {
        title: { text: props.title },
      },
    }
  }

  navigate = () => Navigator.openModal('ThirdScreen')

  render() {
    return (
      <Screen>
        <Text style={{ fontSize: 24 }}>Second Screen</Text>
        <Button title="Open Modal Stack" onPress={this.navigate} />
      </Screen>
    )
  }
}
