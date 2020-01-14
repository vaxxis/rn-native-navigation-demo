import React, { Component } from 'react'
import { Text, Button } from 'react-native'
import { Screen } from '../components'
import Navigator, { NavigatorOptions } from '../Navigator'

interface Props {
  componentId: string
}

export default class FirstScreen extends Component<Props> {
  static options(): NavigatorOptions {
    return {
      topBar: {
        title: { text: 'First' },
      },
    }
  }

  navigate = () => {
    Navigator.push(this.props.componentId, 'SecondScreen', {
      title: 'Second Screen Changed',
    })
  }

  render() {
    return (
      <Screen>
        <Text style={{ fontSize: 24 }}>First Screen</Text>
        <Button title="Go to Second Screen" onPress={this.navigate} />
      </Screen>
    )
  }
}
