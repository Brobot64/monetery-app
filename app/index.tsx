import "@/global.css";
import {Text, View, TouchableOpacity} from "react-native";
import {Link} from "expo-router";

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-xl font-bold text-green-500">
                Welcome to Nativewind!
            </Text>
            <Link href="/onboarding" className="mt-4 rounded bg-primary text-white p-4 bg-black">Go To Onboarding</Link>
            <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary text-white p-4 bg-black">Go To Sign Up</Link>
            <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-white p-4 bg-black">Go To Sign In</Link>


            <Link href="/(tabs)/subscriptions/spotify" className="mt-4 rounded bg-primary text-white p-4 bg-black">Spotify ption</Link>


            <Link
                href={{
                    pathname: "/subscriptions/[id]",
                    params: { id: "claude" },
                }}
                  className="mt-4 rounded bg-primary text-white p-4 bg-black">
                Claude Max Subscription
            </Link>

        </View>
    );
}
