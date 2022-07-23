import React from "react";
import CommentInput from "./comment-input";
import { CommentSectionContainer, CommentSectionWrapper } from "./styles";

const CommentSection = () => {
  return (
    <CommentSectionContainer>
      <CommentSectionWrapper>
        <CommentInput />
      </CommentSectionWrapper>
    </CommentSectionContainer>
  );
};

export default CommentSection;
