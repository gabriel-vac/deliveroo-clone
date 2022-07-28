import React, { useLayoutEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const RestaurantScreen = () => {
  const navigation = useNavigation();

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <ScrollView>
      <Text>{title}</Text>
    </ScrollView>
  );
};

export default RestaurantScreen;
