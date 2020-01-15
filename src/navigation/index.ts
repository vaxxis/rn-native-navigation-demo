import { Options } from 'react-native-navigation'

export { default as Navigator } from './Navigator'
export { default as NavigatorScreen } from './NavigatorScreen'

export interface NavigatorOptions extends Options {}
export type ScreenProps = Record<string, any>
