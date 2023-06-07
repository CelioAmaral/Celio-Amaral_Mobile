import { useContext } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { UserCircle } from 'phosphor-react-native';

import { Context as AuthContext } from '../../context/AuthContext';
import { Button } from '../../components/Button';

import { styles } from './styles';

function Profile() {
    const { user, logout } = useContext(AuthContext)

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.heading}>
                <UserCircle color='white' size={48} weight='thin' />
                <Text style={styles.userName}>{user}</Text>
            </View>
            <Button title="Sair" onPress={logout} />
        </SafeAreaView>
    );
}

export default Profile;