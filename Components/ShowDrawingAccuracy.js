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

export default function ShowDrawingAccuracy({ navigation }) {
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

			<View style={{ marginTop: '5%', alignItems: 'center' }}>
				<Text style={styles.accuracy}>Your drawing accuracy is</Text>
				<Text
					style={[
						styles.accuracyval,
						accuracyValue >= 80 ? styles.accuracyGreen : styles.accuracyRed,
					]}
				>
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
						navigation.goBack();
					}}
				>
					<Text style={styles.buttontext}>Scan again</Text>
				</TouchableOpacity>
				<View
					style={{
						flex: 0,
						flexDirection: 'row',
						justifyContent: 'space-between',
						// alignItems: 'center',
						// position: 'absolute',
					}}
				>
					<TouchableOpacity
						style={styles.smallbutton}
						onPress={() => {
							navigation.navigate('LineArt');
						}}
					>
						<Text style={styles.smallbuttontxt}>Show drawing again</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.smallbutton}
						onPress={() => {
							navigation.navigate('FinalAccuracy');
						}}
					>
						<Text style={styles.smallbuttontxt}>Go to finish</Text>
					</TouchableOpacity>
				</View>
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

	smallbutton: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 160,
		height: 40,
		borderRadius: 100,
		backgroundColor: '#eee',
		marginTop: '8%',
		marginLeft: '4%',
		marginRight: '4%',
		borderColor: '#0984e3',
		borderWidth: 2,
	},

	smallbuttontxt: {
		fontSize: 12,
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

	accuracyRed: {
		color: '#d63031',
	},
});
