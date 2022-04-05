import styled from 'styled-components/native'

export const HeaderText = styled.Text`
    font-size: 32px;
    color: #fff;
    letter-spacing: 0.4px;
    font-weight: bold;
`

export const FlexVertical = styled.View`
    display: flex;
    flex-direction: column;
`

export const MovieCard = styled.View`
    height: 270px;
    width: 150px;
    background-color: #263238;
    margin-right: 10px;
    display: flex;
    flex-direction: column;
`

export const CardText = styled.Text`
    padding: 6px;
    font-size: 16px;
    overflow: hidden;
    letter-spacing: 0.2px;
    color: #fff;
`

export const CardImage = styled.Image`
    width: 100%;
    height: 225px;
`

export const VSpacer = styled.View`
    margin-top: ${p => `${p.rem}px`};
`

export const ComponentTitle = styled.Text`
    font-size: 24px;
    color: #fff;
    letter-spacing: 0.4px;
    font-weight: bold;
`