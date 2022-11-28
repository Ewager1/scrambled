import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => `${theme.space[1]}px ${theme.space[3]}px`};
  border: 0;
  border-radius: ${({ theme }) => theme.radii.default}em;
  text-align: ${(props) => (props.align ? props.align : "center")};
`;

const StartButton = ({ className, children, forwardedAs }) => {
  return (
    <StyledButton className={className} as={forwardedAs}>
      {children}
    </StyledButton>
  );
};

export default StartButton;
