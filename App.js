import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer, CommonActions, useNavigation  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, ScrollView, Text, View } from 'react-native';
import { Appbar, Button,  Card, FAB, Headline,  List, Modal, Portal,  Provider as PaperProvider, TextInput } from 'react-native-paper';
import * as Svg from 'react-native-svg';
import SvgComponent from "./components/svgComponent";
import * as firebase from 'firebase';

// Initialize Firbase
const fireBaseConfig = {
	apiKey: "AIzaSyBtdHOy5dVSddCRdz_mQmGgsMV2gLSsuAA",
	authDomain: "chakra-reservation.firebaseapp.com",
	databaseURL: "https://chakra-reservation.firebaseio.com",
	projectId: "chakra-reservation",
	storageBucket: "chakra-reservation.appspot.com",
	messagingSenderId: "830300281180",
	appId: "1:830300281180:web:0bdbce0a31f00b84554999"
};

firebase.initializeApp(fireBaseConfig)

function ListScreen({ navigation }) {

	const _handleSearch = () => console.log('Searching');

	const _handleMore = () => console.log('Shown more');

	const [expanded, setExpanded] = React.useState(true);

	const handlePress = () => setExpanded(!expanded);
	const [visible, setVisible] = React.useState(false);

	const showModal = () => setVisible(true);
	const hideModal = () => setVisible(false);
	const containerStyle = {backgroundColor: 'white', margin: 20, padding: 20, borderRadius: 7};

	const [text, setText] = React.useState('');

	return (
		<PaperProvider>
		<View style={{flex:1}}	
		>
		<Portal>
		<Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
		<TextInput
		mode='flat'
		label="$"
		value={text}
		onChangeText={text => setText(text)}
		theme={{colors: {primary: '#FF725E', background: 'transparent'}}}
		style={{margin:16}}
		/>
		<Button mode="text" 
		color='black'
		onPress={() => console.log('Pressed')} 
		style={{margin:16}}>
		Submit 
		</Button>
		</Modal>
		</Portal>

		<ScrollView >
		<List.Section>	
		<List.Subheader>Today</List.Subheader>
		<List.Item title="Cigarettes"
		left={() => <List.Icon icon="smoking" />} 
		right={() => <List.Subheader>$3.00</List.Subheader>}
		onPress={showModal}
		/>
		<List.Item
		title="Beer"
		left={() => <List.Icon color="#000" icon="beer" />}
		right={() => <List.Subheader>$2.00</List.Subheader>}
		/>
		<List.Item
		title="Food"
		left={() => <List.Icon color="#000" icon="food" />}
		right={() => <List.Subheader>$4.60</List.Subheader>}
		/>
		<List.Item
		title="Drugs"
		left={() => <List.Icon color="#000" icon="pill" />}
		right={() => <List.Subheader>$10.00</List.Subheader>}
		/>
		<List.Item
		title="Clothes"
		left={() => <List.Icon color="#000" icon="tshirt-crew-outline" />}
		right={() => <List.Subheader>$100.82</List.Subheader>}
		/>
		<List.Item
		title="Random items"
		left={() => <List.Icon color="#000" icon="help-rhombus-outline" />}
		right={() => <List.Subheader>$10.90</List.Subheader>}
		/>
		</List.Section>

		<List.Section title="History">
		<List.Accordion
		title="Yesterday">
		<List.Item title="First item" />
		<List.Item title="Second item" />
		</List.Accordion>


		<List.Accordion
		title="This week">
		<List.Item title="First item" />
		<List.Item title="Second item" />
		</List.Accordion>

		<List.Accordion
		title="This month">
		<List.Item title="First item" />
		<List.Item title="Second item" />
		</List.Accordion>
		</List.Section>
		</ScrollView>

		<FAB
		theme={{colors: {accent: '#FF725E'}}}
		style={{
			position: 'absolute',
				margin:30,
				right: 0,
				bottom: 0,
		}}
		small
		icon="plus"
		onPress={() => navigation.navigate('Add')}
		/>
		</View>
		</PaperProvider>
	)
}
function AddScreen(){
	return (
		<View style={{ flex: 1 }}>
		<List.Section>	
		<List.Item title="Cigarettes"
		left={() => <List.Icon icon="smoking" />} 
		/>
		<List.Item
		title="Beer"
		left={() => <List.Icon color="#000" icon="beer" />}
		right={() => <List.Subheader>$2.00</List.Subheader>}
		/>
		<List.Item
		title="Food"
		left={() => <List.Icon color="#000" icon="food" />}
		right={() => <List.Subheader>$4.60</List.Subheader>}
		/>
		<List.Item
		title="Drugs"
		left={() => <List.Icon color="#000" icon="pill" />}
		right={() => <List.Subheader>$10.00</List.Subheader>}
		/>
		<List.Item
		title="Clothes"
		left={() => <List.Icon color="#000" icon="tshirt-crew-outline" />}
		right={() => <List.Subheader>$100.82</List.Subheader>}
		/>
		<List.Item
		title="Random items"
		left={() => <List.Icon color="#000" icon="help-rhombus-outline" />}
		right={() => <List.Subheader>$10.90</List.Subheader>}
		/>
		</List.Section>
		</View>
	)
}
const Stack = createStackNavigator();

function App() {

	return (
		<NavigationContainer>
		<Stack.Navigator>
		<Stack.Screen name="Spendings" component={ListScreen} />        
		<Stack.Screen name="Add" component={AddScreen} />
		</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
