import React from "react";
import {Container, Row, Image,Card} from 'react-bootstrap'


export default function ImageViewer(props) {
    const {images} =props;
return (
    <Container>
    <Row>
        {
          Object.entries(images).map(([key, value]) =>{
                return (
                    <Card className="text-center">
                        <Image width={value.width} height={value.height} src={value.src} />
                        <Card.Title>{key}</Card.Title>
                    </Card>
                );
            })
        }
    </Row>
    </Container>
);
}