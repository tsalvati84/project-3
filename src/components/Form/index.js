import React from "react";

class Form extends React.Component{

    render(){

        return(
            
                <form onSubmit = {this.props.loadWeather}>
                    <input type="text" name="city" placeholder="City..."/>
                    <input type="text" name="country" placeholder="Country..."/>
                    <br></br>
                    <button>Get Weather</button>
                </form>
           
        )
    }
}

export default Form;