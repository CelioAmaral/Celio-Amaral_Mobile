import React from "react";
import { View, Text } from "react-native";
import { UserCircle } from "phosphor-react-native";

import { Button } from "../Button";

import { styles } from "./styles";

interface ProfileItemProps {
    profile: Profile;
    handleFollowAction: (profileId: string) => void;
    buttonDisabled: boolean
}

interface Profile {
    _id: string;
    name: string;
    following: string[];
    followers: string[];
}

export function ProfileItem({ profile, handleFollowAction, buttonDisabled }: ProfileItemProps) {
    return (
        <View style={styles.profileCard}>
            <View style={styles.profileIdentification}>
              <UserCircle color='white' weight='thin' size={24} />
              <Text style={styles.profileNameText}>{profile.name}</Text>
            </View>
            <Text style={styles.followers}>{`Seguidores ${profile.followers.length}`}</Text>
            <Text style={styles.following}>{`Seguindo ${profile.following.length}`}</Text>
            <Button title="Seguir" onPress={() => handleFollowAction(profile._id)} disabled={buttonDisabled} />
        </View>
    );
}