import React from 'react';
import {View, Text, Image, ImageSourcePropType} from 'react-native';
import {styles} from './styles';
import {posterImage} from '../../utils';
import {updatedContentItem} from '../../utils/type';

type Props = {
  item: updatedContentItem;
};

export const MovieCard: React.FC<Props> = ({item}) => {
  const posterKey = item.poster_image.slice(0, -4) as keyof typeof posterImage;
  const url: ImageSourcePropType = posterImage[posterKey];

  return (
    <View style={styles.cardContainer}>
      <Image source={url} style={styles.posterImage} />
      <Text numberOfLines={1} style={styles.moviesName} ellipsizeMode="tail">
        {item?.name}
      </Text>
    </View>
  );
};
