import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import sizes from "./constants/sizes";
import colors from "./constants/colors";
import AboutStack from "./screens/navigation/AboutStack";
import AccountStack from "./screens/navigation/AccountStack";
import HomeStack from "./screens/navigation/HomeStack";
import { PaperProvider } from "react-native-paper";
import AppContext from "./store/AppContext";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <AppContext.Provider>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: colors.color1,
            headerShown: false,
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeStack}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: () => (
                <MaterialCommunityIcons
                  name="home"
                  color={colors.color1}
                  size={sizes.tabIconSize}
                />
              ),
            }}
          />

          <Tab.Screen
            name="About"
            component={AboutStack}
            options={{
              tabBarLabel: "About",
              tabBarIcon: () => (
                <MaterialCommunityIcons
                  name="information"
                  color={colors.color1}
                  size={sizes.tabIconSize}
                />
              ),
            }}
          />

          <Tab.Screen
            name="Account"
            component={AccountStack}
            options={{
              tabBarLabel: "Account",
              tabBarIcon: () => (
                <MaterialCommunityIcons
                  name="account"
                  color={colors.color1}
                  size={sizes.tabIconSize}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
    </AppContext.Provider>
  );
}
