import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';
import sanityClient, { urlFor } from '../sanity';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "category"]
      `
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
      //   className="bg-red-200"
    >
      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          id={category._id}
          imgUrl={urlFor(category.image).url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
