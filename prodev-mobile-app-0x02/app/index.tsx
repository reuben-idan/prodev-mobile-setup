import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require('@/assets/images/background-image.png')}
          style={styles.background}
          resizeMode="cover"
        >
          <View style={styles.contentContainer}>
            {/* Company Logo */}
            <View style={styles.companyLogo}>
              <Image 
                source={require('@/assets/images/Logo.png')} 
                style={styles.logo}
                resizeMode="contain"
              />
            </View>

            {/* Text Elements */}
            <View style={styles.textGroup}>
              <Text style={styles.textLarge}>Find your favorite place here</Text>
              <Text style={styles.textSmall}>The best prices for over 2 </Text>
              <Text style={styles.textSmall}>million properties worldwide</Text>
            </View>

            {/* Button Group */}
            <View style={styles.buttonContainer}>
              <View style={styles.buttonGroup}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Join here</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.transparentButton}>
                  <Text style={styles.transparentButtonText}>Sign In</Text>
                </TouchableOpacity>
              </View>

              {/* Navigation Prompt */}
              <View style={styles.navigationPrompt}>
                <Text style={styles.navigationText}>Continue to home</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    width: '100%',
    height: windowHeight,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  companyLogo: {
    alignItems: 'center',
    marginTop: 60,
  },
  logo: {
    width: 150,
    height: 150,
  },
  textGroup: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  textLarge: {
    color: 'white',
    fontSize: 32,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 40,
  },
  textSmall: {
    color: 'white',
    fontSize: 18,
    fontWeight: '300',
    textAlign: 'center',
    lineHeight: 24,
  },
  buttonContainer: {
    paddingHorizontal: 20,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    gap: 16,
  },
  button: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
  transparentButton: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  transparentButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  navigationPrompt: {
    alignItems: 'center',
    marginTop: 10,
  },
  navigationText: {
    color: 'white',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
