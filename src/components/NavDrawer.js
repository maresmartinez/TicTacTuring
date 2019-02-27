// import React, { Component } from 'react'
// import Drawer from '@material-ui/core/Drawer'
// import MenuItem from '@material-ui/core/MenuItem'
// import Divider from '@material-ui/core/Divider'
// import { Link } from 'react-router-dom'
// import { NavToggleButton } from '../styled/NavDrawer'

// class NavDrawer extends Component {
//     state = {
//         open: true,
//         width: 250
//     }

//     toggleDrawer = () => {
//         this.setState((prevState, props) => {
//             return {
//                 open: !prevState.open
//             }
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <NavToggleButton
//                     toggleDrawer={this.toggleDrawer}
//                     width={this.state.width}
//                     open={this.state.open}
//                 />
//                 <Drawer 
//                     open={this.state.open}
//                     width={this.state.width}>
//                     <div
//                         style={{
//                             height: "200px",
//                             width: '100%',
//                             backgroundColor: 'salmon'
//                         }}>

//                     </div>
//                     <Divider />
//                     <Link to={'/'}>
//                         <MenuItem onClick={this.toggleDrawer}>
//                             Play
//                         </MenuItem>
//                     </Link>
//                     <Link to={'/profile'}>
//                         <MenuItem onClick={this.toggleDrawer}>
//                             Profile
//                     </MenuItem>
//                     </Link>
//                 </Drawer>
//             </div>
//         )
//     }
// }

// export default NavDrawer

import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer'
import MenuItem from '@material-ui/core/MenuItem'
import Divider from '@material-ui/core/Divider'
import { Link } from 'react-router-dom'
import { NavToggleButton } from '../styled/NavDrawer'

class NavDrawer extends Component {
    state = {
        open: true,
        width: 80
    }

    toggleDrawer = () => {
        this.setState((prevState, props) => {
            return {
                open: !prevState.open
            }
        })
    }

    render() {
        return (
            <div>
                <NavToggleButton
                    toggleDrawer={this.toggleDrawer}
                    width={this.state.width}
                    open={this.state.open}
                />
                <Drawer 
                    open={this.state.open}
                    width={this.state.width}
                    variant='persistent'>
                    <div
                        style={{
                            height: "200px",
                            width: '100%',
                            backgroundColor: 'salmon'
                        }}>

                    </div>
                    <Divider />
                    <Link to={'/'}>
                        <MenuItem onClick={this.toggleDrawer}>
                            Play
                        </MenuItem>
                    </Link>
                    <Link to={'/profile'}>
                        <MenuItem onClick={this.toggleDrawer}>
                            Profile
                    </MenuItem>
                    </Link>
                </Drawer>
            </div>
        )
    }
}

export default NavDrawer