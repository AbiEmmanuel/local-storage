import { Component } from 'react';
import './Form.css'

class Form extends Component {
    modelData;
    constructor(props) {
        super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeSize = this.onChangeSize.bind(this);
    this.onChangeWeight = this.onChangeWeight.bind(this);
    this.onChangeGift = this.onChangeGift.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        name: '',
        email: '',
        size: '',
        weight: '',
        gift: ''
    }
    
    }

    onChangeName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangeSize(e) {
        this.setState({ size: e.target.value })
    }

    onChangeWeight(e) {
        this.setState({ weight: e.target.value })
    }

    onChangeGift(e) {
        this.setState({ gift: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        this.setState({
            name: '',
            email: '',
            size: '',
            weight: '',
            gift: ''
        })
    }

    componentDidMount() {
        this.modelData = JSON.parse(localStorage.getItem('model'));

        if (localStorage.getItem('model')) {
            this.setState({
                name: this.modelData.name,
                email: this.modelData.email,
                size: this.modelData.size,
                weight: this.modelData.weight,
                gift: this.modelData.gift
            })
        } else {
            this.setState({
                name: '',
                email: '',
                size: '',
                weight: '',
                gift: ''
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('model', JSON.stringify(nextState));
    }
    
    render() {
        return(
            <div className="container">
                <form className="main-form"  onSubmit={this.onSubmit}>
                    <div className="form-div">
                        <label>Name</label>
                        <input type="text" className="form-input" onChange={this.onChangeName} />
                    </div>
                    <div className="form-div">
                        <label>Email</label>
                        <input type="email" className="form-input" onChange={this.onChangeEmail} />
                    </div>
                    <div className="form-div">
                        <label>Size</label>
                        <input type="text" className="form-input" onChange={this.onChangeSize} />
                    </div>
                    <div className="form-div">
                        <label>Weight</label>
                        <input type="text" className="form-input" onChange={this.onChangeWeight} />
                    </div>
                    <div className="form-div">
                        <label>Gift</label>
                        <textarea type="text" className="form-input" onChange={this.onChangeGift} />
                    </div>
                    <button type="submit" className="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;