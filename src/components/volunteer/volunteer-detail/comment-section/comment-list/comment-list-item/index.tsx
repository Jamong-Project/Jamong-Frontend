import styled from "@emotion/styled";
import React from "react";

const CommentListItemContainer = styled.div`
  display: flex;
  padding: 16px;
  border-bottom: 1px solid ${(props) => props.theme.colors.divider};
  font-size: ${(props) => props.theme.fontSizes.sm};
`;

const NameContainer = styled.a`
  width: 128px;
  min-width: 128px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSizes.sm};

  ${(props) => props.theme.mq.tablet} {
    width: 64px;
    min-width: 64px;
  }
`;

export type CommentListItemProps = {
  comment: VolunteerComment;
};

const CommentListItem = ({ comment }: CommentListItemProps) => {
  return (
    <CommentListItemContainer>
      <NameContainer>{comment.name}</NameContainer>
      <div>{comment.content}</div>
    </CommentListItemContainer>
  );
};

export default CommentListItem;
