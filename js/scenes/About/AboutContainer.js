import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchConduct } from '../../redux/modules/conduct';
import { FlatList, Text, View, Image, ActivityIndicator } from 'react-native';
import { About } from './About';

class AboutContainer extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     data: [],
  //     isLoading: true
  //   };
  // }

  // componentDidMount() {
  //   let url = 'https://r10app-95fea.firebaseio.com/code_of_conduct.json';

  //   fetch(url)
  //     // if fetch is successful, read our JSON out of the response
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({ data });
  //     })
  //     .catch(error => console.log(`Error fetching JSON: ${error}`));
  // }

  // componentDidUpdate() {
  //   if (this.state.data && this.state.isLoading) {
  //     this.setState({ isLoading: false });
  //   }
  // }

  static route = {
    navigationBar: {
      title: 'About'
    }
  };

  componentWillMount() {
    this.props.dispatch(fetchConduct());
  }

  render() {
    // console.log('isloading', this.props.conductData);
    if (this.props.isLoading) {
      return <ActivityIndicator animating={true} size="small" color="black" />;
    } else {
      return (
        <About
          conductData={this.props.conductData}
          isLoading={this.props.isLoading}
        />
      );
    }
  }
}

const mapStateToProps = ({ conduct }) => ({
  conductData: conduct.conductData,
  isLoading: conduct.isLoading
});

//export default AboutContainer;
export default connect(mapStateToProps)(AboutContainer);
