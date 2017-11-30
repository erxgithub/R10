import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    overflow: 'hidden'
  },
  titleContainer: {
    flexDirection: 'row'
  },
  title: {
    flex: 1,
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    color: '#9963ea'
  },
  description: {
    fontFamily: 'Montserrat-Light',
    fontSize: 15,
    color: '#000000'
  },
  button: {},
  buttonImage: {
    width: 30,
    height: 25,
    tintColor: '#9963ea'
  },
  body: {
    paddingBottom: 10
  }
});

export default styles;
