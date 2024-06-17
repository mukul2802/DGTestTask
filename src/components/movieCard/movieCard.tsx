import React from 'react';
import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { styles } from './styles';
import { ImageConstants, posterImage } from '../../utils';
import { updatedContentItem } from '../../utils/type';

type Props = {
  item: updatedContentItem;
  itemWidth: number;
  addFavourite: (id: number) => void;
};

export const MovieCard: React.FC<Props> = ({ item, itemWidth, addFavourite }) => {
  const posterKey = item.poster_image.slice(0, -4) as keyof typeof posterImage;
  const url: ImageSourcePropType = posterImage[posterKey];

  return (
    <View style={[styles.cardContainer, { width: itemWidth }]}>
      <View style={styles.heartBox}>
        {item.isFavourite ? (
          <TouchableOpacity onPress={() => addFavourite(item?.id)}>
            <Image source={ImageConstants.redHeart as ImageSourcePropType} style={styles.favIcon} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => addFavourite(item.id)}>
            <Image source={ImageConstants.heart as ImageSourcePropType} style={styles.favIcon} />
          </TouchableOpacity>
        )}
      </View>
      <Image source={url} style={styles.posterImage} />
      <Text numberOfLines={1} style={styles.moviesName}>
        {item?.name}
      </Text>
    </View>
  );
};
