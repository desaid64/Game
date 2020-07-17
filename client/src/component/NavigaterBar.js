import React from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import SinglePagePDFViewer from './SinglePagePDFViewer';
import AllPagesPDFViewer from "./AllPagesPDFViewer"
import pdfs  from '../data/pdfs.js';


class NavigationBar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            pdfAvailable: false,
            pdfName: "",
            samplePdf: null
        };
        this.onStart=this.onStart.bind(this);
    }
    loadComponent(name) {
        console.log(name);
        const Component = name;
        return Component;
    }
    onStart(e){
        e.preventDefault();
        console.log(e.target);
        this.setState({
            pdfAvailable: true,
            pdfName:e.target.name,
            samplePdf:pdfs.findPdf(e.target.id, e.target.name),
        });
    }

  render() {
    return (
        <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>Murder Mystery</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {
                        Object.keys(pdfs.allpdfs).map(i => {
                            return (
                                <NavDropdown title={i} id="collasible-nav-dropdown">
                                    {
                                        Object.keys(pdfs.allpdfs[i]).map(j => {
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
            <Nav.Link href="#Character">Charater</Nav.Link>
            <Form inline>
                <Form.Control as="select" defaultValue="Choose Culprit.." className="mr-sm-2">
                <option>Choose Culprit..</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                </Form.Control>
                <Button variant="success">Finish</Button>
            </Form>
            </Navbar.Collapse>
        </Navbar>
        {this.state.pdfAvailable && <SinglePagePDFViewer pdf={this.state.samplePdf} />}
        <h1> Multi Page</h1>
        {this.state.pdfAvailable && <AllPagesPDFViewer pdf={this.state.samplePdf} />}
        </div>
    );
  }
}


export default NavigationBar; 