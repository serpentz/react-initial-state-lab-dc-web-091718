import React from 'react'


export default class Bomb extends React.Component{

	constructor(props){
		super(props)
		this.state = {
			secondsLeft: this.props.initialCount
		}
	}


	render(){
		if(this.state.secondsLeft != 0 ){
			return `${this.state.secondsLeft} seconds left before I go boom!`
		}else{
			return "Boom!"
		}	
	}
}