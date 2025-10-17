import { Tabs } from "expo-router"

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="home"
        options={{
          title: "Início",
          tabBarIcon: () => null,
        }}
      />
      <Tabs.Screen
        name="transfer"
        options={{
          title: "Transferir",
          tabBarIcon: () => null,
        }}
      />
      <Tabs.Screen
        name="payment"
        options={{
          title: "Pagar",
          tabBarIcon: () => null,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notificações",
          tabBarIcon: () => null,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: () => null,
        }}
      />
    </Tabs>
  )
}
