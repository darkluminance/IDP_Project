import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	View,
	Image,
	SafeAreaView,
	Button,
	TouchableHighlight,
	TouchableOpacity,
} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

// import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import React, { useState, useEffect, useLayoutEffect } from 'react';

export default function HomePage({ navigation }) {
	//Camera stuff
	/* const [hasPermission, setHasPermission] = useState(null);
	const [type, setType] = useState(Camera.Constants.Type.back);

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestCameraPermissionsAsync();
			setHasPermission(status === 'granted');
		})();
	}, []);

	// useLayoutEffect(() => {
	// 	navigation.setOptions({ headerShown: false });
	// }, [navigation]);

	if (hasPermission === null) {
		return <View />;
	}
	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	} */

	//Main app stuff
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="auto" />
			<Text style={styles.title}>Assistant Drawing Robot</Text>

			<View>
				<Image
					style={{ width: 128, height: 128 }}
					fadeDuration={1000}
					source={require('../assets/robot.png')}
				/>
			</View>

			<View style={{ marginTop: '30%' }}>
				<TouchableOpacity
					style={styles.buttons}
					onPress={() => {
						navigation.navigate('Image');
					}}
				>
					<Text style={styles.buttontext}>Upload Image</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.buttons}
					onPress={() => {
						navigation.navigate('Image');
					}}
				>
					<Text style={styles.buttontext}>Scan from Phone</Text>
				</TouchableOpacity>
				{/* <TouchableOpacity style={styles.buttons} onPress={() => {}}>
					<Text style={styles.buttontext}>Scan from Robot</Text>
				</TouchableOpacity> */}
			</View>
		</SafeAreaView>

		// <View style={styles.container}>
		// 	<Camera style={styles.camera} type={type}></Camera>
		// </View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#eee',
		alignItems: 'center',
		paddingLeft: '5%',
		paddingRight: '5%',
	},

	camera: {
		height: '100%',
		width: '100%',
	},

	title: {
		fontSize: 35,
		textAlign: 'center',
		fontWeight: 'bold',
		color: '#696969',
		marginTop: '50%',
		marginBottom: '10%',
	},

	buttons: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 300,
		height: 50,
		borderRadius: 100,
		backgroundColor: '#0984e3',
		marginTop: '8%',
	},

	buttontext: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'white',
	},
});
