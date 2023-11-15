import { StyleSheet } from 'react-native';

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    width: '80%',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  webview: {
    width: 400, // 화면을 꽉 채우도록 스타일 설정
  },

  backgroundImage: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overlayColor: 'rgba(0, 0, 0, 0.8)', // 필터 색상 및 투명도 조절
  },


});




export default appStyles;