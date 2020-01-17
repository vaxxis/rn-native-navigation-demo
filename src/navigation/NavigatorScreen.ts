import { Component } from 'react'
import { ScreenName } from '../screens'

import { ScreenProps, NavigatorOptions } from './index'
import Navigator from './Navigator'
import { Navigation } from 'react-native-navigation'

interface Props {
  componentId?: string
}

export default class NavigatorScreen<P extends Props, S = {}, SS = any> extends Component<P, S, SS> {
  navigationEventListener: any

  static navigatorOptions(_: Props): NavigatorOptions {
    return {}
  }

  constructor(props: any) {
    super(props)
    this.navigationEventListener = Navigation.events().bindComponent(this)
  }

  componentWillUnmount() {
    this.navigationEventListener && this.navigationEventListener.remove()
  }

  screenDidAppear() {}
  screenDidDisappear() {}

  // hide original navigator option call
  private static options(props: Props): NavigatorOptions {
    return this.navigatorOptions(props)
  }

  // hide original navigator componentDidAppear call
  private componentDidAppear() {
    this.screenDidAppear()
  }

  // hide original navigator componentDidDisappear call
  private componentDidDisappear() {
    this.screenDidDisappear()
  }

  public navigation = {
    push: (screenName: ScreenName, props: ScreenProps = {}) => {
      Navigator.push(this.props.componentId!, screenName, props)
    },
    pop: () => {
      Navigator.pop(this.props.componentId!)
    },
    openModal: (screenName: ScreenName, props: ScreenProps = {}) => {
      Navigator.openModal(screenName, props)
    },
    closeModal: () => {
      Navigator.closeModal(this.props.componentId!)
    },
  }
}
