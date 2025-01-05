import { Dimensions } from 'react-native'

export function useScreen() {
    const { width, height } = Dimensions.get('screen')
    const isSmallScreenHeight = height <= 640
    return { width, height, isSmallScreenHeight }
}
