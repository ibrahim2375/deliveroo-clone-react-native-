import { View, Text, ScrollView } from "react-native";
import React from "react";
//icons
import { Feather } from "@expo/vector-icons";
//styles
import { Styles } from "../styles/FeaturedRowStyles";
//components
import ResturantCard from "./ResturantCard";

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      {/* Row Header */}
      <View style={Styles.rowHeaderView}>
        <View style={Styles.rowHeaderViewTop}>
          <Text style={Styles.rowHeaderViewTitle}>{title}</Text>
          <Feather name="arrow-right" size={24} color="#00CCBC" />
        </View>
        <Text style={Styles.rowHeaderViewDescription}>{description}</Text>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {/* ResturantCard */}
        <ResturantCard
          id={0}
          imageUrl={
            "https://th.bing.com/th/id/R.a7e6e749e18a9102a49bba450d5d477f?rik=y6o8m9C2ltevWA&riu=http%3a%2f%2fblog.hdwallsource.com%2fwp-content%2fuploads%2f2015%2f01%2ffood-wallpaper-5777-5942-hd-wallpapers.jpg&ehk=VbAvSVkflThjPWBkjqFB3Z1vjps1ZyRqUR8boO0gS80%3d&risl=&pid=ImgRaw&r=0"
          }
          title={"Yo! Suso"}
          rating={4.8}
          genre={"egyption"}
          address={"123 maan st."}
          description={"yes its short description"}
          dishes={[]}
          long={22}
          lat={77}
        />
        <ResturantCard
          id={0}
          imageUrl={
            "https://th.bing.com/th/id/R.a7e6e749e18a9102a49bba450d5d477f?rik=y6o8m9C2ltevWA&riu=http%3a%2f%2fblog.hdwallsource.com%2fwp-content%2fuploads%2f2015%2f01%2ffood-wallpaper-5777-5942-hd-wallpapers.jpg&ehk=VbAvSVkflThjPWBkjqFB3Z1vjps1ZyRqUR8boO0gS80%3d&risl=&pid=ImgRaw&r=0"
          }
          title={"Yo! Suso"}
          rating={4.8}
          genre={"egyption"}
          address={"123 maan st."}
          description={"yes its short description"}
          dishes={[]}
          long={22}
          lat={77}
        />
        <ResturantCard
          id={0}
          imageUrl={
            "https://th.bing.com/th/id/R.a7e6e749e18a9102a49bba450d5d477f?rik=y6o8m9C2ltevWA&riu=http%3a%2f%2fblog.hdwallsource.com%2fwp-content%2fuploads%2f2015%2f01%2ffood-wallpaper-5777-5942-hd-wallpapers.jpg&ehk=VbAvSVkflThjPWBkjqFB3Z1vjps1ZyRqUR8boO0gS80%3d&risl=&pid=ImgRaw&r=0"
          }
          title={"Yo! Suso"}
          rating={4.8}
          genre={"egyption"}
          address={"123 maan st."}
          description={"yes its short description"}
          dishes={[]}
          long={22}
          lat={77}
        />
        <ResturantCard
          id={0}
          imageUrl={
            "https://th.bing.com/th/id/R.a7e6e749e18a9102a49bba450d5d477f?rik=y6o8m9C2ltevWA&riu=http%3a%2f%2fblog.hdwallsource.com%2fwp-content%2fuploads%2f2015%2f01%2ffood-wallpaper-5777-5942-hd-wallpapers.jpg&ehk=VbAvSVkflThjPWBkjqFB3Z1vjps1ZyRqUR8boO0gS80%3d&risl=&pid=ImgRaw&r=0"
          }
          title={"Yo! Suso"}
          rating={4.8}
          genre={"egyption"}
          address={"123 maan st."}
          description={"yes its short description"}
          dishes={[]}
          long={22}
          lat={77}
        />
        <ResturantCard
          id={0}
          imageUrl={
            "https://th.bing.com/th/id/R.a7e6e749e18a9102a49bba450d5d477f?rik=y6o8m9C2ltevWA&riu=http%3a%2f%2fblog.hdwallsource.com%2fwp-content%2fuploads%2f2015%2f01%2ffood-wallpaper-5777-5942-hd-wallpapers.jpg&ehk=VbAvSVkflThjPWBkjqFB3Z1vjps1ZyRqUR8boO0gS80%3d&risl=&pid=ImgRaw&r=0"
          }
          title={"Yo! Suso"}
          rating={4.8}
          genre={"egyption"}
          address={"123 maan st."}
          description={"yes its short description"}
          dishes={[]}
          long={22}
          lat={77}
        />
        <ResturantCard
          id={0}
          imageUrl={
            "https://th.bing.com/th/id/R.a7e6e749e18a9102a49bba450d5d477f?rik=y6o8m9C2ltevWA&riu=http%3a%2f%2fblog.hdwallsource.com%2fwp-content%2fuploads%2f2015%2f01%2ffood-wallpaper-5777-5942-hd-wallpapers.jpg&ehk=VbAvSVkflThjPWBkjqFB3Z1vjps1ZyRqUR8boO0gS80%3d&risl=&pid=ImgRaw&r=0"
          }
          title={"Yo! Suso"}
          rating={4.8}
          genre={"egyption"}
          address={"123 maan st."}
          description={"yes its short description"}
          dishes={[]}
          long={22}
          lat={77}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
