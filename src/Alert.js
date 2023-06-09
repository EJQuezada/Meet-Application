import React, { Component } from "react";

class Alert extends Component {
    constructor(props) {
        super(props);
        this.color = null;
    }

    getStyle = () => {
        return {
            color: this.color,
            backgroundColor: this.bgColor,
            borderWidth: "2px",
            fontWeight: "bolder",
            borderRadius: "7px",
            borderColor: this.color,
            textAlign: "center",
            fontSize: "12px",
            margin: "10px 0",
            padding: "10px"
        };
    }

    render() {
        return (
            <div className="Alert">
                <p style={this.getStyle()}>{this.props.text}</p>
            </div>
        );
    }
}

class InfoAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'rgb(0, 0, 255)'; //blue
    }
}

class WarningAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'orange';
    }
}

class ErrorAlert extends Alert {
    constructor(props) {
        super(props);
        this.color = 'red';
    }
}

export { InfoAlert, WarningAlert, ErrorAlert  };