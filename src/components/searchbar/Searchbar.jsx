import React, {Component} from "react";

class Searchbar extends Component {
    state = {
        text: "",
    };

    reset = () => { this.setState({ text: "" }) };

    inputHandler = (e) => {
        const { value } = e.currentTarget
        this.setState({ text: value })
    };



    submitHandler = (e) => {
        e.preventDefault();
        const count = 1

        this.props.submit(this.state.text, count);
        this.reset();
    };


    render() {
        const { text } = this.state;

        return (
        <header className="searchbar">
            <form className="form" onSubmit={this.submitHandler}>
                <button type="submit" className="button">
                    <span className="button-label">Search</span>
                </button>
                <input
                    className="input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={text}
                    onChange={this.inputHandler}
                />
            </form>
        </header>
        );
    };
};

export default Searchbar;