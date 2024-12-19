import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tabs, useRouter } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

const iconColor: string = '#69006D';

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: iconColor,
			}}
		>
			<Tabs.Screen name="index" options={{
				title: 'Home',
				tabBarIcon: ({ color, focused }) => (
					<Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
				),
			}}/>
			<Tabs.Screen name="(Catalog)" options={{
				title: "Catalog",
				headerShown:false,
				tabBarIcon: ({ color, focused }) => (
					<Ionicons name={focused ? 'search-sharp' : 'search-outline'} color={color} size={24} />
				),
			}}
			/>
			
			< Tabs.Screen name="favourites" options={{
				title: 'Favorites',
				tabBarIcon: ({ color, focused }) => (
					<Ionicons name={focused ? 'heart-sharp' : 'heart-outline'} color={color} size={24} />
				),
			}} />
			< Tabs.Screen name="profile" options={{
				title: 'Profile',
				tabBarIcon: ({ color, focused }) => (
					<Ionicons name={focused ? 'body' : 'body'} color={color} size={24} />
				),
			}} />
			< Tabs.Screen name="basket" options={{
				title: 'Basket',
				tabBarIcon: ({ color, focused }) => (
					<Ionicons name={focused ? 'cart-sharp' : 'cart-outline'} color={color} size={24} />
				),
			}} />
		</Tabs >
	);
}