import {ImageBackground, Text, View} from "react-native";
import {Link} from 'expo-router';
import {SafeAreaView} from "react-native-safe-area-context";


export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-[#000000]">
        <ImageBackground
            source={require('../../assets/images/BG.png')}
            resizeMode="cover"
            className="flex-1"
        >
            <View className="max-h-250 pt-10 pb-10">
                <Text className="text-3xl font-bold text-[#ffffff] self-center ">Expense Report</Text>
            </View>
            <View
                className="px-4"
            >
                <Text className="text-2xl text-[#ffffff] font-bold">Quick Actions</Text>
                <View className="flex gap-2">
                    <View
                        className="bg-[#222222] w-full h-[75px] mt-5 rounded-lg grid p-4 shadow-[-2px_2px_5px_-2px_rgba(256,256,256,0.4)]">
                        <Text className="text-[#ffffff] text-[2rem]">Add Expense</Text>
                    </View>
                    <View
                        className="bg-[#222222] w-full h-[75px] mt-5 rounded-lg grid p-4 shadow-[-2px_2px_5px_-2px_rgba(256,256,256,0.4)]">
                        <Text className="text-[#ffffff] text-[2rem]">Current Month</Text>
                    </View>
                    <View
                        className="bg-[#222222] w-full h-[75px] mt-5 rounded-lg grid p-4 shadow-[-2px_2px_5px_-2px_rgba(256,256,256,0.4)]">
                        <Text className="text-[#ffffff] text-[2rem]">Year Summary</Text>
                    </View>
                </View>
                <Text className="text-2xl text-[#ffffff] mt-8 font-bold ">Summary</Text>
                <View className="flex-row flex-wrap justify-between p-4 gap-4">
                    <View
                        className="items-center justify-center bg-[#222222] w-[175px] h-[175px] rounded-[20px] grid p-4">
                        <Text className="text-[#ffffff] text-[2rem]">Income</Text>
                    </View>
                    <View
                        className="items-center justify-center bg-[#222222] w-[175px] aspect-square rounded-[20px] grid p-4 ">
                        <Text className="text-[#ffffff] text-[2rem]">Expenses</Text>
                    </View>
                    <View
                        className="items-center justify-center bg-[#222222] w-full h-[100px] rounded-[20px] grid p-4 ">
                        <Text className="text-[#ffffff] text-[2rem]">Detailed Expenses</Text>
                    </View>
                </View>

            </View>
        </ImageBackground>
    </SafeAreaView>
  );
}




