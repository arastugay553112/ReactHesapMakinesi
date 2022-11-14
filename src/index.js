import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const scaleNames = {
  c: 'santigrat',
  f: 'fahrenayt'
};

function cevirSantigrat(fahrenayt){
  return (fahrenayt-32) * 5 / 9;
}
function cevirFahrenayt(santigrat){
  return (santigrat * 9 / 5) + 32;
}

function tryCeviri(sicaklik,convert){
  const giris=parseFloat(sicaklik);
  if(Number.isNaN(giris)){
    return '';
  }
  const cikis=convert(giris);
  const rounded=Math.round(cikis * 1000)/1000;
  return rounded.toString();
}

function Kaynama(props){
if(props.santigrat >=100){
  return <p>kaynadı</p>
}
return <p>kaynamadı</p>
}

class SicaklikGirisi extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onSicaklikCahnge(e.target.value);
  }

  render() {
    const sicaklik = this.props.sicaklik;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Sıcaklık Girin: {scaleNames[scale]}:</legend>
        <input value={sicaklik}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Derece extends React.Component {
  constructor(props){
    super(props);
    this.handleSantigratChange= this.handleSantigratChange.bind(this);
    this.handleFahrenaytChange= this.handleFahrenaytChange.bind(this);
    this.state={sicaklik: '',scale:'c'};
  }

  handleSantigratChange(sicaklik){
this.setState({scale:'c',sicaklik});
  }
  handleFahrenaytChange(sicaklik){
    this.setState({scale:'f',sicaklik});
      }

  render() {

    const scale=this.state.scale;
    const sicaklik=this.state.sicaklik;
    const santigrat=scale==='f' ? tryCeviri(sicaklik,cevirSantigrat) : sicaklik;
    const fahrenayt=scale==='c' ? tryCeviri(sicaklik,cevirFahrenayt) : sicaklik;

    return (
      <div>
        <SicaklikGirisi scale="c" sicaklik={santigrat} onSicaklikCahnge={this.handleSantigratChange} />
        <SicaklikGirisi scale="f"  sicaklik={fahrenayt} onSicaklikCahnge={this.handleFahrenaytChange} />
        <Kaynama santigrat={parseFloat(santigrat)} />
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
