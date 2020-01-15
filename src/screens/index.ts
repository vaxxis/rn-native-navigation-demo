import FirstScreen from './FirstScreen'
import SecondScreen from './SecondScreen'
import ThirdScreen from './ThirdScreen'

const screens = {
  FirstScreen: { component: FirstScreen },
  SecondScreen: { component: SecondScreen },
  ThirdScreen: { component: ThirdScreen },
}

export type ScreenName = keyof typeof screens
export default screens
