import {FlatList, Text, View} from "react-native";
import {Link} from 'expo-router';
import {SafeAreaView} from "react-native-safe-area-context";

const years = [2025, 2026, 2027, 2028, 2029, 2030];

export default function Index() {
  return (
    <SafeAreaView className="flex-1 items-center bg-[#98A1BC]">
        <View className="max-h-250 pt-10 pb-10">
            <Text className="text-5xl font-bold text-[#555879] ">Expense Report</Text>
        </View>
        <View className="flex-row flex-wrap gap-4 justify-center w-full px-4 bg-gray-50">
            {years.map((year) => (
                <Link
                    href="/yearIndex"
                    className="text-4xl font-bold p-4 rounded-3xl bg-amber-300"
                > {year}</Link>
            ))}
        </View>

    </SafeAreaView>
  );
}
