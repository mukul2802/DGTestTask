import { StyleSheet } from 'react-native';
import { moderateScale } from '../../../utils';
import { Colors } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    height: moderateScale(50),
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: moderateScale(20)
  },
  input: {
    borderRadius: moderateScale(5),
    height: moderateScale(40),
    paddingHorizontal: moderateScale(5),
    backgroundColor: Colors.WHITE,
    color: Colors.BLACK,
    width: moderateScale(265),
    marginHorizontal: moderateScale(5),
  },
  close: { 
    height: moderateScale(50), 
    justifyContent: 'center', 
    alignItems: 'center', 
    width: moderateScale(40) 
  }
});
