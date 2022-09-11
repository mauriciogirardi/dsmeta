import styled from "styled-components";

export const ContainerHome = styled.section`
  max-width: 56.25rem;
  width: 100%;
  margin: 2rem auto;
  padding: 0 1rem;
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme["blue-900"]};
  padding: 2rem;
  border-radius: 5px;
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;

  @media only screen and (max-width: 600px) {
    width: 100vw;
  }

  @media only screen and (max-width: 500px) {
    width: 160vw;
  }

  thead {
    height: 3.438rem;
    font-weight: 700;
  }

  tbody {
    font-size: 0.875rem;
    text-align: center;
  }

  tbody tr {
    height: 3rem;
    border-top: 1px solid ${({ theme }) => theme["gray-300"]};
  }

  tbody tr:hover > td {
    background-color: ${({ theme }) => theme["blue-300"]};
  }

  tbody tr:nth-child(odd) {
    background-color: ${({ theme }) => theme["blue-700"]};
  }
`;

export const ButtonNotification = styled.button`
  line-height: 0;
  background: rgba(255, 107, 114, 0.1);

  width: 2rem;
  height: 2rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme["pink-500"]};
  cursor: pointer;

  > img {
    width: 0.875rem;
  }

  &:hover {
    background: rgba(255, 107, 114, 0.3);
  }
`;

export const ScrollAuto = styled.div`
  height: 450px;
  width: 100%;
  overflow: auto;
`;

export const WrapperDatePicker = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: ${({ theme }) => theme["blue-400"]};
    font-size: 1.5rem;
    font-weight: 700;
  }

  > div {
    width: 400px;
    display: flex;
    align-items: center;
  }

  .date-picker {
    background-color: ${({ theme }) => theme["blue-700"]};
    color: ${({ theme }) => theme["gray-100"]};
    border: 0;
    height: 2.5rem;
    padding-left: 1rem;
    border-radius: 5px;
    width: 180px;

    &:disabled {
      opacity: 0.4;
      color: ${({ theme }) => theme["gray-400"]};
      cursor: not-allowed;
    }
  }

  @media only screen and (max-width: 600px) {
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;

    h2 {
      margin-bottom: 1rem;
    }

    > div {
      width: 100%;
      flex-direction: column;
    }

    .date-picker {
      width: 100%;
      margin-top: 0.5rem;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  > p {
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme["gray-400"]};
  }
`;
