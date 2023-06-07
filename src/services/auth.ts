import * as SecureStore from "expo-secure-store";

async function getAuthHeader() {
    const token = await SecureStore.getItemAsync("token");

    const authHeader = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };

    return authHeader;
}

async function getProfile() {
    const profile = await SecureStore.getItemAsync("profile");

    return profile;
}

async function getUser() {
    const user = await SecureStore.getItemAsync("user");

    return user;
}

export { getAuthHeader, getProfile, getUser };