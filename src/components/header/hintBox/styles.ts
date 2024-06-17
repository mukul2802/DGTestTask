import { StyleSheet } from 'react-native';
import { Colors, FontFamily } from '../../../theme';
import { moderateScale } from '../../../utils';

export const styles = StyleSheet.create({
  hintBox: {
    position: 'absolute',
    top: moderateScale(50.3),
    right: moderateScale(-1),
    padding: moderateScale(10),
    borderWidth: 1,
    borderTopWidth: 0,
    borderBottomLeftRadius: moderateScale(8),
    borderBottomRightRadius: moderateScale(8),
    minHeight: moderateScale(40),
    maxHeight: moderateScale(120),
    width: moderateScale(316.9),
    backgroundColor: Colors.WHITE,
  },
  itemBox: {
    paddingVertical: moderateScale(5),
  },
  title: {
    color: Colors.BLACK,
    fontSize: moderateScale(16),
    fontFamily: FontFamily.TitilliumWebRegular,
  },
  separator: {
    height: moderateScale(1),
    backgroundColor: Colors.LightGray
  },
  emptyMessageStyle: {
    color: Colors.DANGER,
    fontSize: moderateScale(16),
    fontFamily: FontFamily.TitilliumWebRegular,
  }
});
