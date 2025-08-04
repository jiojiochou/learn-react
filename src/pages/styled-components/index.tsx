import { styled, keyframes  } from 'styled-components';

export function StyledComponent() {
    const Title = styled.h1<{ color?: string }>`
        font-size: 30px;
        text-align: center;
        color: ${ props => props.color || 'blue' };
    `;


    const Header = styled.div`
        padding: 20px;
        background: pink;
    `;

    const animation = keyframes`
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(100px);
        }
    `;

    console.log(animation)

    return (
        <div>
            <Title>styled.h1</Title>
            <Title color="green">styled.h1</Title>
            <Title color="red">styled.h1</Title>
            <Header>styled.div</Header>
        </div>
    )
}