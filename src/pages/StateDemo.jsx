
import React from 'react';


function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {

    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}


function BoilingVerdict(props) {
    if (props.celsisu >= 100) {
        return <p>The water would boil</p>
    }
    return <p>The water would not boil</p>

}



class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        // this.state = { temperature: '' };
    }

    scaleNames = {
        c: 'Celsius',
        f: 'Fahrenheit'
    };
    

    handleChange(e) {
        // this.setState({ temperature: e.target.value });

        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        // const temperature = this.state.temperature;
        const t = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>
                    Enter temperature in {this.scaleNames[scale]}:
                </legend>
                <input value={t} onChange={this.handleChange} />
                {/* <BoilingVerdict celsisu={parseFloat(temperature)}></BoilingVerdict> */}
            </fieldset>
        );
    }

}

export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = { t: '', scale: 'c' };
    }

    handleCelsiusChange(t) {
        let ss = { scale: 'c', t } // {scale: "c", t: "1"}
        this.setState(ss);
    }

    handleFahrenheitChange(t) {

        this.setState({ scale: 'f', t });
    }

    render() {

        const scale = this.state.scale;
        const t = this.state.t;
        const celsius = scale === 'f' ? tryConvert(t, toCelsius) : t;
        const fahrenheit = scale === 'c' ? tryConvert(t, toFahrenheit) : t;

        return (
            <div>
                <TemperatureInput
                    scale='c'
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />
                <TemperatureInput scale='f'
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                />
                <BoilingVerdict celsisu={parseFloat(celsius)} />
            </div>
        );
    }
}