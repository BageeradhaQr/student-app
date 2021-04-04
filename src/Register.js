import React,{ Component} from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';

class Register extends Component{

    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
        this.firstName = this.firstName.bind(this);
        this.lastName = this.lastName.bind(this);
        this.email = this.email.bind(this);
        this.password = this.password.bind(this);
        this.registerUser = this.registerUser.bind(this);
    }

    firstName(event){
        this.setState({firstName: event.target.value })
    }

    lastName(event){
        this.setState({lastName: event.target.value})
    }

    email(event){
        this.setState({email: event.target.value})
    }

    password(event){
        this.setState({password: event.target.value})
    }

    registerUser(event){
        debugger;
        fetch('http://localhost:8080/profile/api/registerUser',{
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
            })
        }).then((Response)=> Response.json())
        .then((result)=>{
            console.log(result);
            if(result.message ==='Failed'){
                alert('Invalid User data');
            }else{
                //localStorage.setItem('reg-info',JSON.stringify(result));
                this.props.history.push("/login");
            }
        })
    }

    render() {
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="9" lg="7" xl="6">
                            <CardGroup>
                                <Card className="p-2">
                                    <CardBody>
                                        <Form>
                                            <div class="row" className="mb-2 pageheading">
                                                <div>
                                                    Sign Up
                                                </div>
                                            </div>
                                            <InputGroup className="mb-3">
                                                <Input type="text" onChange={this.firstName} placeholder="Enter First name" />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <Input type="text" onChange={this.lastName} placeholder="Enter Last name" />
                                            </InputGroup>
                                            <InputGroup className="mb-3">
                                                <Input type="text" onChange={this.email} placeholder="Enter Email" />
                                            </InputGroup>
                                            <InputGroup className="mb-4">
                                                <Input type="password" onChange={this.password} placeholder="Enter Password" />
                                            </InputGroup>
                                            <Button onClick={this.registerUser} color="success" block>Sign Up</Button>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div>

           /* <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
                 <form>
                <h3 className="lbl-txt">Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" onChange={this.firstName} className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" onChange={this.lastName} className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" onChange={this.email} className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={this.password} className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.registerUser} color="success" block>Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
            </div>*/
        );
    }
}

export default Register;