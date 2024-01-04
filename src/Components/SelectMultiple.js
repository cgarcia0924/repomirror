import React, { Fragment } from 'react';
import Select from 'react-select';
import axios from 'axios';
//import DycUsuarios from "./DycUsuarios";
/*const options1 = [
  { value: "rojo", label: "rojo" },
  { value: "azul", label: "azul" },
  { value: "verde", label: "verde" },
  { value: "blanco", label: "blanco" }
];
*/
//const options=DycUsuarios;
export default class SelectMultiple extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
      Usuarios: [],
    };
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    // Option selected: { value: "rojo", label: "rojo" }
    // console.log("Option selected:", selectedOption);
    this.props.functionCallFromParent(JSON.stringify(selectedOption));
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
    this.setState({ Usuarios: aux });
  }

  render() {
    return (
      <Fragment>
        <Select
          isMulti
          options={this.state.Usuarios}
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
  const archivoson = { body: {}, metodo: 'GETUSERS' };

  //const ress = ""
  const ress = await axios.get(
    'https://ze9l39fzei.execute-api.us-east-1.amazonaws.com/dev/genesysusers'
  );
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

  const users = ress.data;
  var usuarios = users.users.map((d) => ({
    value: d.id,
    label: d.name,
  }));

  //console.log(global.options);
  //return JSON.parse(options);

  //this.state.form(options);
  //console.log(usuarios);
  return usuarios;
}
