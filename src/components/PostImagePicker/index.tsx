import React, { useState } from 'react';
import { Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { Button } from '../Button';
import { File } from '../../model/File';

import { styles } from "./styles";

interface PostImagePickerProps {
    onFileLoaded: (file: File) => void;
}

export default function PostImagePicker({ onFileLoaded }: PostImagePickerProps) {
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            const { uri } = result.assets[0];
            setImage(uri);

            const name = uri.match(/[^\\/]+$/)[0];

            const file = {
                name,
                uri,
                type: "image/jpg"
            }

            onFileLoaded(file);

        }
    };

    return (
        <View style={styles.container}>
            <Button title="Anexar imagem" onPress={pickImage} />
            {image && (
                <Image source={{ uri: image }} style={styles.image} />
            )}
        </View>
    );
}
