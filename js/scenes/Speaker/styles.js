import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  presenter: {
    margin: 15
  },
  picture: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  avatar: {
    height: 140,
    width: 140,
    borderRadius: 70
  },
  speaker: {
    alignItems: 'center',
    paddingBottom: 15
  },
  name: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 30,
    fontWeight: 'bold'
  },
  bio: {
    fontFamily: 'Montserrat-Light',
    fontSize: 18
  },
  button: {
    backgroundColor: '#9963ea',
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30
  },
  readMore: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    paddingTop: 10,
    paddingBottom: 10,
    color: '#ffffff'
  }
});

export default styles;
