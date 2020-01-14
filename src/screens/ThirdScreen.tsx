import React, { Component } from 'react'
import { Text, Button } from 'react-native'
import { Screen } from '../components'
import Navigator, { NavigatorOptions, ScreenProps } from '../Navigator'

interface Props {
  componentId: string
}

export default class ThirdScreen extends Component<Props> {
  static options(_: ScreenProps): NavigatorOptions {
    return {
      topBar: {
        title: { text: 'Third Screen' },
      },
    }
  }

  navigate = () => Navigator.push(this.props.componentId, 'ThirdScreen')

  render() {
    return (
      <Screen>
        <Text style={{ fontSize: 24 }}>Third Screen</Text>
        <Button title="Open Stack Screen" onPress={this.navigate} />
      </Screen>
    )
  }
}
