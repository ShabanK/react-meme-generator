import React, {Component} from "react"

class Image extends Component{
    constructor(){
        super()
        this.state={
            topText: "",
            bottomText: "",
            imageURL:"",
            err: null
        }
        this.handleChange=this.handleChange.bind(this)
    }
    componentDidMount(){
        fetch("https://api.thecatapi.com/v1/images/search")
            .then(data=>data.json())
            .then(json=>this.setState({imageURL: json[0].url}))
            .catch(err=>this.setState({err: err}))
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({[name]: value})
    }
    render(){
        return(
            <div>
                <form className="meme-form">
                    <input
                        name="topText"
                        value={this.state.topText}
                        placeholder="Top Text"
                        onChange={this.handleChange}
                    />
                    <input 
                        name="bottomText"
                        value={this.state.bottomText}
                        placeholder="Bottom Text"
                        onChange={this.handleChange}
                    />
                </form>
                <div className="meme">
                    <img src={this.state.imageURL} alt={"cate"}/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>)
    }
}

export default Image