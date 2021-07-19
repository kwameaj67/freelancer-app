import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
          // 'black': require('../assets/fonts/TTNormsPro-Black.woff'),
          // 'ExtraBold': require('../assets/fonts/TTNormsPro-ExtraBold.woff'),
          // 'Bold': require('../assets/fonts/TTNormsPro-Bold.woff'),
          // 'Medium': require('../assets/fonts/TTNormsPro-Medium.woff'),
          // 'Regular': require('../assets/fonts/TTNormsPro-Regular.woff'),
         
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
