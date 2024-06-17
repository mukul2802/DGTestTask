import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { styles } from './styles';
import { fetchData, getDimensions, updatedContentItem } from '../../utils';
import Header from '../../components/header/header';
import { MovieCard } from '../../components/movieCard';

let idCount: number = 1;
let isSearched: boolean = false;
export const HomeScreen: React.FC = () => {
  const [movies, setMovies] = useState<updatedContentItem[]>([]);
  const [searchedMovies, setSearchedMovies] = useState<updatedContentItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const numColumns = 3;
  const { width: screenWidth } = getDimensions();
  const itemMargin = 10;
  const itemWidth = (screenWidth - (numColumns + 1) * itemMargin) / numColumns;


  const handleLoadMore = async () => {
    if (isLoading) {
      return
    }
    setIsLoading(true)
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
    setCurrentPage(currentPage + 1)
    setIsLoading(false)

  };

  const handleSearch = (t: string, isSearching: boolean) => {
    if (t === '') {
      setSearchedMovies(movies);
      isSearched = isSearching;
    } else {
      const filtered = movies.filter(movie =>
        movie.name.toLowerCase().includes(t.toLowerCase()),
      );
      setSearchedMovies(filtered);
      isSearched = isSearching;
    }
  };

  const addFavourite = (itemId: number) => {
    let updatedMovieList = movies.map(item => {
      if (item.id === itemId) {
        return {
          ...item,
          isFavourite: !item.isFavourite,
        };
      }
      return item;
    });
    setMovies(updatedMovieList);
    setSearchedMovies(updatedMovieList);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Header
          onSearch={(t: string, isSearching: boolean) =>
            handleSearch(t, isSearching)
          }
          suggestion={movies}
        />
        <FlatList
          data={searchedMovies}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <MovieCard
              item={item}
              itemWidth={itemWidth}
              addFavourite={addFavourite}
            />
          )}
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
        {isLoading &&
          <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        }
      </View>
    </View>
  );
};
