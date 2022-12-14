import react, { Component } from "react";
import { View,Button, TextInput } from "react-native";

class Form extends Component{

    static defaultProps = {
        onAdd: () =>{

        }
    }

    state = {
        text:''
    }

    add = () =>{
        const {state} = this
        if(state.text){
            this.props.onAdd(state.text)
            this.handleChange('')
        }
    }

    handleChange =(text) =>{
        this.setState({text})
    }

    render(){
        return(
            <View>
                <TextInput value={this.state.text} onChangeText={this.handleChange}/>
                <Button title="Adicionar" color="gray" onPress={this.add}/>
            </View>
        )
    }
}

export default Form