import styled from "styled-components";
export const AppText = styled.h1`
  text-align: ${(props) => (props.alignSelf ? props.alignSelf : "center")};
  color: ${(props) => (props.color ? props.color : "yellow")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "normal")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1rem")};
  font-family: ${(props) => (props.fontFamily ? props.fontFamily : "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif")};
  ${(props) =>
    props.variant === "h1" &&
    `
  font-size: 2rem;
  font-weight: bold;
`}

  ${(props) =>
    props.variant === "h2" &&
    `
  font-size: 1.5rem;
   font-weight: bold;
`}

${(props) =>
    props.variant === "h3" &&
    `
  font-size: 1.2rem;
   font-weight: bold;
`}
${(props) =>
    props.variant === "h4" &&
    `
font-size: 1rem;
font-weight: bold;
`}
${(props) =>
    props.variant === "h5" &&
    `
font-size: 0.9rem;
font-weight: bold;
`}
${(props) =>
    props.variant === "h6" &&
    `
    font-size: 0.8rem;
     font-weight: bold;
`}
${(props) =>
    props.variant === "p" &&
    `
    font-size: 1rem;
     
`}
`;
