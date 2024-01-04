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
    if(selectedOption.length>3){
      alert('Solo puede seleccionar tres parametros para nombrar los archivos de audio.')
    }else{
      this.setState({ selectedOption });
      this.props.functionCallFromParent(JSON.stringify(selectedOption));
    }
  };

  async componentDidMount() {
    const aux = await getA();
    let cc = 0; 
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
  var usuarios=[
    {
      value:"fecha",
      label:"Fecha de Conversación"
    },
    {
      value:"ani",
      label:"ANI"
    },
    {
      value:"dnis",
      label:"DNIS"
    },
    {
      value:"cola",
      label:"Cola"
    },
    {
      value:"agente",
      label:"Agente"
    },
    {
      value:"contactlist",
      label:"Lista de contacto"
    }
  ]
  return usuarios;
}
