import React from 'react' 
import styled from 'styled-components'
import Fab from '@material-ui/core/Fab';
import Menu from '@material-ui/icons/Menu'

const StayVisible = styled.div`
    position: absolute;
    margin-left: ${
        (props) => 
            (props.open)
            ? `${props.width}px`
            : 'none'
    }
    transition: margin .2s;
`

export const NavToggleButton = (props) => {
    return (
        <StayVisible
            {...props}
        >
            <Fab
                onClick={props.toggleDrawer}
            >
                <Menu />
            </Fab>
        </StayVisible>
    )
}