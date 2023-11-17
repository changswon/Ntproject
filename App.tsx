import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import WebView from 'react-native-webview';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info';
import styles from './styles/styles';

const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkMemberAndOpenWebView = async () => {
      const collectedPhoneNumber = DeviceInfo.getPhoneNumber();

      try {
        const response = await fetch('http://mnote.gana21.com/api/common/login_test_api.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ phoneNumber: collectedPhoneNumber  }),
        });

        const result = await response.json();

        const isMember = result.status;

        console.log(isMember);

        if (isMember) {
          console.log("성공!!!");
          setIsLoading(false);
        } else {
          // 회원이 아니면 처리 (예: 알림 메시지 등)
          console.log('User is not a member.');
          navigation.navigate('Registration'); // 회원 등록 페이지로 이동
        }
      } catch (error) {
        console.error('Error checking member:', error);
        setIsLoading(false);
      }
    };

    checkMemberAndOpenWebView();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <WebView
          source={{ uri: 'http://mnote.gana21.com/?device=mobile' }}
          style={{ flex: 1 }}
        />
      )}
    </View>
  );
};

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
          <Text style={styles.text}>회원 등록이 필요합니다.</Text>
          <Text style={styles.additionalText}>문의전화 010-9873-1412</Text>
      {/* 여기에 회원 등록 관련 UI 또는 로직을 추가하세요 */}
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;