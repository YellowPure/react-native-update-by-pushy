/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Platform,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Linking,
} from 'react-native';

import FileTransfer from 'react-native-file-transfer';



class AwesomeProject extends Component {

  componentWillMount() {
    let fileTransfer = new FileTransfer();
    fileTransfer.onprogress = (progress) => {
      console.log(parseInt(progress.loaded * 100 / progress.total));
    }

    // url：新版本bundle的zip的url地址
    // bundlePath：存在新版本bundle的路径
    // unzipJSZipFile：下载完成后执行的回调方法，这里是解压缩zip
    fileTransfer.download(url, bundlePath, unzipJSZipFile, (err) => {
        console.log(err);
      }, true
    );
  }

  doUpdate = (info) => {
    
  }

  checkUpdate = () => {
  
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          欢迎使用热更新服务
        </Text>
        <Text style={styles.instructions}>
          这是版本一 {'\n'}
        </Text>
        <TouchableOpacity onPress={this.checkUpdate}>
          <Text style={styles.instructions}>
            点击这里检查更新
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
