import React, { useContext } from 'react';
import { Card, Image, Button } from "semantic-ui-react";
import  ActivityStore  from "../../../app/stores/activityStore";
import { observer } from 'mobx-react-lite';


const ActivityDetails:React.FC = () => {
    const activityStore = useContext(ActivityStore)
    const {selectedActivity:activity,openEditForm,cancelSelectedActivity}=activityStore
    
    return (
        <Card fluid>
            <Image src={"/assets/category/"+activity!.category+".jpg"} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{activity!.title}</Card.Header>
                <Card.Meta>
                    <span>{activity!.date}</span>
                    <span>{activity!.category}</span>
                </Card.Meta>
                <Card.Description>
                    {activity!.description}

            </Card.Description> 
            </Card.Content>
            <Card.Content extra>
                <Button.Group fluid>
                    <Button onClick={()=>openEditForm(activity!.id)} basic content="Edit" color="green" />
                    <Button onClick={cancelSelectedActivity } basic content="Cancel" color="blue" /> 
                </Button.Group>
            </Card.Content>
        </Card>
    )
}

export default  observer(ActivityDetails);
