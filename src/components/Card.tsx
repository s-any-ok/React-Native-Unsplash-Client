import React, {useEffect} from 'react';
import {
  Share,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Animated,
  GestureResponderEvent,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, removeFavorite} from '../state/favorites/actions';
import {UnsplashItem} from '../state/images/types';
import {getImageSrc} from '../utils/images';
import {ApplicationState} from '../state';
// @ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';

export function Card(props: {
  key: string;
  favorite: boolean;
  item: UnsplashItem;
  navigation: any;
}) {
  const id = props.item.id;
  const dispatch = useDispatch();

  const onShare = async () => {
    try {
      const description = props.item.description
        ? `\n${props.item.description}`
        : '';

      await Share.share({
        message: `Check out this cool picture at Unsplash:\n\n${props.item.links.html}${description}`,
      });
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const favorites = useSelector(
    (state: ApplicationState) => state.favorites.data,
  );

  useEffect(() => {
    if (favorites.find((image: UnsplashItem) => image.id === id) === undefined)
      setFavorite(false);
  }, [favorites]);

  const handleImageClicked = (event: GestureResponderEvent) => {
    props.navigation.navigate('ViewImage', {item: props.item});
  };

  const handleHeartPressed = (event: GestureResponderEvent) => {
    if (!isFavorite) {
      dispatch(addFavorite(props.item));
    } else {
      dispatch(removeFavorite(props.item));
    }
    setFavorite(!isFavorite);
  };

  const [isFavorite, setFavorite] = React.useState(props.favorite);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width: '100%',
          height: '100%',
          maxHeight: '100%',
        }}>
        <Text style={styles.credits}>{props.item.user.name}</Text>

        <Text numberOfLines={1} style={styles.description}>
          {props.item.description || 'No description'}
        </Text>

        <Text style={styles.likes}>
          <Ionicons
            style={{width: 20}}
            name="ios-thumbs-up"
            color={'#ffffff'}
            size={16}
          />
          {props.item.likes}
        </Text>

        <ImageBackground
          source={{uri: getImageSrc(props.item)}}
          style={styles.image}>
          <View
            style={{
              backgroundColor: 'transparent',
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              flexDirection: 'row',
              marginRight: 20,
              marginBottom: 20,
            }}>
            <TouchableOpacity
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
              }}
              onPress={handleImageClicked}
            />
            <TouchableOpacity onPress={onShare}>
              <Ionicons
                style={{marginRight: 10}}
                name={'md-share'}
                color={'#fff'}
                size={36}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleHeartPressed}>
              <Ionicons
                style={{}}
                name={isFavorite ? 'heart-sharp' : 'heart-outline'}
                color={'#ff0000'}
                size={38}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '90%',
    minHeight: 220,
    height: 220,
    marginBottom: 20,
    backgroundColor: 'lightgray',
    borderWidth: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    overflow: 'hidden',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    zIndex: -1,
  },

  likes: {
    position: 'absolute',
    right: 15,
    top: 15,
    fontSize: 16,
    fontWeight: 'normal',
    textShadowColor: '#000',
    textShadowRadius: 4,
    fontStyle: 'italic',
    color: 'white',
  },

  description: {
    position: 'absolute',
    width: '60%',
    left: 15,
    top: 15,
    fontSize: 16,
    fontWeight: 'normal',
    textShadowColor: '#000',
    textShadowRadius: 4,
    fontStyle: 'italic',
    color: 'white',
  },

  credits: {
    position: 'absolute',
    left: 15,
    bottom: 15,
    fontSize: 16,
    fontWeight: 'normal',
    textShadowColor: '#000',
    textShadowRadius: 4,
    fontStyle: 'italic',
    color: 'white',
  },
});
