import React, { ReactNode, useReducer } from "react";
import * as SecureStore from "expo-secure-store";
import { Post } from "../model/Post";
import api from "../services/api";
import { navigate } from "../RootNavigation";
import { getAuthHeader, getProfile, getUser } from "../services/auth";

interface PostContext {
    posts: Post[];
    getPosts?: () => void;
    likePost?: ({ postId }: { postId: string }) => void;
    unlikePost?: ({ postId }: { postId: string }) => void;
    createPost?: (postData) => void;
}

const defaultValue = {
    posts: []
}

const Context = React.createContext<PostContext>(defaultValue)

const Provider = ({ children }: { children: ReactNode }) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case "show_posts":
                return {
                    ...state,
                    posts: action.payload,
                };
            case "like_post":
                const newPostsLike = state.posts;
                const [postLiked, ..._] = newPostsLike.filter(
                    (post) => post._id == action.payload.id
                );
                postLiked.likes.push(action.payload.profile);
                return {
                    posts: [...newPostsLike]
                };
            case "unlike_post":
                const newPostsUnlike = state.posts;
                const [postUnliked, ...rest] = newPostsUnlike.filter(
                    (post) => post._id == action.payload.id
                );
                const index = postUnliked.likes.indexOf(action.payload.profile);
                postUnliked.likes.splice(index, 1);
                return {
                    posts: [...newPostsUnlike]
                };
            case "create_post":
                return { posts: [action.payload, ...state.posts] };
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, defaultValue);

    const getPosts = async () => {
        try {
            const authHeader = await getAuthHeader();
            const { data } = await api.get("/feed", authHeader)

            dispatch({ type: "show_posts", payload: data })
        } catch (err) {
            console.log(err)
        }
    }

    const likePost = async ({ postId }) => {
        try {
            const authHeader = await getAuthHeader();
            await api.post(`/posts/${postId}/like`, null, authHeader);
            const profile = await getProfile();

            dispatch({
                type: "like_post",
                payload: { id: postId, profile },
            })
        } catch (err) {
            console.log(err)
        }
    }

    const unlikePost = async ({ postId }) => {
        try {
            const authHeader = await getAuthHeader();
            await api.post(`/posts/${postId}/unlike`, null, authHeader);
            const profile = await getProfile();

            dispatch({
                type: "unlike_post",
                payload: { id: postId, profile },
            })
        } catch (err) {
            console.log(err)
        }
    };

    const createPost = async ({ title, description, image }) => {
        try {
            const token = await SecureStore.getItemAsync("token");
            const formData = new FormData();

            formData.append("title", title);
            formData.append("description", description || "");
            formData.append("file", image);

            const response = await api.post("/posts", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            });
            dispatch({
                type: "create_post",
                payload: { ...response.data },
            });
            navigate("PostList")
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Context.Provider
            value={{
                ...state,
                getPosts,
                likePost,
                unlikePost,
                createPost,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export { Provider, Context }