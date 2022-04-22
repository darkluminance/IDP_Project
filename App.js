import HomePage from './Components/HomePage';
import ShowImage from './Components/ShowImage';
import ShowLineArt from './Components/ShowLineArt';
import ShowDrawing from './Components/ShowDrawing';
import ShowDrawingAccuracy from './Components/ShowDrawingAccuracy';
import FinalAccuracy from './Components/FinalAccuracy';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="Home" component={HomePage} />
				<Stack.Screen name="Image" component={ShowImage} />
				<Stack.Screen name="LineArt" component={ShowLineArt} />
				<Stack.Screen name="Drawing" component={ShowDrawing} />
				<Stack.Screen name="DrawingAccuracy" component={ShowDrawingAccuracy} />
				<Stack.Screen name="FinalAccuracy" component={FinalAccuracy} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
