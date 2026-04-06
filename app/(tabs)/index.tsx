import "@/global.css";
import {Text } from "react-native";
import {Link} from "expo-router";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import {styled} from "nativewind";

const SafeAreaView = styled(RNSafeAreaView);

export default function TabHome() {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text className="text-xl font-bold text-green-500">
                Welcome to Home Tab!
            </Text>
            <Link href="/onboarding" className="mt-4 rounded bg-primary text-white p-4 bg-black">Go To Onboarding</Link>
            <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary text-white p-4 bg-black">Go To Sign Up</Link>
            <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary text-white p-4 bg-black">Go To Sign In</Link>


            <Link href="/app/subscriptions/spotify" className="mt-4 rounded bg-primary text-white p-4 bg-black">Spotify ption</Link>


            <Link
                href={{
                    pathname: "/subscriptions/[id]",
                    params: { id: "claude" },
                }}
                className="mt-4 rounded bg-primary text-white p-4 bg-black">
                Claude Max Subscription
            </Link>

        </SafeAreaView>
    );
}
