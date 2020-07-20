import React from 'react';
import { Button, Navbar, Nav, NavDropdown, Form } from 'react-bootstrap';
import SinglePagePDFViewer from './SinglePagePDFViewer';
import AllPagesPDFViewer from "./AllPagesPDFViewer"
import data  from '../data/data.js';
import ImageViewer from './ImageViewer';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Navigation extends React.Component {
    constructor(props){
        super(props);

        this.state={
            pdfAvailable: false,
            pdfName: "",
            samplePdf: null,
            imageAvailable: false,
            images: {},
            value : "Choose Culprit..",
            redirect : false,
            userID : ""
        };
        this.onStart=this.onStart.bind(this);
        this.setImageViewer=this.setImageViewer.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    
    loadComponent(name) {
        const Component = name;
        return Component;
    }
    onStart(e){
        e.preventDefault();
        this.setState({
            pdfAvailable: true,
            pdfName:e.target.name,
            samplePdf:data.findPdf(e.target.id, e.target.name),
            imageAvailable: false,
        });
    }

    setImageViewer(e){
        e.preventDefault();
        this.setState({
            imageAvailable: true,
            pdfAvailable: false,
            samplePdf : null,
            images: data.allImgs
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const id = e.target.id; 
        if(this.state.value !== "Choose Culprit.."){
            axios.post('/users/end/', {
                userID: id,
                answer: this.state.value
            }).then(res => {
                this.setState({
                    userID: res.data.userID,
                    redirect: true
                });
                this.props.getUser(this.state.userID);
            })
        }
        else {alert("Choose a Culprit!")}
    }

    handleChange(e){
        e.preventDefault();
        this.setState({value: e.target.value});
    }
  render() {
    if(this.state.redirect){
        return <Redirect to="/finish" />
    }
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>Murder Mystery</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {
                        Object.keys(data.allpdfs).map(i => {
                            return (
                                <NavDropdown title={i} id="collasible-nav-dropdown">
                                    {
                                        Object.keys(data.allpdfs[i]).map(j => {
                                            return(
                                            <NavDropdown.Item name={j}  id={i} onClick={this.onStart} > {j} </NavDropdown.Item>
                                            )
                                        })
                                    }   
                                </NavDropdown>
                            )
                        })
                    } 
                </Nav>
            <Nav.Link onClick={this.setImageViewer}>Charater</Nav.Link>
            <Form inline  id={this.props.userID} onSubmit={this.handleSubmit}>
                <Form.Control as="select" className="mr-sm-2" value={this.state.value} onChange={this.handleChange}>
                <option>Choose Culprit..</option>
                {data.Characters.map((value) =>
                    {return <option> {value} </option>})
                }
                </Form.Control>
                <Button type="submit" variant="success" >Finish</Button>
            </Form>
            </Navbar.Collapse>
        </Navbar>
        <div style={{display: 'flex', justifyContent: 'center'}}>
            {this.state.pdfAvailable && <SinglePagePDFViewer pdf={this.state.samplePdf} />}
            {this.state.pdfAvailable && <h1> Multi Page</h1> }
            {this.state.pdfAvailable && <AllPagesPDFViewer pdf={this.state.samplePdf} />}
        </div>
            {this.state.imageAvailable && <ImageViewer images={this.state.images} />}    
        </div>
    );
  }
}


export default Navigation; 