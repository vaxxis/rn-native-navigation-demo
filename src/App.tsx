import AppScreens from './screens'
import Navigator from './navigation/Navigator'

// Dynamically register application screens (found in ./screens/index.ts)
Navigator.registerScreens(AppScreens)

// Start Navigator Instance
Navigator.initWithDefaultOptions({
  initialScreen: 'FirstScreen',
})
