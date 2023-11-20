import {enumKeyNavigation} from "./types";

export const nameNavigate: Record<enumKeyNavigation, string> = {
    [enumKeyNavigation.AUTH]: "auth",
    [enumKeyNavigation.CHATS]: "chats",
    [enumKeyNavigation.POSTS]: "posts",
    [enumKeyNavigation.PROFILE]: "profile",
    [enumKeyNavigation.USERS]: "users",

}