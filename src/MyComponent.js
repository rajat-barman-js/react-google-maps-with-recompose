import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './MyComponent.css'
const MyComponent = (props) => {
    const marker = [
        {
            name: "North America",
            lat: "54.5260",
            lng: "-105.255119"
        }, {
            name: "South America",
            lat: "-8.7832",
            lng: "-55.4915"
        }, {
            name: "Asia",
            lat: "34.0479",
            lng: "100.6197"
        }]
    const handleClick = (val) => {
        props.onSelect(val)
    }
    const onMouseEnterHandler = (val) => {
        const boundary = [{ lat: 25.774, lng: -80.190 },
        { lat: 18.466, lng: -66.118 },
        { lat: 32.321, lng: -64.757 },
        { lat: 25.774, lng: -80.190 }]
        props.onHover(boundary)
    }
    const onMouseLeaveHandler = (val) => {
        props.onHover([])
    }
    return (
        <div>
            <Card className='cardone'>
                <CardBody>
                    {
                        marker.map((val, index) => {
                            return (<CardText
                                onClick={() => handleClick(val)} key={index}
                                onMouseEnter={() => onMouseEnterHandler(val)}
                                onMouseLeave={() => onMouseLeaveHandler(val)}>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                                </CardText>)
                        })
                    }

                </CardBody>
            </Card>
        </div>
    );
};

export default MyComponent;
