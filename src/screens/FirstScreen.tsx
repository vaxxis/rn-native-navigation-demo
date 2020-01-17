import React from 'react'
import { Text, Button } from 'react-native'
import { NavigatorScreen, NavigatorOptions } from '../navigation'
import { Screen } from '../components'

interface Props {}
interface State {}

export default class FirstScreen extends NavigatorScreen<Props, State> {
  static navigatorOptions(_: Props): NavigatorOptions {
    return { topBar: { title: { text: 'First' } } }
  }

  componentDidMount() {}
  screenDidAppear() {}
  screenDidDisappear() {}

  goToSecond = () => {
    // simple push navigation with props
    this.navigation.push('SecondScreen', {
      title: 'Second Screen Title',
      subtitle: 'Navbar subtitle',
      message: 'Lorem ipsum dolor sit amet',
    })
  }

  render() {
    return (
      <Screen scroll center>
        <Text style={{ fontSize: 24 }}>First Screen</Text>
        <Button title="Go to Second Screen" onPress={this.goToSecond} />
      </Screen>
    )
  }
}
