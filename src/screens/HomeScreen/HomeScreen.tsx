import React, {useCallback, useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import {styles} from './styles';
import {fetchData, updatedContentItem} from '../../utils';
import Header from '../../components/header/header';
import {MovieCard} from '../../components/movieCard';

let idCount: number = 1;
export const HomeScreen: React.FC = () => {
  const [movies, setMovies] = useState<updatedContentItem[]>([]);
  const [searchedMovies, setSearchedMovies] = useState<updatedContentItem[]>(
    [],
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLoadMore = async () => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    const newMovies = await fetchData(currentPage);
    const updatedData = newMovies?.page['content-items'].content.map(item => {
      return {
        id: idCount++,
        name: item.name,
        poster_image: item['poster-image'],
        isFavourite: false,
      };
    });
    setMovies(prevMovies => [...prevMovies, ...updatedData]);
    setSearchedMovies(prevMovies => [...prevMovies, ...updatedData]);
    setCurrentPage(currentPage + 1);
    setIsLoading(false);
  };

  const handleSearch = useCallback((t: string) => {
    if (t === '') {
      setSearchedMovies(movies);
    } else {
      const filtered = movies.filter(movie =>
        movie.name.toLowerCase().includes(t.toLowerCase()),
      );
      setSearchedMovies(filtered);
    }
  }, [movies]);

  const renderMovieCard = useCallback(({ item }) => <MovieCard item={item} />, []);

  const keyExtractor = useCallback((item, index) => index.toString(), []);
  
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Header onSearch={(t: string) => handleSearch(t)} suggestion={movies} />
        <FlatList
          data={searchedMovies}
          keyExtractor={keyExtractor}
          renderItem={renderMovieCard}
          numColumns={3}
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          columnWrapperStyle={styles.coloumGap}
          onEndReached={() => handleLoadMore()}
          onEndReachedThreshold={0.5}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
        {isLoading && (
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        )}
      </View>
    </View>
  );
};
