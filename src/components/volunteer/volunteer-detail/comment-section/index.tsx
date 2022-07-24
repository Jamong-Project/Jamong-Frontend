import React from "react";
import CommentInput from "./comment-input";
import CommentList from "./comment-list";
import { CommentSectionContainer, CommentSectionWrapper } from "./styles";

const CommentSection = () => {
  return (
    <CommentSectionContainer>
      <CommentSectionWrapper>
        <CommentInput />
        <CommentList />
      </CommentSectionWrapper>
    </CommentSectionContainer>
  );
};

export default CommentSection;
