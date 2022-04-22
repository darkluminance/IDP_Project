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

export default function ShowLineArt({ navigation }) {
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

			<View style={{ marginTop: '35%' }}>
				<TouchableOpacity
					style={styles.buttons}
					onPress={() => {
						navigation.navigate('Drawing');
					}}
				>
					<Text style={styles.buttontext}>Start Drawing</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.backbutton}
					onPress={() => {
						navigation.goBack();
					}}
				>
					<Text style={styles.backbuttontext}>Go Back</Text>
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
