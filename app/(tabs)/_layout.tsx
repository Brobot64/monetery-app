import { Tabs } from "expo-router";
import {tabs} from "@/constants/data";
import clsx from "clsx";
import { colors, components } from "@/constants/theme";
import {View, Image, ImageSourcePropType} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const tabBar = components.tabBar;

interface TabIconProps {
    focused: boolean;
    icon: ImageSourcePropType;
}

const TabIcon = ({ focused, icon }: TabIconProps) => {
    return (
        <View className="tabs-icon">
            <View className={clsx('tabs-pill', focused && 'tabs-active')}>
                <Image 
                    source={icon} 
                    resizeMode="contain" 
                    className="tabs-glyph"
                    style={{ tintColor: focused ? '#fff' : 'rgba(255, 255, 255, 0.6)' }}
                />
            </View>
        </View>
    );
};

const TabLayout = () => {
    const insets = useSafeAreaInsets();

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: Math.max(insets.bottom, tabBar.horizontalInset),
                    height: tabBar.height,
                    marginHorizontal: tabBar.horizontalInset,
                    borderRadius: tabBar.radius,
                    backgroundColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 5,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                },
                tabBarItemStyle: {
                    paddingVertical: 10,
                },
                tabBarIconStyle: {
                    width: '100%',
                    height: '100%',
                    alignItems: "center",
                    justifyContent: "center",
                }
            }}
        >
            {tabs.map((tab) => (
                <Tabs.Screen
                    key={tab.name}
                    name={tab.name}
                    options={{
                        title: tab.title,
                        tabBarIcon: ({focused}) => (
                            <TabIcon focused={focused} icon={tab.icon} />
                        )
                    }}
                />
            ))}
        </Tabs>
    )
}

export default TabLayout;
