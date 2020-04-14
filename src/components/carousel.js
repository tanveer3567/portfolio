import React from 'react'
// import Card from '../components/card';

import movie_rockerz from '../assets/images/movie_rockerz.PNG'
import object_detection from '../assets/images/object_detection.PNG'
import maxconnect4 from '../assets/images/maxconnect4.PNG'
import mac_mnt_sys from '../assets/images/mac_mnt_sys.PNG'
import wumpus_world from '../assets/images/wumpus_world.PNG'
import a_star_search from '../assets/images/A_star_search.PNG'

import { Jumbotron, Container, Row, Col, Card, Button } from 'react-bootstrap';



class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Movie Rockers',
                    subTitle: 'A movie recommendation system.',
                    imgSrc: movie_rockerz,
                    link: 'https://github.com/tanveer3567/Movie-Rockerz',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Object Detection',
                    subTitle: 'Object detection on non-iconic images using convolutional neural network.',
                    imgSrc: object_detection,
                    link: '#',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Max Connect 4',
                    subTitle: 'A board game to play.',
                    imgSrc: maxconnect4,
                    link: '#',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Mac Maintenence System',
                    subTitle: 'A website form maintenence of Mavirck\'s Activity Center.',
                    imgSrc: mac_mnt_sys,
                    link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Wumpus World',
                    subTitle: 'A scray game of man and a monster',
                    imgSrc: wumpus_world,
                    link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },
                {
                    id: 5,
                    title: 'A star search',
                    subTitle: 'A website form maintenence of Mavirck\'s Activity Center.',
                    imgSrc: a_star_search,
                    link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },
            ]
        }
    }

    handleCardOver = (id, card) => {
        let items = [...this.state.items]
        items[id].selected = true;
        items.map(item => {
            if (item.id !== id) {
                item.selected = false
            }
            return null;
        })
        this.setState({
            items
        });
    }

    // handleCardLeave = (id, card) => {
    //     let items = [...this.state.items]
    //     items[id].selected = items[id].selected ? false : true;
    //     this.setState({
    //         items
    //     });
    // }


    makeItems = (items) => {
        return items.map(item => {
            var text = "";
            var repo = "";
            if (item.selected) {
                text = item.subTitle;
                repo = "Repo"
            } 
            return (
                <Col className="p-4" key={item.id}>
                    <Card style={{ width: '18rem' }} onMouseOver={(e => this.handleCardOver(item.id, e))} >
                        <Card.Img variant="top" src={item.imgSrc}/>
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>{text}</Card.Text>
                            <Button variant="link">{repo}</Button>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
    }


    render() {
        return(
            <Jumbotron className="bg-transparent jumbotron-fluid p-6">
                <Container fluid={false}>
                    <Row className="justify-content-center" md={10}>
                        {this.makeItems(this.state.items)}
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}

export default Carousel;