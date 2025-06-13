import { ThemedText } from "@/components/ThemedText";
import { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

type cardComponentTypes = {
  image: string;
  name: string;
  themes: string[];
  release_year: number;
  review_source: string;
  review_score: number;
};

export default function CardComponent({
  image,
  name,
  themes,
  release_year,
  review_source,
  review_score,
}: cardComponentTypes) {
  const [showAllThemes, setShowAllThemes] = useState(false);
  const displayedThemes = showAllThemes ? themes : themes.slice(0, 3);
  const hasMoreThemes = themes.length > 3;

  return (
    <TouchableOpacity style={styles.cardContainer}>
      {/* Image with overlay text */}
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.overlay}>
          <ThemedText style={styles.overlayText}>{name}</ThemedText>
        </View>
      </View>

      {/* Other content below the image */}
      <View style={styles.textContainer}>
        <ThemedText>year released: {release_year}</ThemedText>
        <View>
          <ThemedText>{displayedThemes.join(", ")}</ThemedText>
          {hasMoreThemes && (
            <TouchableOpacity onPress={() => setShowAllThemes(!showAllThemes)}>
              <ThemedText>
                {showAllThemes ? "Show less" : `${themes.length - 3} more`}
              </ThemedText>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.reviewContainer}>
        <ThemedText>{review_source}:</ThemedText>
        <ThemedText>{review_score}</ThemedText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 210,
    borderColor: "darkslategrey",
    borderWidth: 4,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "#000",
  },
  imageWrapper: {
    width: "100%",
    height: 300,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "darkslategrey",
    padding: 10,
  },
  overlayText: {
    fontWeight: "bold",
  },
  textContainer: {
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  reviewContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    gap: 10,
    paddingRight: 10,
    backgroundColor: "darkslategrey",
  },
});
