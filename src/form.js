import React from 'react';
import Output from './output';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
class Formloc extends React.Component{
    constructor(props) {
        super(props) 
          this.state = {
            city: '',
            displayName: '',
            lat: '',
            lon: '',
            mapImgPath: '',
            errorCode: ''
        }
    }
    handleChange = (e) => {
        this.setState({city: e.target.value})
        }
      
      handleSubmit = async (e) => {
        e.preventDefault();
        try{
        this.setState({display: ''})
        const key = 'pk.e318526a73d50b054277b694473bfdbc';
        const location = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${key}&q=${this.state.city}&format=json`)
        const cityInfo = location.data[0];
        let displayName = cityInfo.display_name;
        this.setState({displayName});
        this.setState({lat: cityInfo.lat})
        this.setState({lon: cityInfo.lon})
        this.setState({mapImgPath: `https://maps.locationiq.com/v3/staticmap?key=${key}&center=${cityInfo.lat},${cityInfo.lon}&zoom=12`})
        }
        catch(err) {
            console.log('err.message');
            this.setState({errorCode: err.message})
          }
        }
render(){
return (
    <>
    <Form onSubmit={this.handleSubmit}>
      <input name="city" placeholder="Type in a city name" onChange={this.handleChange} />
      <Button variant="primary" type="submit">Explore!</Button>
    </Form>
   
    {this.state.errorCode.length>0?
    <Container>
        <p>{this.state.errorCode}</p>
    </Container>
    :
    <>
      <Output
      displayName={this.state.displayName}
      mapImgPath={this.state.mapImgPath}
      lat={this.state.lat}
      lon={this.state.lon} />
    </>
    }
  </>
)
}
}

export default Formloc;