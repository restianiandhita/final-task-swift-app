import {MAX_WIDTH, padding, margin} from '@app/styles/mixins';
import {StyleSheet} from 'react-native';
import {Colors} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    width: MAX_WIDTH,
    justifyContent: 'center',
    flexGrow: 1,
  },
  parent: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 30,
    marginLeft: 5,
    marginRight: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    textAlign: 'center',
    color: 'black',
    paddingTop: 10,
  },
  caption: {
    paddingHorizontal: 20,
    textAlign: 'center',
    color: 'black',
  },
  textInputFrame: {width: MAX_WIDTH, ...padding(0, 25, 0, 25)},
  textInput: {backgroundColor: Colors.white},
  btnSignin: {width: 150, ...margin(20, 0, 0, 0)},
  btnSignup: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: 'black',
  },
  logoImage: {
    alignSelf: 'center',
    resizeMode: 'contain',
    ...margin(0, 0, 20, 0),
    width: 300,
  },
  footerForm: {
    marginTop: -55,
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: 2,
  },
});

export default styles;
