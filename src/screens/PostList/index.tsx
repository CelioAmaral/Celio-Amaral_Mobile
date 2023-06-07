import { useContext, useEffect } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import { Context as AuthContext } from "../../context/AuthContext";
import { Context as PostContext } from "../../context/PostContext";

import { HomeHeader } from "../../components/HomeHeader";
import { PostItem } from "../../components/PostItem";

import { styles } from "./styles";

export function PostList({ navigation }) {
    const { user } = useContext(AuthContext)
    const { posts, getPosts } = useContext(PostContext);

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            < HomeHeader navigation={navigation} user={user} />
            <View style={styles.content}>
                <FlatList
                    data={posts}
                    keyExtractor={({ _id }) => _id}
                    renderItem={({ item }) => <PostItem post={item} />}
                />
            </View>
        </SafeAreaView>
    );
}