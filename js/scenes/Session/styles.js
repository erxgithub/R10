import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  session: {
    margin: 10
  },
  location: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    color: '#999999',
    paddingBottom: 10
  },
  title: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 10
  },
  time: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#cf392a',
    paddingBottom: 10
  },
  description: {
    fontFamily: 'Montserrat-Light',
    fontSize: 20,
    paddingBottom: 10
  },
  presented: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    color: '#999999',
    paddingTop: 10,
    paddingBottom: 10
  },
  presenter: {
    flexDirection: 'row'
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 30
  },
  speaker: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  name: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 10
  },
  separator: {
    paddingTop: 15,
    paddingBottom: 10
  },
  button: {
    backgroundColor: '#9963ea',
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 50,
    marginRight: 50
  },
  remove: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    color: '#ffffff'
  }
});

export default styles;
