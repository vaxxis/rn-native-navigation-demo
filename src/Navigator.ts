import {
  Navigation as NativeNavigation,
  Options,
} from 'react-native-navigation'

export interface NavigatorOptions extends Options {}
export type ScreenProps = Record<string, any>

class Navigator {
  registerScreens(screens: any) {
    screens.forEach((screen: any) => {
      NativeNavigation.registerComponent(screen.id, () => screen.component)
    })
  }

  push(
    componentId: string,
    screenName: string,
    props: Record<string, any> = {},
  ) {
    NativeNavigation.push(componentId, {
      component: {
        name: screenName,
        passProps: props,
      },
    })
  }

  pop(componentId: string) {
    NativeNavigation.pop(componentId)
  }

  openModal(screenName: string, props: Record<string, any> = {}) {
    NativeNavigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: screenName,
              passProps: props,
            },
          },
        ],
      },
    })
  }

  closeModal(componentId: string) {
    NativeNavigation.dismissModal(componentId)
  }

  setStackRoot(
    componentId: string,
    screenName: string,
    props: Record<string, any> = {},
  ) {
    NativeNavigation.setStackRoot(componentId, {
      component: {
        name: screenName,
        passProps: props,
      },
    })
  }

  initWithDefaultOptions({ initialScreen }: { initialScreen: string }) {
    NativeNavigation.events().registerAppLaunchedListener(() => {
      // init default navigator
      NativeNavigation.setDefaultOptions({
        statusBar: {
          visible: true,
          style: 'light',
        },
        topBar: {
          visible: true,
          background: {
            color: '#f5f5f5',
          },
          title: {
            fontSize: 18,
          },
          subtitle: {
            // color: 'rgba(255, 255, 255, 0.8)',
          },
        },
        layout: {
          backgroundColor: '#222',
          orientation: ['portrait'],
        },
      })

      NativeNavigation.setRoot({
        root: {
          stack: {
            children: [
              {
                component: {
                  name: initialScreen,
                },
              },
            ],
          },
        },
      })
    })
  }
}

export default new Navigator()
