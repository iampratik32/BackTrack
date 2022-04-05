import styled from 'styled-components/native'

export const MainView = styled.ScrollView`
    flex-direction: column;
    background-color: #212121;
    padding: ${p => p.landscape ? '1%' : '5%'};
    display: flex;
    flex: 1;
`
