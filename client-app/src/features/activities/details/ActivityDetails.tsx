import React from 'react'
import { Card, Image, Icon, Button } from "semantic-ui-react";


const ActivityDetails = () => {
    return (
        <Card fluid>
            <Image src='/assets/venso.png' wrapped ui={false} />
            <Card.Content>
                <Card.Header>Title</Card.Header>
                <Card.Meta>
                    <span>Date</span>
                </Card.Meta>
                <Card.Description>
                    Description

            </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group fluid>
                    <Button basic content="Edit" color="green" />
                    <Button basic content="Cancel" color="blue" />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}

export default ActivityDetails
