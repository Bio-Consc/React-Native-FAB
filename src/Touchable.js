import React, { PropTypes } from 'react';
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import {
  IS_ANDROID,
  IS_LT_LOLLIPOP,
  noop,
} from './utils';

const Touchable = ({ onPress, style, buttonColor, children }) => {
  if (IS_ANDROID && !IS_LT_LOLLIPOP) {
    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
        onPress={onPress}
      >
        <View
          style={[
            style, {
              backgroundColor: buttonColor,
            },
          ]}
        >
          {children}
        </View>
      </TouchableNativeFeedback>
    );
  }
  else {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          style, {
            backgroundColor: buttonColor,
          },
        ]}
      >
        {children}
      </TouchableOpacity>
    );
  }
};

Touchable.propTypes = {
  onPress: PropTypes.func.isRequired,
  style: View.propTypes.style,
  buttonColor: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Touchable.defaultProps = {
  onPress: noop,
  style: {},
  buttonColor: 'red',
};

export default Touchable;
