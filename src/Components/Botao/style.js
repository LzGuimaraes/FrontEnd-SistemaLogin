import styled from 'styled-components'

export const BotaoCustomizado = styled.button `
    color: #FFF;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.5px;
    border: none;
    background: linear-gradient(135deg, #6a6a6a 0%, #4a4a4a 100%);
    border-radius: 8px;
    width: 100%;
    height: 50px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        transition: all 0.5s ease;
    }
    
    &:hover {
        background: linear-gradient(135deg, #7a7a7a 0%, #5a5a5a 100%);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        
        &:before {
            left: 100%;
        }
    }
    
    &:active {
        transform: scale(0.98);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }
    
    ${props => props.disabled && `
        opacity: 0.5;
        cursor: not-allowed;
        background: linear-gradient(135deg, #6a6a6a 0%, #4a4a4a 100%);
        &:hover {
            background: linear-gradient(135deg, #6a6a6a 0%, #4a4a4a 100%);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            &:before {
                left: -100%;
            }
        }
        &:active {
            transform: none;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
    `}
`
