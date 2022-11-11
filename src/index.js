import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const scaleNames={
  c:'Santigrat',
  f:'fahrenayt'
};
class SicaklikGirisi extends React.Component{
  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this);
    this.state={sicaklik: ''};
  }
  handleChange(event){
    this.setState({
sicaklik: event.target.value
    });
  }
  render(){
    const sicaklik=this.state.sicaklik;
    const scale=this.props.scale;
    return (
      <fieldset>
        <legend>Sıcaklığı Girin: {scaleNames[scale]}:</legend>
        <input value={sicaklik} onChange={this.handleChange} />
      </fieldset>
    );
  }
}
class Derece extends React.Component{
  render(){
    return (
      <div>
        <SicaklikGirisi scale="c" />
        <SicaklikGirisi scale="f" />
      </div>
    );
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Derece />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
