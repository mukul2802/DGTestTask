import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {updatedContentItem} from '../../../utils/type';
import {HintBox} from '../hintBox';
import {Colors} from '../../../theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {moderateScale} from '../../../utils';

interface SearchInputProps {
  search: string;
  setSearch: (text: string) => void;
  onSearch: (t: string) => void;
  setIsSearching: (t: boolean) => void;
  suggestion: updatedContentItem[];
}

const SearchInput: React.FC<SearchInputProps> = ({
  search,
  setSearch,
  onSearch,
  suggestion,
  setIsSearching,
}) => {
  const [searchedHints, setSearchedHints] = useState<updatedContentItem[]>([]);
  const [hintBox, setHintBox] = useState<boolean>(false);

  const handleSearch = (text: string) => {
    if (text.length === 0) {
      onSearch('');
    }
    const filtered = suggestion.filter(movie =>
      movie.name.toLowerCase().includes(text.toLowerCase()),
    );
    setSearchedHints(filtered);
    setSearch(text);
    setHintBox(true);
  };

  return (
    <>
      <View style={styles.container}>
        <TextInput
          placeholder="Search movies ..."
          style={styles.input}
          onChangeText={handleSearch}
          placeholderTextColor={Colors.LightGray}
          value={search}
          maxLength={15}
        />
        <TouchableOpacity
          style={styles.close}
          onPress={() => {
            setSearch('');
            onSearch('');
            setIsSearching(false);
          }}>
          <Icon name="close" size={moderateScale(20)} color={Colors.BLACK} />
        </TouchableOpacity>
      </View>
      {search.trim().length !== 0 && hintBox && (
        <HintBox
          searchedHints={searchedHints}
          setSearch={setSearch}
          onSearch={onSearch}
          setHintBox={setHintBox}
          setIsSearching={setIsSearching}
        />
      )}
    </>
  );
};

export default SearchInput;
