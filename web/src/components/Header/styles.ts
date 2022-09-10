import styled from "styled-components";

export const ContainerHeader = styled.header`
  background: linear-gradient(180deg, #102347 0%, #121214 100%);
  height: 100%;
  min-height: 13.75rem;

  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 1.5rem;
    margin-top: 0.875rem;
  }

  span {
    font-size: 0.875rem;
    margin-top: 0.2rem;

    a {
      color: ${({ theme }) => theme["gray-200"]};
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${({ theme }) => theme["blue-400"]};
      }
    }
  }
`;
