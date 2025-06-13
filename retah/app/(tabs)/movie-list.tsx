import { ThemedView } from "@/components/ThemedView";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet } from "react-native";

import CardComponent from "@/components/Card";

const movies = [
  {
    name: "Psycho",
    image_url:
      "https://a.ltrbxd.com/resized/alternative-poster/5/1/5/7/8/p/aj8G3n6IcJmSQ7U0fCczuD2VcRN-0-125-0-187-crop.jpg?v=ede8e9d53e",
    release_year: 1960,
    genres: ["1", "2", "3"],
    themes: [
      "Intense Violence And Sexual Transgression",
      "Horror, The Undead And Monster Classics",
      "Thrillers And Murder Mysteries",
      "Twisted Dark Psychological Thriller",
      "Gory, Gruesome, And Slasher Horror",
      "Terrifying, Haunted, And Supernatural Horror",
      "Gothic And Eerie Haunting Horror",
      "Creepy, Chilling, And Terrifying Horror",
    ],
    review: {
      source: "TMDB",
      score: 84,
    },
  },
  {
    name: "2001: A Space Odyssey",
    image_url:
      "https://a.ltrbxd.com/resized/alternative-poster/5/1/9/8/7/p/zmmYdPa8Lxx999Af9vnVP4XQ1V6-0-125-0-187-crop.jpg?v=d94b61ce7e",
    release_year: 1968,
    genres: ["4", "5", "1"],
    themes: [
      "Humanity And The World Around Us",
      "Monsters, Aliens, Sci-Fi And The Apocalypse",
      "Imaginative Space Odysseys And Alien Encounters",
      "Humanity'S Odyssey: Earth And Beyond",
      "Surreal And Thought-Provoking Visions Of Life And Death",
      "Action-Packed Space And Alien Sagas",
      "Thought-Provoking Sci-Fi Action And Future Technology",
    ],
    review: {
      source: "TMDB",
      score: 81,
    },
  },
];

export default function MovieListPage() {
  const { genreId } = useLocalSearchParams();
  const selectedGenreId = Array.isArray(genreId) ? genreId[0] : genreId;
  const filteredMovies = movies.filter(
    (movie) => selectedGenreId && movie.genres.includes(selectedGenreId)
  );
  return (
    <ScrollView>
      <ThemedView style={styles.columnContainer}>
        {filteredMovies.map((movie, index) => (
          <CardComponent
            key={index}
            image={movie.image_url}
            name={movie.name}
            themes={movie.themes}
            release_year={movie.release_year}
            review_source={movie.review.source}
            review_score={movie.review.score}
          ></CardComponent>
        ))}
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  columnContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    flex: 1,
    alignItems: "center",
    gap: 30,
  },
});
