import React from 'react'
import { Tab, Grid, Segment, Icon, Header, Image, Menu, MenuItem } from 'semantic-ui-react'
import AllJobs from './AllJobs'
import AppliedJobs from './AppliedJobs'

const Jobs = (props) => {

    const panes = [
        {
            menuItem: (
                <Menu.Item>
                    <a style={{ borderRadius: '10px' }}>

                        <h4 class="ui header" style={{ paddingTop: '3px', paddingBottom: '3px' }}>
                            <div class="content" style={{ paddingLeft: '8px' }}>All Jobs</div>
                        </h4>

                    </a>
                </Menu.Item>
            ),
            render: () => <Tab.Pane style={{border:'0px',width:'98%',marginLeft:'1%'}}>
                
                   <AllJobs/>
              
            </Tab.Pane>
        },
        {
            menuItem: (
                <Menu.Item className="reels">
                    <a style={{ borderRadius: '10px' }}>

                        <h4 class="ui header" style={{ paddingTop: '3px', paddingBottom: '3px' }}>
                            <div class="content" style={{ paddingLeft: '8px' }}>Applied Jobs</div>
                        </h4>

                    </a>
                </Menu.Item>
            ),
            render: () => <Tab.Pane style={{border:'0px',width:'98%',marginLeft:'1%'}}>
               
                    <AppliedJobs data={props.data}/>
               
            </Tab.Pane>
        },

    ]


    return (

        <div class="ui card jobs" style={{width:'100%',borderRadius: '8px'}}>
            <Tab  menu={{ secondary: true, pointing: true }} panes={panes}/>
        </div >

    )
}

export default Jobs