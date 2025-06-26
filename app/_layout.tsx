import { Stack } from "expo-router";
import './globals.css';

export default function RootLayout() {
  return (
    <Stack>
        <Stack.Screen
            name="(tabs)"
            options={{
                headerShown: false,
                title: "Home",
            }}
        />
        <Stack.Screen
            name="(year)"
            options={{
                headerShown: true,
                title: "2025",
            }}
        />

    </Stack>
  )

}
