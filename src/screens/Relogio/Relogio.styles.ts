import styled from 'styled-components';

export const Container = styled.div`
    background: #0e0e10;
    width: 100%;
    height: 100%;

    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    color: #FFF;
    font-size: 40px;
    text-transform: uppercase;
    line-height: 24px;
`;

export const Display = styled.div`
    justify-content: center;
    align-items:center;
    display: flex;
`;

export const ComponentDisplay = styled.span`
    background: #ffff8d;
    font-size: 72px;
    line-height: 50px;
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
`;

export const Button = styled.button`
    background: #d1d1d1;
    border-radius: 15px;
    padding: 10px;
`;

export const Text = styled.p`
    font-size:32px;
    font-weight: bold;
    color: #ffff8d;
`;

export const PanelContainer = styled.main`
    display: flex; 
    width: 100%; 
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

export const Panel = styled.div`
    margin: 10px;
    background: #141414;
    width:20%;
    border-radius: 8px;
    border: 2px solid rgba(255,255,141, 0.8);
`;

export const PanelHeader = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 15px;

    border-bottom: 2px solid rgba(255,255,141, 0.8);
    margin: 0 5px;
`;

export const TextPanelHeader = styled.p`
    font-size: 22px;
    font-weight:700;
    font-family: 'Courier New', Courier, monospace;
    color: #ffff8d;
`;

export const PanelMain = styled.div`
    align-items:center;
    justify-content: center;
    display: flex;

    flex-direction: column;
`;

export const TextPanelMain = styled.p`
    font-size: 30px;
    font-weight:900;
    font-family: 'Courier New', Courier, monospace;
    color: #ffff8d;
`;

export const TextInfo = styled.p`
    font-size: 24px;
    font-style: italic;
    font-family: 'Courier New', Courier, monospace;
    color: rgba(255,255,255, 0.8);
    margin-top: -5px;
`;
