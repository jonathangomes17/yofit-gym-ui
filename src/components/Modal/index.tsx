import React from 'react'
import styled from 'styled-components'
import IModal from './types'
import LogoYofitGymWhite from '../../assets/yofit-gym-logo-white.svg'

const Wrapper = styled.dialog`
    display: flex;
    justify-content: center;
    align-items: baseline;
    width: 100vw;
    height: 100%;
    z-index: 2;
    text-align: center;
    padding: 2rem;
    background: rgba(14,42,71,.9);

    &[open] {
        animation: appear .15s cubic-bezier(0, 1.8, 1, 1.8);
    }

    &::backdrop {
        background: linear-gradient(45deg, rgba(0,143,104,.5), rgba(250,224,66,.5));
    }

    .actions {
        display: flex;
        justify-content: space-around;
    }

    @keyframes appear {
        from {
            opacity: 0;
            transform: translateX(-3rem);
        }
        
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.img`
    width: 200px;
    height: 60px;
    margin-bottom: 1rem;
`;

const Title = styled.span`
    font-size: 2rem;
    color: black;
    margin-bottom: 1rem;
`;

const ContentInner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 464px;
    min-height: 303px;
    background: white;
    border-radius: 6px;
    padding: 50px;
`;

const Modal: React.FC<IModal> = ({title, children, actions}) => {
    return (
        <Wrapper>
            <ContentWrapper>
                <Logo src={LogoYofitGymWhite} alt="Logo Yofit Gym White" />

                <ContentInner>
                    <Title>{title}</Title>
                    {children}
                    {actions}
                </ContentInner>
            </ContentWrapper>
        </Wrapper>
    )
}

export default Modal
