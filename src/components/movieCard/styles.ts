import {StyleSheet} from 'react-native';
import {Colors, FontFamily} from '../../theme';
import {moderateScale} from '../../utils';

export const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Colors.BLACK,
    alignItems: 'center',
    overflow: 'hidden',
    width: moderateScale(110),
  },
  posterImage: {
    height: moderateScale(180),
    aspectRatio: 0.67,
  },
  moviesName: {
    fontSize: moderateScale(15),
    fontFamily: FontFamily.TitilliumWebLight,
    color: Colors.WHITE,
    alignSelf: 'flex-start',
  },
});
