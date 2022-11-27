import React from 'react'
import { Item, Button, Icon, Label,Header} from 'semantic-ui-react'

const AllJobs = () => {
    return (
        <Item.Group divided>

            <Item>
                <Item.Content>
                    <Item.Header as='a'>Software Developer</Item.Header>
                    <Item.Meta>
                        <span className='cinema'>Capgemini</span>
                    </Item.Meta>
                    <Item.Description style={{width:'85%'}}>Capgemini is hiring the best technical graduates emerging out of top engineering 
                        colleges to join us and become an integral part of our workforce.
                        Capgemini is hiring the best technical graduates emerging out of top engineering 
                        colleges to join us and become an integral part of our workforce.
                        </Item.Description>
                    <Item.Extra>
                        <Button primary floated='right'>
                            Apply
                            <Icon name='right chevron' />
                        </Button>
                        <Label>Java</Label>
                        <Label>Spring Boot</Label>
                        <Label>AWS</Label>

                    </Item.Extra>
                </Item.Content>
            </Item>



            <Item>
                <Item.Content>
                    <Item.Header as='a'>Software Developer</Item.Header>
                    <Item.Meta>
                        <span className='cinema'>Capgemini</span>
                    </Item.Meta>
                    <Item.Description style={{width:'85%'}}>Capgemini is hiring the best technical graduates emerging out of top engineering 
                        colleges to join us and become an integral part of our workforce.
                        Capgemini is hiring the best technical graduates emerging out of top engineering 
                        colleges to join us and become an integral part of our workforce.
                        </Item.Description>
                    <Item.Extra>
                        <Button primary floated='right'>
                            Apply
                            <Icon name='right chevron' />
                        </Button>
                        <Label>Java</Label>
                        <Label>Spring Boot</Label>
                        <Label>AWS</Label>

                    </Item.Extra>
                </Item.Content>
            </Item>


            <Item>
                <Item.Content>
                    <Item.Header as='a'>Software Developer</Item.Header>
                    <Item.Meta>
                        <span className='cinema'>Capgemini</span>
                    </Item.Meta>
                    <Item.Description style={{width:'85%'}}>Capgemini is hiring the best technical graduates emerging out of top engineering 
                        colleges to join us and become an integral part of our workforce.
                        Capgemini is hiring the best technical graduates emerging out of top engineering 
                        colleges to join us and become an integral part of our workforce.
                        </Item.Description>
                    <Item.Extra>
                        <Button primary floated='right'>
                            Apply
                            <Icon name='right chevron' />
                        </Button>
                        <Label>Java</Label>
                        <Label>Spring Boot</Label>
                        <Label>AWS</Label>

                    </Item.Extra>
                </Item.Content>
            </Item>
        </Item.Group>
    )
}

export default AllJobs