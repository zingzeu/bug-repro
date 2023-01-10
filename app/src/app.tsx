import React, {Component} from 'react';
import Taro from '@tarojs/taro';
import {Provider} from 'react-redux';

Taro.cloud.init();

class App extends Component {
  componentDidMount() {
    initInterceptors();
    loadFonts();

    // iOS 设备如果侧边的静音开关打开，默认情况播放会无声。此设置忽略 iOS 的静音开关。
    // 参见 https://developers.weixin.qq.com/community/develop/doc/0004a810988f50e89a37fe5f45b000
    Taro.setInnerAudioOption({
      obeyMuteSwitch: false,
    });
  }

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Provider>{this.props.children}</Provider>;
  }
}

export default App;
