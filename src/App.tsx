import AppScreens from './screens'
import Navigator from './Navigator'

// Dynamically register application screens (found in ./screens/index.js)
Navigator.registerScreens(AppScreens)

// Start Navigator Instance
Navigator.initWithDefaultOptions({
  initialScreen: 'FirstScreen',
})
