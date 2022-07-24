import React, { useMemo } from "react";
import useVolunteerStore from "../../../../../stores/volunteer-store";
import CommentListItem from "./comment-list-item";

const CommentList = () => {
  const { volunteer } = useVolunteerStore();
  const comments = useMemo<VolunteerComment[] | undefined>(
    () => volunteer?.comments,
    [volunteer],
  );

  return (
    <div>
      {comments &&
        comments.map((comment) => <CommentListItem comment={comment} />)}
    </div>
  );
};

export default CommentList;
