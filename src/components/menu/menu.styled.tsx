import styled from 'styled-components';


export const Form = styled.form`
    position: absolute;
    top: 230px;
    left: 560px;
    z-index: 2;
    width: 350px;
    height: 150px;
    background: #fff;
    border-radius: 12px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
`;

export const Button = styled.button`
    width: 150px;
    height: 35px;
    background: #111169;
    border: none;
    border-radius: 6px;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
        background: #3e3ec7;
    }
`;
