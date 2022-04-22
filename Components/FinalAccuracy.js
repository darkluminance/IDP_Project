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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function FinalAccuracy({ navigation }) {
	let accuracyValue = 80;

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
					source={require('../assets/sketch.png')}
				/>
			</View>

			<View style={{ marginTop: '15%', alignItems: 'center' }}>
				<Text style={styles.accuracy}>Your final drawing accuracy is</Text>
				<Text style={[styles.accuracyval, styles.accuracyGreen]}>
					{accuracyValue}%
				</Text>
			</View>

			{/* <View>
				<Text style={{ color: '#696969' }}>
					Try again to improve your accurary
				</Text>
			</View> */}

			<View
				style={{
					width: '100%',
					paddingLeft: '8%',
					paddingRight: '8%',
					alignItems: 'center',
				}}
			>
				<TouchableOpacity
					style={styles.buttons}
					onPress={() => {
						navigation.navigate('Home');
					}}
				>
					<Text style={styles.buttontext}>Done</Text>
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
		// paddingLeft: '2%',
		// paddingRight: '2%',
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

	accuracy: {
		fontSize: 24,
		color: '#696969',
	},

	accuracyval: {
		marginTop: 28,
		fontSize: 100,
	},

	accuracyGreen: {
		color: 'rgb(55, 231, 113)',
	},
});
