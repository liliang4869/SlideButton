import React,{Component} from 'react';
import {
    View,
    Animated,
    Text,
    StyleSheet,
    TouchableOpacity,
    PanResponder,
    Dimensions
} from 'react-native'
var {height,width}=Dimensions.get('window');
export default class SlideButton extends Component {
    componentWillMount(){
        this.state={open:false,
        offset:new Animated.Value(0)};
        this.preOffset=0;
        this.panResponder=PanResponder.create({
             onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,
      onPanResponderGrant: (evt, gestureState) => {
          this.preOffset=this.state.offset._value;
      },
      onPanResponderMove: (evt, gestureState) => {
          console.log('move')
           let {dx}=gestureState;
           let exViewWidth=this.props.exViewStyle.width==undefined?width*0.2:this.props.exViewStyle.width;
          let cdx=dx+this.preOffset;
          if(cdx<-0.5*exViewWidth || cdx>1.5*exViewWidth)return;
          else Animated.timing(this.state.offset,{toValue:cdx,duration:0}).start();
      },
      onPanResponderTerminationRequest: (evt, gestureState) => false,
      onPanResponderRelease: (evt, gestureState) => {
          console.log('release')
          let {dx}=gestureState;
           let exViewWidth=this.props.exViewStyle.width==undefined?width*0.2:this.props.exViewStyle.width;
         let cdx=dx+this.preOffset;
         if(cdx>-0.5*exViewWidth){this.state.open=false;Animated.spring(this.state.offset,{toValue:0}).start();}
         else {
             this.state.open=true;Animated.spring(this.state.offset,{toValue:-1*exViewWidth}).start();
         }
      }
        })
        
    }
    render(){
        return (
            <View style={[{height:height*0.1,width:width,backgroundColor:'white'},this.props.style,{flexDirection:'row'}]}
            {...this.panResponder.panHandlers}>
                <Animated.View style={[{height:height*0.1,width:width,backgroundColor:'white',justifyContent:'center',alignItems:'center',
                transform:[{translateX:this.state.offset}]},this.props.style]}>
                    {this.props.children}
                </Animated.View>
                <Animated.View style={[{height:height*0.1,width:width*0.2,backgroundColor:'#eeeeee',justifyContent:'center',alignItems:'center',transform:[{translateX:this.state.offset}]},this.props.exViewStyle]}>{this.props.exView}</Animated.View>
                </View>
        )
    }
}
SlideButton.defaultProps={
    style:{height:height*0.1,width:width,backgroundColor:'white'},
    exView:<View style={{height:height*0.1,width:width*0.2,backgroundColor:'#740210'}}/>,
    exViewStyle:{height:height*0.1,width:width*0.2}
}