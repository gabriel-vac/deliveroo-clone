/* eslint-disable react-native/no-raw-text */
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import {
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
  AdjustmentsIcon,
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured"] {
          ...,
          restaurants[]->{
          ...,
            dishes[]->,
            type-> {
              name
            }
          }
        }`
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <SafeAreaView className="pt-5 bg-white">
      {/* Header */}
      <View className="flex-row items-center pb-3 mx-4 space-x-2">
        <Image
          source={{
            uri: 'https://links.papareact.com/wru',
          }}
          className="p-4 bg-gray-300 rounded-full h-7 w-7"
        />

        <View className="flex-1">
          <Text className="text-xs font-bold text-gray-400">Deliver Now!</Text>
          <Text className="text-xl font-bold">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/* Search */}
      <View className="flex-row items-center pb-2 mx-4 space-x-2">
        <View className="flex-row flex-1 p-3 space-x-2 bg-gray-200">
          <SearchIcon size={20} color="gray" />
          <TextInput
            placeholder="Restaurants and cuisines"
            keyboardType="default"
          />
        </View>
        <AdjustmentsIcon color="#00CCBB" />
      </View>

      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/* Categories Component */}
        <Categories />

        {/* Featured Rows */}

        {/* you can use a flatlist */}
        {featuredCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}

        {/* Tasty Discounts
        <FeaturedRow
          id="2"
          title="Tasty Discounts"
          description="Paid placements from our partners"
        />

        Featured
        <FeaturedRow
          id="3"
          title="Offers near you"
          description="Paid placements from our partners"
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
