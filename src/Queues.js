import React, { Component, Fragment, useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
//import DycUsuarios from "./DycUsuarios";
const options1 = [
  { value: 'rojo', label: 'rojo' },
  { value: 'azul', label: 'azul' },
  { value: 'verde', label: 'verde' },
  { value: 'blanco', label: 'blanco' },
];

//const options=DycUsuarios;
export default class Queues extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      Queues: [],
    };
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    // Option selected: { value: "rojo", label: "rojo" }
    // console.log("Option selected:", selectedOption);
    this.props.functionCallFromParentQUEUES(JSON.stringify(selectedOption));
    // this.props.parentCallback(selectedOption);
    // selectedOption.preventDefault();
    // return selectedOption;
  };

  async componentDidMount() {
    //console.log(options1);
    const aux = await getA();
    //console.log(aux);
    // data = Array.from(props.data);
    let cc = 0;

    // let data = Array.from(props.Usuarios);
    /*
   var optionsU = [];
   Object.keys(aux).forEach(function(key) {
    if (cc<10   ){
    optionsU.push(aux[key]);
  }
  cc++;
   });
*/
    this.setState({ Queues: aux });
  }

  render() {
    return (
      <Fragment>
        <Select
          isMulti
          options={this.state.Queues}
          value={this.state.selectedOption}
          onChange={this.handleChange}
          closeMenuOnSelect={false}
          className="crearJobs"
          placeholder="Seleccione"
        />
      </Fragment>
    );
  }
}

async function getA() {
  //const archivoson = {body:{},metodo: "GET"};

  var payload = { body: {}, metodo: 'GETQUEUES' };

  //const ress = ""

  const ress = await axios.get(
    'https://ze9l39fzei.execute-api.us-east-1.amazonaws.com/dev/genesyscolas',
    //'http://localhost:3080/genesyscolas'
  );
  //const ress =  await axios.post('/prb2',payload,
  /*
  {
    headers: {
      "Access-Control-Allow-Headers" : "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    }           
  })
 
 */
  //const selectOptions[]=;

  const contactos = ress.data;
  console.log(ress.data)
  //console.log("respuesta queues:" +JSON.stringify(ress));
  var listac = contactos.queues.map((d) => ({
    value: d.id,
    label: d.name,
  }));

  //console.log(global.options);
  //return JSON.parse(options);

  //this.state.form(options);
  //console.log(usuarios);
  return listac;
}
