import { useContext } from 'react';
import { TouchableOpacity, Text, } from 'react-native';

import { Context as AuthContext } from '../../context/AuthContext';
import { AuthForm } from '../../components/AuthForm';
import { Spacer } from '../../components/Spacer';

import { styles } from './styles';

function Login({ navigation }) {
    const { login, errorMessage } = useContext(AuthContext);

    return (
        <>
            <AuthForm
                authFormSubTitle='Faça o login e comece a usar!'
                submitFormButtonText='Entrar'
                submitFormButtonAction={login}
            />
            <TouchableOpacity onPress={() => {
                navigation.navigate("SignUp");
            }}>
                <Text style={styles.link}>Não possui conta? Crie uma agora!</Text>
            </TouchableOpacity>
            {errorMessage && (
                <Spacer>
                    <Text style={styles.error}>{errorMessage}</Text>
                </Spacer>
            )}
        </>
    );
}

export default Login;