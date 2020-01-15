import { Navigation as NativeNavigation } from 'react-native-navigation'
import { ScreenName } from '../screens'

type ScreensMap = Record<ScreenName, any>

class Navigator {
  registerScreens(screens: ScreensMap) {
    for (let [screenId, screenObj] of Object.entries(screens)) {
      NativeNavigation.registerComponent(screenId, () => screenObj.component)
    }
  }

  push(componentId: string, screenName: string, props: Record<string, any> = {}) {
    return NativeNavigation.push(componentId, {
      component: {
        name: screenName,
        passProps: props,
      },
    })
  }

  pop(componentId: string) {
    return NativeNavigation.pop(componentId)
  }

  popToRoot(componentId: string) {
    return NativeNavigation.popToRoot(componentId)
  }

  openModal(screenName: string, props: Record<string, any> = {}) {
    return NativeNavigation.showModal({
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
    return NativeNavigation.dismissModal(componentId)
  }

  setStackRoot(componentId: string, screenName: string, props: Record<string, any> = {}) {
    return NativeNavigation.setStackRoot(componentId, {
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
