import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    
    scroll-snap-type: mandatory;
    overflow-y: scroll;
`

export const OverlaysRoot = styled.div`
    position: sticky;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`