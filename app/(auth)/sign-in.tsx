import { router } from 'expo-router';
import React from 'react';
import { View ,Text, Button} from 'react-native';

const SignIn = () => {
    return (
        <View>
            <Text>Sign In Page</Text>
            <Button title='Sign up' onPress={()=>router.push("/sign-up")}/>
        </View>
    );
}


export default SignIn;
