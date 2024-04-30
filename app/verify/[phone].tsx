import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Text, View } from "react-native";

const Page = () => {
	const { phone, signin } = useLocalSearchParams<{
		phone: string;
		signin: string;
	}>();
	const [code, setCode] = useState("");
	return (
		<View>
			<Text>Page</Text>
		</View>
	);
};

export default Page;
