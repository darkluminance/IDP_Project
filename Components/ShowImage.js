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
import { Dimensions } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ShowImage({ navigation, route }) {
	const ImagePath = route.params.image;
	console.log(ImagePath);

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="auto" />
			<View>
				<Image
					style={{
						width: windowWidth,
						height: windowHeight / 1.75,
					}}
					fadeDuration={1000}
					source={{ uri: ImagePath }}
				/>
			</View>

			<View style={{ marginTop: '35%' }}>
				<TouchableOpacity
					style={styles.buttons}
					onPress={() => {
						navigation.navigate('LineArt');
					}}
				>
					<Text style={styles.buttontext}>Create and Show Lineart</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.backbutton}
					onPress={() => {
						navigation.navigate('Home');
					}}
				>
					<Text style={styles.backbuttontext}>Go Home</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
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

	buttons: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 300,
		height: 50,
		borderRadius: 100,
		backgroundColor: '#0984e3',
		marginTop: '8%',
	},

	backbutton: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 300,
		height: 50,
		borderRadius: 100,
		backgroundColor: '#eee',
		marginTop: '8%',
		borderColor: '#0984e3',
		borderWidth: 2,
	},

	buttontext: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: 'white',
	},

	backbuttontext: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: '#0984e3',
	},
});
