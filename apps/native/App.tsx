import { View } from '@repo/ui/design/view'
import { Text } from '@repo/ui/design/typography'
import { useState } from 'react'
import WebView from 'react-native-webview'
import { useScreen } from './hooks/use-screen'

export interface LatLngProps {
    lat: number
    lng: number
}

export default function Native() {
    const { width } = useScreen()
    const defaulLat = -6.296336
    const defaulLng = 106.9318626
    const MAP_URL = `http://192.168.1.15:3000/` // * Change this address to your web map address

    const [postion, setPostion] = useState<LatLngProps>({
        lat: defaulLat,
        lng: defaulLng,
    })

    const injectedJavascript = `
    var meta = document.createElement('meta');
        meta.setAttribute('name', 'viewport');
        meta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
        document.getElementsByTagName('head')[0].appendChild(meta);

    (function() {
        window.postMessage = function(data) {
        window.ReactNativeWebView.postMessage(data);
        };
    })()`

    return (
        <View className="flex-1">
            <View className="w-full h-[80px] flex justify-end items-center pb-2 bg-blue-300">
                <Text className="font-bold text-xl">Map</Text>
            </View>
            <WebView
                style={{ width: '100%', height: '100%', maxWidth: width }}
                source={{
                    uri: MAP_URL,
                }}
                onMessage={(event) => {
                    const dataStr = event?.nativeEvent?.data
                    const data: LatLngProps = JSON.parse(dataStr)
                    console.log({ data })
                    setPostion({ lat: data.lat, lng: data.lng })
                }}
                javaScriptEnabled={true}
                javaScriptCanOpenWindowsAutomatically={true}
                domStorageEnabled={true}
                cacheEnabled={true}
                allowFileAccess={true}
                allowFileAccessFromFileURLs={true}
                cacheMode="LOAD_DEFAULT"
                androidLayerType="software"
                injectedJavaScript={injectedJavascript}
            />
        </View>
    )
}
