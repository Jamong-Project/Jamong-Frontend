import styled from "@emotion/styled";

export const VolunteerInformationContainer = styled.div`
  flex-grow: 1;
`;

export const TitleContainer = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.lg};

  ${(props) => props.theme.mq.tablet} {
    font-size: ${(props) => props.theme.fontSizes.md};
  }

  ${(props) => props.theme.mq.mobile} {
    font-size: ${(props) => props.theme.fontSizes.base};
  }
`;

export const DateItem = styled.li`
  font-size: ${(props) => props.theme.fontSizes.sm};

  ${(props) => props.theme.mq.mobile} {
    font-size: ${(props) => props.theme.fontSizes.xs};
  }
`;

export const DateInfoItem = styled.span`
  font-weight: bold;
`;

export const DateContainer = styled.ul``;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 16px;
`;
