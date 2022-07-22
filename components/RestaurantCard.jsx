/* eslint-disable react-native/no-raw-text */
import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StarIcon } from 'react-native-heroicons/solid';
import { LocationMarkerIcon } from 'react-native-heroicons/outline';
import { urlFor } from '../sanity';

const RestaurantCard = ({
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
}) => {
  return (
    <TouchableOpacity className="w-64 mr-3 bg-white shadow">
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        className="w-64 rounded-sm h-36"
      />

      <View className="px-3 pb-4">
        <Text className="pt-2 text-lg font-bold">{title}</Text>
        <View className="flex-row items-center space-x-2">
          <StarIcon color="green" opacity={0.5} size={12} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> · {genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-1">
          <LocationMarkerIcon color="gray" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">Nearby · {address} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
