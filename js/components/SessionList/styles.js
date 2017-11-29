import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  time: {
    backgroundColor: '#e6e6e6',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  session: {
    margin: 10
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 10
  },
  location: {
    fontSize: 15,
    color: '#999999'
  },
  favourite: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default styles;
