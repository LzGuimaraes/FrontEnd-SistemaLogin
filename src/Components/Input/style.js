import styled from 'styled-components'

export const InputCustomizado = styled.input `
    color: #FFF;
    font-size: 16px;
    background-color: rgba(106, 106, 106, 0.1);
    border: 2px solid #6a6a6a;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 16px 20px;
    width: 100%;
    outline: none;
    transition: all 0.3s ease;
    margin-bottom: 5px;
    
    &:focus {
        border-color: #9a9a9a;
        background-color: rgba(106, 106, 106, 0.2);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }
    
    &:hover {
        border-color: #8a8a8a;
    }
    
    &::placeholder {
        color: #9a9a9a;
        font-size: 14px;
        opacity: 0.7;
    }
`
