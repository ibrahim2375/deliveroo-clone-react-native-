import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Category card */}
      <CategoryCard imgUrl='https://th.bing.com/th/id/R.a7e6e749e18a9102a49bba450d5d477f?rik=y6o8m9C2ltevWA&riu=http%3a%2f%2fblog.hdwallsource.com%2fwp-content%2fuploads%2f2015%2f01%2ffood-wallpaper-5777-5942-hd-wallpapers.jpg&ehk=VbAvSVkflThjPWBkjqFB3Z1vjps1ZyRqUR8boO0gS80%3d&risl=&pid=ImgRaw&r=0' title='fruites'/>
      <CategoryCard imgUrl='https://th.bing.com/th/id/R.e23a05a168dc24e29b36456cb25e12f1?rik=g4gGLRT55%2b6unQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-dV1rgtcLXZ8%2fTyb6tHeahsI%2fAAAAAAAADkM%2fY6qVQDuHxac%2fs1600%2fBest-top-desktop-food-wallpapers-hd-food-wallpaper-food-pictures-image-photo-1.jpg&ehk=xtpyUY6g1mVM7yudEcW47RjAgzZTziCAk9l%2fYsJVYDE%3d&risl=&pid=ImgRaw&r=0' title='pizza'/>
      <CategoryCard imgUrl='https://www.pixelstalk.net/wp-content/uploads/2016/08/Fresh-hot-delicious-food-wallpaper.jpg' title='meats'/>
      <CategoryCard imgUrl='https://www.pixelstalk.net/wp-content/uploads/2016/08/Fresh-hot-delicious-food-wallpaper.jpg' title='meats'/>
      <CategoryCard imgUrl='https://www.pixelstalk.net/wp-content/uploads/2016/08/Fresh-hot-delicious-food-wallpaper.jpg' title='meats'/>
      <CategoryCard imgUrl='https://www.pixelstalk.net/wp-content/uploads/2016/08/Fresh-hot-delicious-food-wallpaper.jpg' title='meats'/>
      <CategoryCard imgUrl='https://www.pixelstalk.net/wp-content/uploads/2016/08/Fresh-hot-delicious-food-wallpaper.jpg' title='meats'/>
      <CategoryCard imgUrl='https://www.pixelstalk.net/wp-content/uploads/2016/08/Fresh-hot-delicious-food-wallpaper.jpg' title='meats'/>
      <CategoryCard imgUrl='https://www.pixelstalk.net/wp-content/uploads/2016/08/Fresh-hot-delicious-food-wallpaper.jpg' title='meats'/>
      <CategoryCard imgUrl='https://www.pixelstalk.net/wp-content/uploads/2016/08/Fresh-hot-delicious-food-wallpaper.jpg' title='meats'/>
      <CategoryCard imgUrl='https://www.pixelstalk.net/wp-content/uploads/2016/08/Fresh-hot-delicious-food-wallpaper.jpg' title='meats'/>
      <CategoryCard imgUrl='https://www.pixelstalk.net/wp-content/uploads/2016/08/Fresh-hot-delicious-food-wallpaper.jpg' title='meats'/>
      <CategoryCard imgUrl='https://www.pixelstalk.net/wp-content/uploads/2016/08/Fresh-hot-delicious-food-wallpaper.jpg' title='meats'/>
      
    </ScrollView>
  );
};

export default Categories;
