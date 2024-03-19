import styled from 'styled-components';


export const Container = styled.div`
    position: absolute;
    top: 230px;
    left: 360px;
    z-index: 2;
    width: 450px;
    padding: 20px 15px;
    background: #fff;
    border-radius: 12px;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 16px;
`;

export const Title = styled.h3`
    font-size: 24px;
    line-height: 100%;
`;

export const List = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: column;
    gap: 12px;
`;

export const Item = styled.li`
    font-size: 18px;
    line-height: 75%;
`;

export const Link = styled.a`
    text-decoration: none;
    font-size: 16px;
    line-height: 75%;
    transition: all 0.5s;

    &:hover {
        color: #4848fb;
        text-decoration: underline;
    }
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
