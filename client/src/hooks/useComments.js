import { useState, useEffect } from "react";

import commentsAPI from "../api/comments-api";

export function useGetAllComments() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await commentsAPI.getAll();

            setComments(result);
        })();
    }, []);

    return [comments, setComments];
}

export function useGetOneWorkoutComments(workoutId) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await commentsAPI.getAllForOneWorkout(workoutId);
            
            setComments(result);
        })();
    }, [workoutId]);

    return [comments, setComments];
}

export function useCreateComment() {
    const commentCreateHandler = (workoutId, text) => commentsAPI.create(workoutId, text);

    return commentCreateHandler;
}

export function useGetLatestThreeComments() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await commentsAPI.getLatestThree();

            setComments(result);
        })();
    }, []);

    return [comments, setComments];
}

export function useDeleteComment() {
    const commentDeleteHandler = (commentId) => {
        try {
            commentsAPI.remove(commentId);
        } catch (err) {
            console.log(err.message)
        }
    }

    return commentDeleteHandler;
}