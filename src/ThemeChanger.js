import React, { Component } from "react";

class ThemeChanger extends Component {
    state = {
        theme: 190
    };

    themeUp = () => {
        let newTheme = this.state.theme + 8;
        if(newTheme > 360) newTheme -= 360;
        this.setState({ theme: newTheme });
        this.updateTheme();
    }

    themeDown = () => {
        let newTheme = this.state.theme - 8;
        if(newTheme < 0) newTheme += 360;
        this.setState({ theme: newTheme })
        this.updateTheme();
    }

    updateTheme () {
        document.documentElement.style.setProperty('--primary-hue', this.state.theme)
    }

    render() {
        return (
            <div className="ThemeChanger">
                <button onClick={this.themeUp}>+</button>
                <div className="theme-number">{this.state.theme}</div>
                <button onClick={this.themeDown}>-</button>
            </div>
        );
    }
}

export default ThemeChanger;