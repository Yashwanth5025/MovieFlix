import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-5xl text-dark-200 font-bold">Welcome!</Text>
      <Link href={{pathname: "/movies/[id]", params: {id: "avengers"}}} className="text-blue-300 font-bold text-2xl">avengewrs</Link>
    </View>
  );
}
