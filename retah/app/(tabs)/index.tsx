import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";

const genres = [
  {
    id: "1",
    name: "Mystery",
  },
  {
    id: "2",
    name: "Thriller",
  },
  {
    id: "3",
    name: "Horror",
  },
  {
    id: "4",
    name: "Science Fiction",
  },
  {
    id: "5",
    name: "Adventure",
  },
];

export default function HomeScreen() {
  // Think about the performance if there is multiple movies within those genres
  const router = useRouter();
  return (
    <ThemedView style={styles.columnContainer}>
      {genres.map((genre) => (
        <ThemedText
          key={genre.id}
          onPress={() => router.push(`/(tabs)/movie-list?genreId=${genre.id}`)}
        >
          {genre.name}
        </ThemedText>
      ))}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  columnContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
