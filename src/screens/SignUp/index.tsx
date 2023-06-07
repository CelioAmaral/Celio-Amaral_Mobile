import { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { AuthForm } from '../../components/AuthForm';
import { Context as AuthContext } from '../../context/AuthContext';
import { Spacer } from '../../components/Spacer';

import { styles } from './styles';

function SignUp({ navigation }) {
    const { register, errorMessage } = useContext(AuthContext)

    return (
        <>
            <AuthForm
                authFormSubTitle='Faça o cadastro e comece a usar!'
                submitFormButtonText='Cadastrar'
                submitFormButtonAction={register}
            />
            <TouchableOpacity onPress={() => {
                navigation.navigate("Login");
            }}>
                <Text style={styles.link}>Já possui conta? Entre agora!</Text>
            </TouchableOpacity>
            {errorMessage && (
                <Spacer>
                    <Text style={styles.error}>{errorMessage}</Text>
                </Spacer>
            )}
        </>
    );
}

export default SignUp;