import styled from "@emotion/styled";

export const CommentInputContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;

  ${({ theme }) => theme.mq.mobile} {
    flex-direction: column;
    gap: 0px;
  }
`;

export const TextInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
`;
