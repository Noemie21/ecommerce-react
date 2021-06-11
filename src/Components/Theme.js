import styled from 'styled-components';

const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

let color = {
  primary: '#72147e',
  secondary: '#f21170',
};

if (prefersDarkScheme.matches) {
  color = {
    primary: '#fa9905',
    secondary: '#ff5200',
  };
}

export const Color = color;

export const Grid = {
  flex: styled.div`
    display: flex;
  `,
};

export const Buttons = {
  primary: styled.button`
    color: white;
    background-color: ${Color.primary};
    border-radius: 5px;

    &:hover {
      background-color: ${Color.secondary};
    }
  `,
  secondary: styled.button`
    color: white;
    background-color: ${Color.secondary};
    border-radius: 5px;

    &:hover {
      background-color: ${Color.primary};
    }
  `,
};

export const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  /* background-color: black; */
  /* color: white; */
`;
