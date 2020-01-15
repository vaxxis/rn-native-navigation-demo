import { Component } from 'react'
import { ScreenName } from '../screens'

import { ScreenProps, NavigatorOptions } from './index'
import Navigator from './Navigator'

interface Props {
  componentId?: string
}

export default class NavigatorScreen<P extends Props, S = {}, SS = any> extends Component<P, S, SS> {
  static options(_: Props): NavigatorOptions {
    return {}
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
