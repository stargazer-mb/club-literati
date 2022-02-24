import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

export default function AnimatedText(props) {
  const gradient = keyframes`{
        0%{
            background-position: 0 50%;
        }
        50%{
            background-position: 100% 50%;
        }
        100%{
            background-position: 0 50%;
        }
    }`;

  let colorStr = props.colors.join(",");

  const AnimGradText = styled(props.variant)`
    animation: ${gradient} 5s ease-in-out infinite;
    background: linear-gradient(to right, ${colorStr});
    background-size: 300%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  `;

  return (
    <React.Fragment>
      <div
        style={{
          backgroundColor: "inherit",
          maxWidth: "fit-content",
          padding: "1rem",
        }}
      >
        <AnimGradText>{props.txt}</AnimGradText>
      </div>
    </React.Fragment>
  );
}
