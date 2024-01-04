import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react'
import { signUp } from 'aws-amplify/auth';
//import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Amplify } from 'aws-amplify'
import config from './aws-exports'
import React from 'react';
import { BrowserRouter as Router, Routes, Route,HashRouter } from 'react-router-dom';
import Home from './Components/home.component';
import HomeTest from './Components/homeTest.component';
import HomeLogo from './Components/homeLogo.component';
import axios from 'axios';
import LoadingOverlay from 'react-loading-overlay-ts';
import Fechas from './Fechas';
import SelectMultiple from './SelectMultiple';
import SelectMultiplename from './SelectMultiplename';
import Queues from './Queues';
import moment from 'moment';

import {
  Table,
  Container,
  Modal,
  Button,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from 'reactstrap';
//import { Navbar, Nav, BSpan } from 'bootstrap-4-react';

//import {Switch} from 'react-switch-dom';
Amplify.configure(config)
const urlgrabacones = 'http://localhost:3080/';
const $ = require('jquery');
async function handleSignUp({ username, password, email, phone_number }) {
  try {
    const { isSignUpComplete, userId, nextStep } = await signUp({
      username,
      password,
      options: {
        userAttributes: {
          email,
          phone_number // E.164 number convention
        },
        // optional
        autoSignIn: true // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
      }
    });

    console.log(userId);
  } catch (error) {
    console.log('error signing up:', error);
  }
}

async function handleSignOut() {
  try {
    //await signOut();

  } catch (error) {
    console.log('error signing out: ', error);
  }
}
async function signIn({ username, password }) {
  try {
    const { isSignedIn, nextStep } = await signIn({ username, password });
  } catch (error) {
    console.log('error signing in', error);
  }
}
const MyButton = () => {
  //const [count, setCount] = useState(0);
const count=0;
const setCount=1;
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <button>
      Click me!
    </button>
  );
};

//const fs = require('fs');
const FileDownload = require('js-file-download');

//function App({ signOut, user }) {
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        form: {
          id: '',
          personaje: '',
          anime: '',
        },
  
        FechaJ: '',
        EstadoJ: '',
        nombre_archivoJ: '',
        request_conv_queryJ: '',
        nombre_usuarioJ: '',
        job_idJ: '',
        nombre_jobJ: '',
        dataUsers: null,
        finicio: '',
        ffin: '',
        message: '',
        renameA: 'fecha-cola',
        finiciojob: '',
        ffinjob: '',
        fechaII: '',
        messagejob: '',
        modalActualizar: false,
        modalCrearJobs: false,
        modalColas: false,
        modalAgentes: false,
        modalWrapups: false,
        habil: true,
        usuariosG: [],
        contactlistG: [],
        queuesG: [],
        wrapupsG: [],
        names: [],
        datos: [],
        jobs: [],
        contactlist: [],
        value: [],
        selectOptions: [],
        nombrejob: '',
        numerotel: '',
        fechaCrea: '2021-10-21',
        fechaCrea1: '',
        nombre_archivo: '',
        last: '',
        email: '',
        rol: '',
        mensaje: '',
        loading: true,
        error: false,
        selectValueHour: '22:00',
        action: 'EXPORT',
        actionDate: '2021-10-25T11:00:00.000Z',
        integrationId: '909bd962-2ed7-4666-9950-6877e685ecc9', //bangara
        //integrationId: '121940ce-2210-41c2-9f25-966d16a44e3c', //happy
        //integrationId: '40313b2a-6cf2-4f3a-bd80-2b72e4650c71', //recover
        includeScreenRecordings: true,
        conversationQuery: {
          interval: '2021-07-18T15:40:00.000Z/2021-07-18T15:45:59.000Z',
          order: 'asc',
          orderBy: 'conversationStart',
          limit: 1000,
        },
        jobsId: '56789-tredf-',
        fechaI: '2021-08-25',
        fechaF: '2021-08-25',
        fechaC: '2021-08-25',
        name: 'Nombre',
        colas: 'original',
        agente: 'agente',
        estado: 'CREADO',
        wrapupCode: 'requestJSON.wrapup_code',
        contactList: 'contactList',
        usuario: 'usuario',
        fechaaccion: '',
        modalEliminar: false,
        jobEliminar: {
          Fecha: '',
          job_id: '',
          Estado: '',
        },
        isActive: false,
        usercognito: '',
      };
      // this.state = { questions: [] };
      
      //this.handleSubmit = this.handleSubmit.bind(this);
      //this.handleJobSubmit = this.handleJobSubmit.bind(this);
      
      this.getData = this.getData.bind(this);
      this.getDataJob = this.getDataJob.bind(this);

      /*
      this.handleCreate = this.handleCreate.bind(this);
      this.getData = this.getData.bind(this);
      this.getDataJob = this.getDataJob.bind(this);
      this.handleCallbackUsers = this.handleCallbackUsers.bind();
      this.handleChange = this.handleChange.bind(this);
      this.handleChangeHora = this.handleChangeHora.bind(this);
      this.formateaJson = this.formateaJson.bind(this);
      */
      //aqui descomento maguz hoy 26
      //this.handleChangeDate=this.handleChangeDate.bind(this);
    }

    //fin constructor *********************************************************
    componentDidMount() {
      //aqui
      //  this.getprueba('2021-12-01T15:59:27.246Z');
      document.getElementById('des').style.visibility = 'hidden';
  
      var curr = new Date();
      curr.setDate(curr.getDate());
      var fechaa = curr.toISOString().substr(0, 10);
  
      this.setState({ fechaCrea: fechaa });
      //alert(fechaa);
      var today = new Date();
      var timeC =
        today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
      this.setState({ selectValueHour: timeC });
  
      let fin = moment(); //val.end;
      let inicio = moment('2020-01-01 00:30'); //val.start;
      fin = fin.format('YYYY-MM-DD HH:mm ');
      inicio = inicio.format('YYYY-MM-DD HH:mm ');
      fin = fin.substr(0, 4) + fin.substr(5, 2) + fin.substr(8, 2);
      inicio = inicio.substr(0, 4) + inicio.substr(5, 2) + inicio.substr(8, 2);
  
      this.setState({ finicio: inicio });
      this.setState({ ffin: fin });


      //this.getListaJobsDynamo();
    }
   //**********************   FUNCIONES   ****************************************** */
   onChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    var data = { value: this.state.value };
  } //end handleSubmit

  handleCreate(event) {
    event.preventDefault();
    this.setState({
      disabled: true,
    });
    var user = {
      firstName: this.state.first,
      lastName: this.state.last,
      userName: this.state.email,
      role: this.state.rol,
    };

    var jj = {
      action: this.state.action,
      actionDate: this.state.actionDate,
      integrationId: this.state.integrationId,
      includeScreenRecordings: this.state.includeScreenRecordings,
      conversationQuery: this.state.conversationQuery,
    };

    var authToken = 'token'; //getToken();
    var thisa = this;
  } // fin handleCreate

  onChangeFavorite(event) {
    console.log(event.target.checked, event.target.name);
  }

  parentFunction = (data_from_child) => {
    this.setState({ usuariosG: data_from_child });
  };

  parentFunctionCL = (data_from_child) => {
    this.setState({ contactlistG: data_from_child });
  };

  parentFunctionQUEUES = (data_from_child) => {
    this.setState({ queuesG: data_from_child });
  };

  parentFunctionWP = (data_from_child) => {
    this.setState({ wrapupsG: data_from_child });
  };
  parentFunctionNM = (data_from_child) => {
    this.setState({ names: data_from_child });
  };

  getData(val) {
    let fin = val.end;
    let inicio = val.start;
    fin = fin.format('YYYY-MM-DD HH:mm ');
    inicio = inicio.format('YYYY-MM-DD HH:mm ');
    fin = fin.substr(0, 4) + fin.substr(5, 2) + fin.substr(8, 2);
    inicio = inicio.substr(0, 4) + inicio.substr(5, 2) + inicio.substr(8, 2);
    this.setState({ finicio: inicio });
    this.setState({ ffin: fin });
  }

  getDataJob(val) {
    var statusIII = moment(val.start).format('YYYY-MM-DD HH:mm:ss');
    var statusFFF = moment(val.end).format('YYYY-MM-DD HH:mm:ss');

    var fechaIII = statusIII + ' / ' + statusFFF;

    this.setState({ fechaII: fechaIII });
    //var myDate = "2017-04-14 07:07:15";
    var statusI = moment(val.start)
      .add(5, 'hours')
      .format('YYYY-MM-DD HH:mm:ss');
    var statusF = moment(val.end).add(5, 'hours').format('YYYY-MM-DD HH:mm:ss');
    let fin = val.end;
    let inicio = val.start;
    fin = fin.format('YYYY-MM-DD HH:mm');
    inicio = inicio.format('YYYY-MM-DD HH:mm');

    //this.state.ffin= fin;
    this.setState({ ffinjob: statusF });
    this.setState({ finiciojob: statusI });
  }

  mostrarModalCrearJobs = () => {
    this.setState({
      modalCrearJobs: true,
    });
  };


  mostrarModalCrearJobs = () => {
    this.setState({
      modalCrearJobs: true,
    });
  };
  
  cerrarModalCrearJobs = () => {
    this.setState({ modalCrearJobs: false });
  };

  eliminar = (dato) => {
    this.setState({
      jobEliminar: {
        Fecha: dato.Fecha,
        Estado: dato.Estado,
        job_id: dato.job_id,
      },
      modalEliminar: true,
    });
  }; //fin eliminar


  async insertar() {
  this.setState({ isActive: true });
  document.getElementById('btnCrearJob').disabled = true;
  document.getElementById('btnCancelarCrear').disabled = true;
  var usercognito = '';
  var user = null;
  var token = "TOEKN" //getToken();
  /*if (token) {
    user = jwtDecode(token);
    usercognito = user['cognito:username'];
  }*/

  var fechaF =
    this.state.ffinjob.substr(0, 10) +
    'T' +
    this.state.ffinjob.substr(11, 5) +
    ':00.000Z';
  var fechaI =
    this.state.finiciojob.substr(0, 10) +
    'T' +
    this.state.finiciojob.substr(11, 5) +
    ':00.000Z';

  var fechaT = fechaI + '/' + fechaF;

  var today = new Date().toISOString();
  var fechaDynamo =
    today.substr(0, 4) + today.substr(5, 2) + today.substr(8, 2);

  let colas;
  let users;
  let wp;
  let names;
  let dnis;

  if (this.state.queuesG.length === 0) {
    colas = [];
  } else {
    colas = JSON.parse(this.state.queuesG);
  }

  if (this.state.usuariosG.length === 0) {
    users = [];
  } else {
    users = JSON.parse(this.state.usuariosG);
  }

  if (this.state.wrapupsG.length === 0) {
    wp = [];
  } else {
    wp = JSON.parse(JSON.stringify(this.state.wrapupsG));
    //wp= this.state.wrapupsG;
  }
  if (this.state.names.length === 0) {
    names = [];
  } else {
    names = JSON.parse(JSON.stringify(this.state.names));
    //wp= this.state.wrapupsG;
  }
  dnis = 'tel:+593' + this.state.numerotel;

  let filtros = this.ArmaWup(users, colas, wp, dnis, fechaT);

  if (filtros.length === 0) {
    console.log('esta vacia la seleccion');
  } else {
    if (fechaT.length <= 25) {
      alert('Estimado usuario/a, debe seleccionar un RANGO DE FECHA válido.');
      document.getElementById('btnCrearJob').disabled = false;
      document.getElementById('btnCancelarCrear').disabled = false;
    } else {
      var cadena1 = JSON.stringify(filtros);
      var cadena2 = cadena1.slice(1, -1);
      let cadenaJson = JSON.parse(cadena2);
      var nombre = '';
      var listnombre = [];
      if (this.state.names.length > 0) {
        listnombre = JSON.parse(this.state.names);
        if (listnombre.length > 0) {
          for (let n = 0; n < listnombre.length; n++) {
            if (n == 0) {
              nombre = listnombre[n].value;
            } else {
              nombre = nombre + '-' + listnombre[n].value;
            }
          }
        } else {
          nombre = 'fecha-dnis';
        }
      } else {
        nombre = 'fecha-dnis';
      }

      var todays = new Date();
      //ARMA JSON FINAL
      var createJob1 = {
        method: 'post',
        url:'http://localhost:3080/createjob',
        //url: urlgrabacones + 'createjobquery',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          action: this.state.action,
          actionDate: todays.toISOString(),
          integrationId: this.state.integrationId,
          includeScreenRecordings: this.state.includeScreenRecordings,
          conversationQuery: cadenaJson,
          nombrearchivo: nombre,
          nombrejob: this.state.nombrejob,
          intervalo: this.state.fechaII,
          nombreusuario: usercognito,
          fechaDy: JSON.parse(fechaDynamo),
        },
      };
      var cadena11 = JSON.stringify(createJob1);
      var cadena22 = cadena11.slice(1, -1);

      //****************************************************  CREA JOB ***************************************************************** */
      console.log(users.length);
      console.log(colas.length);
      console.log(this.state.nombrejob.length);
      console.log(listnombre.length);
      if (
        users.length <= 4 &&
        colas.length <= 4 &&
        users.length >= 0 &&
        colas.length >= 0 &&
        this.state.nombrejob.length > 0 &&
        listnombre.length > 0
      ) {
        let resCJob = await this.createJobGenesys(createJob1);

        this.setState({ wrapupsG: [] });
        this.setState({ names: [] });
        this.setState({ usuariosG: [] });
        this.setState({ queuesG: [] });
        this.setState({ numerotel: '' });
        this.setState({ ffinjob: '' });
        this.setState({ finiciojob: '' });
        this.setState({ fechaCrea: '' });
        //this.setState({ actionDate: '' });
        fechaDynamo = '';
        this.setState({ nombrejob: '' });
        //this.setState({ renameA: '' });
        this.setState({ modalCrearJobs: false });
        document.getElementById('btnCrearJob').disabled = false;
        document.getElementById('btnCancelarCrear').disabled = false;
        this.getListaJobsDynamo();
        //blanquea variables
      } else {
        alert(
          'Estimado usuario/a, debe ingresar el nombre del Job. Solo puede escoger hasta 5 colas y 5 agentes como máximo. Debe selecciónar al menos un parametro para el renombre de los archivos de audio'
        );
        document.getElementById('btnCrearJob').disabled = false;
        document.getElementById('btnCancelarCrear').disabled = false;
      }
    }
  }
  }; // FIN INSERTAR

  traeGrabacion = () => {
  var payload = { body: {}, metodo: 'DOWNREC' };
  //2021-10-25
  //axios.post('/prb2',payload,
  axios
    .post(
      urlgrabacones + 'prb2',
      //        'http://localhost:3080/prb2',
      payload,

      {
        headers: {
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
          'Content-Type': 'application/json',
        },
        responseType: 'arraybuffer',
      }
    )
    .then((res) => {
      FileDownload(res.data, 'report.ogg');
    });
  }; //FIN TRAE GRABACION


  eliminar = (dato) => {
  this.setState({
    jobEliminar: {
      Fecha: dato.Fecha,
      Estado: dato.Estado,
      job_id: dato.job_id,
    },
    modalEliminar: true,
  });
  }; //fin eliminar

  handleJobSubmitRename = (dato) => {
    document.getElementById('btnRenombrar_' + dato.job_id).disabled = true;
    var usercognito = null;
    var user = null;

    if (dato.Estado === 'RENOMBRAR') {
     // var token = getToken();
     /* if (token) {
        user = jwtDecode(token);
        usercognito = user['cognito:username'];
      }*/
      var payload = {
        interval: 'R',
        segmentFilters: 'R',
        estatusG: 'P',
        estatus: 'C',
        jobId: dato.job_id,
        metodo: 'GETS3',
        userCog: usercognito,
        bodyDynamo: {
          nombreFile: '',
          nomjob: dato.nombre_job,
          datototal: dato.totalConversations,
        },
        fechajob: dato.Fecha,
      };

      console.log('Rename S3: ' + JSON.stringify(payload));

      alert(
        'Se ha procedido a renombrar esto puede tardar algunos minutos dependiendo de la cantidad de información, consulta nuevamente el proceso despues de algún tiempo.'
      );
      let strT = JSON.stringify(payload, null, 2);
      var configq = {
        method: 'get',
        //url: 'http://localhost:3080/genesyscolas',
        url: urlgrabacones + 'genesyscolas',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      axios(configq).then((responseq) => {
        this.setState({
          colas: responseq.data.queues,
        });
        console.log();
        var configq = {
          method: 'get',
          url: urlgrabacones + 'genesyscontact',
          //url: 'http://localhost:3080/genesyscontact',
          headers: {
            'Content-Type': 'application/json',
          },
        };
        axios(configq).then((responsec) => {
          var cuerpo = {
            colas: this.state.colas,
            listacontactos: responsec.data.contacts,
          };
          var config = {
            method: 'post',
            /*url:
              urlgrabacones +
              'renamequery/' +
              dato.job_id +
              '/' +
              dato.Fecha +
              '/' +
              dato.nombre_archivo +
              '/' +
              dato.nombre_usuario +
              '/' +
              dato.nombre_job,
            */
           url: 'http://localhost:3080/rename/'+dato.job_id+'/'+dato.Fecha+'/'+dato.nombre_archivo+'/'+dato.nombre_usuario+'/'+dato.nombre_job,

            headers: {
              'Content-Type': 'application/json',
            },
            data: cuerpo,
          };
          axios(config)
            .then((res) => {
              console.log('Llamo a GETS3 ' + JSON.stringify(res.data));

              if (res.data.statusCode === '902') {
                alert('ERROR: Se registra un inconveniente en RENOMBRAR');
              } else {
                document.getElementById(
                  'btnRenombrar_' + dato.job_id
                ).disabled = true;
                alert('El proceso de renombre ha sido enviado con éxito');
              }
            })
            .catch(function (error) {
              console.log(error);
              /*  console.log(
                  'ERROR: Se ha presentado un problema para Renombrar. Comunicarse con su Administrador.'
                ); */
              //this.setState({ isActive: false });
            });
        });
      });
    } //fin if
    else {
      alert(
        'Aún se está descargando la información de las grabaciones. El Estado el job debe ser LISTO PARA RENOMBRE'
      );
    } //fin else
  }; //fin handleJobSubmitRename


  handleJobSubmitDescarga = (dato) => {
    if (dato.Estado === 'DESCARGA') {
      document.getElementById('btnDescarga_' + dato.job_id).disabled = true;
      var payload = {
        JobName: dato.nombre_job,
      };
      let strT = JSON.stringify(payload, null, 2);
      var config = {
        method: 'post',
        url: 'https://lsb31wlsf5.execute-api.us-east-1.amazonaws.com/dev/testAPI/CreateDataSyncTask',
        headers: {
          'Content-Type': 'application/json',
        },
        data: strT,
      };
      axios(config)
        .then((res) => {
          if (
            res.data !== 'undefined' &&
            res.data !== undefined &&
            res.data !== null
          ) {
            //alert('ERROR: Se registra un inconveniente en RENOMBRAR');
            var payload = {
              Task: res.data.TaskArn,
              Fecha: dato.Fecha,
              JobId: dato.job_id,
            };
            let strT = JSON.stringify(payload, null, 2);
            var config = {
              method: 'post',
              url: 'https://lsb31wlsf5.execute-api.us-east-1.amazonaws.com/dev/testAPI/StartDataSyncTask',
              headers: {
                'Content-Type': 'application/json',
              },
              data: strT,
            };
            axios(config)
              .then((res) => {
                if (
                  res.data !== 'undefined' &&
                  res.data !== undefined &&
                  res.data !== null
                ) {
                  let resCJob = this.updateEstadosJobsDynamoDescarga(
                    dato.job_id,
                    dato.Fecha
                  );

                  alert(
                    'Estimado usuario/a, se ha iniciado el proceso de descarga hacia el servidor Recover.'
                  );
                } else {
                  console.log('Else StartDataSyncTask');
                }
              })
              .catch(function (error) {
                console.log(error);
              });
          } else {
            document.getElementById(
              'btnRenombrar_' + dato.job_id
            ).disabled = false;
            alert(
              'ERROR: Se registra un inconveniente en RENOMBRAR para el Job: ' +
                dato.nombre_job
            );
          }
        })
        .catch(function (error) {
          console.log(error);
          alert('ERROR: Se registra un inconveniente en RENOMBRAR');
        });
    } else {
      alert(
        'El Estado del job aún no esta habilitado para descargar las grabaciones. El Estado debe ser LISTO PARA DESCARGA'
      );
    }
  }; //fin handleJobSubmitDescarga


  getListaJobsDynamo() {
    this.setState(
      {
        isActive: true,
      },
      () => {
        var ini = this.state.finicio;
        var fin = this.state.ffin;
        $('#tblJobs').DataTable().destroy();
        //Envio los elementos de consulta para cargar Jobs de grabaciones
        var payload = { body: { FechaI: ini, FechaF: fin }, metodo: 'LISTD' };

        //*********************************************************************************** */
        var payloadUp = {
          body: { FechaI: ini, FechaF: fin },
          metodo: 'VALIDAJOB',
        };

        var payload = { body: { FechaI: ini, FechaF: fin }, metodo: 'LISTD' };

        if (ini === '') {
          var curr = new Date();
          curr.setDate(curr.getDate());
          var fechaa = curr.toISOString().substr(0, 10);
          fechaa =
            fechaa.substr(0, 4) + fechaa.substr(5, 2) + fechaa.substr(8, 2);

          var today = new Date();
          var day = today.getDate(); // 24
          var month = today.getMonth() + 1; // 10 (Month is 0-based, so 10 means 11th Month)
          var year = today.getFullYear(); // 2020

          let fechaaux = '';
          if (JSON.stringify(month).length === 1) {
            fechaaux = JSON.stringify(year) + '0' + JSON.stringify(month);
          } else {
            fechaaux = JSON.stringify(year) + JSON.stringify(month);
          }

          if (JSON.stringify(day).length === 1) {
            fechaaux = fechaaux + '0' + JSON.stringify(day);
          } else {
            fechaaux = fechaaux + JSON.stringify(day);
          }

          fechaa = fechaaux;

          ini = fechaa;
          fin = fechaa;
        }
        //else
        //{
        if (fin === '') {
          fechaa =
            fechaa.substr(0, 3) + fechaa.substr(5, 2) + fechaa.substr(8, 2);
          var today = new Date();
          var day = today.getDate(); // 24
          var month = today.getMonth() + 1; // 10 (Month is 0-based, so 10 means 11th Month)
          var year = today.getFullYear(); // 2020

          let fechaaux = '';
          if (JSON.stringify(month).length === 1) {
            fechaaux = JSON.stringify(year) + '0' + JSON.stringify(month);
          } else {
            fechaaux = JSON.stringify(year) + JSON.stringify(month);
          }

          if (JSON.stringify(day).length === 1) {
            fechaaux = fechaaux + '0' + JSON.stringify(day);
          } else {
            fechaaux = fechaaux + JSON.stringify(day);
          }

          fechaa = fechaaux;
          ini = fechaa;
          fin = fechaa;

          //*****************************************************************************************
          //*****************************************************************************************
        }

        payloadUp = {
          body: { FechaI: ini, FechaF: parseInt(fin) + 1 },
          metodo: 'VALIDAJOB',
        };

        payload = {
          body: { FechaI: ini, FechaF: parseInt(fin) + 1 },
          metodo: 'LISTD',
        };
        var urlconsultavalidajob = urlgrabacones + 'prb2test';
        //var urlconsultavalidajob= "http://localhost:3080/prb2"
        var urlconsultagetjob = urlgrabacones + 'prb2';
        //var urlconsultagetjob= "http://localhost:3080/prb2"
        var fechaconsulta = new Date();
        var saberfecha = window.localStorage.getItem('saberfecha');
        var newfecha = new Date(saberfecha);
        var diferencia = fechaconsulta - newfecha;
        console.log(fechaconsulta);
        console.log(newfecha);
        console.log(diferencia / (1000 * 60));
        if (diferencia / (1000 * 60) < 1) {
          var dobleconsulta = false;
          this.state.jobs.forEach((njob) => {
            dobleconsulta = false;
            if (njob.estatusD === 'PENDIENTE') {
              dobleconsulta = true;
            }
          });
          if (dobleconsulta) {
            console.log('DOBLE CONSULTA');
            window.localStorage.setItem('saberfecha', fechaconsulta);
            try {
              var config = {
                method: 'post',
                url: urlconsultavalidajob,
                headers: {
                  'Content-Type': 'application/json',
                },
                data: payloadUp,
              };
              axios(config)
                .then((response) => {
                  console.log(response.data);
                  var jobsUpData = response.data.resultado;
                  console.log('First call. VALIDAJOB', jobsUpData);
                  var config2 = {
                    method: 'post',
                    url: urlconsultagetjob,
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    data: payload,
                  };
                  axios(config2)
                    .then((ress) => {
                      var jobsData = ress.data.resultado;
                      var jsonconsulta = [];

                      let a = 0;
                      console.log('Second call. LISTD', jobsData);
                      if (jobsData !== undefined && jobsData !== 'undefined') {
                        for (a = 0; a < jobsData.length; a++) {
                          var estatus = jobsData[a].Estado;
                          var estatusD = jobsData[a].estatusD;
                          if (
                            estatus !== 'ELIMINAR' &&
                            estatus !== 'JOB ELIMINADO' &&
                            estatusD !== 'JOB ELIMINADO'
                          ) {
                            jsonconsulta.push(jobsData[a]);
                          }
                        }

                        this.setState(
                          { jobs: jsonconsulta, isActive: false },
                          () => {
                            $('#tblJobs').DataTable().destroy();
                            $('#tblJobs').DataTable({
                              responsive: true,
                              retrieve: true,
                              language: {
                                url: '//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json',
                              },
                              bInfo: false,
                              scrollY: '500px',
                              scrollX: '500px',
                              scrollCollapse: true,
                            });
                          }
                        );

                        this.createNotification('info');
                      } else {
                        this.setState({
                          isActive: false,
                        });
                        alert(
                          'Estimado usuario/a, se ha generado un problema de red, reinicie la página.'
                        );
                      }
                    })
                    .catch(function (error) {
                      console.log('Error' + error);
                      alert(
                        'Estimado usuario/a, se ha generado un problema de red, reinicie la página.'
                      );
                      //this.setState({ isActive: false });
                    });
                })
                .catch(function (error) {
                  console.log('Error' + error);
                  alert(
                    'Estimado usuario/a, se ha generado un problema de red, reinicie la página.'
                  );
                  //this.setState({ isActive: false });
                });
            } catch (error) {
              console.log('Error' + error.message);
            }
          } else {
            console.log('UNA CONSULTA');
            try {
              var config2 = {
                method: 'post',
                url: urlconsultagetjob,
                headers: {
                  'Content-Type': 'application/json',
                },
                data: payload,
              };
              axios(config2)
                .then((ress) => {
                  var jobsData = ress.data.resultado;
                  var jsonconsulta = [];

                  let a = 0;
                  console.log('Second call. LISTD', jobsData);
                  if (jobsData !== undefined && jobsData !== 'undefined') {
                    for (a = 0; a < jobsData.length; a++) {
                      var estatus = jobsData[a].Estado;
                      var estatusD = jobsData[a].estatusD;
                      if (
                        estatus !== 'ELIMINAR' &&
                        estatus !== 'JOB ELIMINADO' &&
                        estatusD !== 'JOB ELIMINADO'
                      ) {
                        jsonconsulta.push(jobsData[a]);
                      }
                    }

                    this.setState(
                      { jobs: jsonconsulta, isActive: false },
                      () => {
                        $('#tblJobs').DataTable().destroy();
                        $('#tblJobs').DataTable({
                          responsive: true,
                          retrieve: true,
                          language: {
                            url: '//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json',
                          },
                          bInfo: false,
                          scrollY: '500px',
                          scrollX: '500px',
                          scrollCollapse: true,
                        });
                      }
                    );

                    this.createNotification('info');
                  } else {
                    this.setState({
                      isActive: false,
                    });
                    alert(
                      'Estimado usuario/a, se ha generado un problema de red, reinicie la página.'
                    );
                  }
                })

                .catch(function (error) {
                  console.log('Error' + error);
                  alert(
                    'Estimado usuario/a, se ha generado un problema de red, reinicie la página.'
                  );
                  //this.setState({ isActive: false });
                });
            } catch (error) {
              console.log('Error' + error.message);
            }
          }
        } else {
          console.log('DOBLE CONSULTA');
          window.localStorage.setItem('saberfecha', fechaconsulta);
          try {
            var config = {
              method: 'post',
              url: urlconsultavalidajob,
              headers: {
                'Content-Type': 'application/json',
              },
              data: payloadUp,
            };
            axios(config)
              .then((response) => {
                var jobsUpData = response.data.resultado;
                console.log(response.data);
                console.log('First call. VALIDAJOB', jobsUpData);
                var config2 = {
                  method: 'post',
                  url: urlconsultagetjob,
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  data: payload,
                };
                axios(config2)
                  .then((ress) => {
                    var jobsData = ress.data.resultado;
                    var jsonconsulta = [];

                    let a = 0;
                    console.log('Second call. LISTD', jobsData);
                    if (jobsData !== undefined && jobsData !== 'undefined') {
                      for (a = 0; a < jobsData.length; a++) {
                        var estatus = jobsData[a].Estado;
                        var estatusD = jobsData[a].estatusD;
                        if (
                          estatus !== 'ELIMINAR' &&
                          estatus !== 'JOB ELIMINADO' &&
                          estatusD !== 'JOB ELIMINADO'
                        ) {
                          jsonconsulta.push(jobsData[a]);
                        }
                      }

                      this.setState(
                        { jobs: jsonconsulta, isActive: false },
                        () => {
                          $('#tblJobs').DataTable().destroy();
                          $('#tblJobs').DataTable({
                            responsive: true,
                            retrieve: true,
                            language: {
                              url: '//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json',
                            },
                            bInfo: false,
                            scrollY: '500px',
                            scrollX: '500px',
                            scrollCollapse: true,
                          });
                        }
                      );

                      this.createNotification('info');
                    } else {
                      this.setState({
                        isActive: false,
                      });
                      alert(
                        'Estimado usuario/a, se ha generado un problema de red, reinicie la página.'
                      );
                    }
                  })
                  .catch(function (error) {
                    console.log('Error' + error);
                    alert(
                      'Estimado usuario/a, se ha generado un problema de red, reinicie la página.'
                    );
                    //this.setState({ isActive: false });
                  });
              })
              .catch(function (error) {
                console.log('Error' + error);
                alert(
                  'Estimado usuario/a, se ha generado un problema de red, reinicie la página.'
                );
                //this.setState({ isActive: false });
              });
          } catch (error) {
            console.log('Error' + error.message);
          }
        }
      }
    );
  }


  traeGrabacion = () => {
    var payload = { body: {}, metodo: 'DOWNREC' };
    //2021-10-25
    //axios.post('/prb2',payload,
    axios
      .post(
        urlgrabacones + 'prb2',
        //        'http://localhost:3080/prb2',
        payload,

        {
          headers: {
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'OPTIONS,POST,GET',
            'Content-Type': 'application/json',
          },
          responseType: 'arraybuffer',
        }
      )
      .then((res) => {
        FileDownload(res.data, 'report.ogg');
      });
  };


   //*********************************** FIN FUNCIONES ************************************** */

    render() {
      var curr = new Date();
      curr.setDate(curr.getDate());
      var fechaa = curr.toISOString().substr(0, 10);
  
      return (     
        <>
        <h1>Hola:</h1>
        <button onClick={signIn}>Sign out</button>
        Menu principal
        <Router>
          <Routes>
            <Route path="/home" component={Home} />
            <Route path="/homeTest" component={HomeTest} />
            <Route path="/homeLogo" component={HomeLogo} />
            <Route path="/" component={HomeLogo} />
          </Routes>
       </Router>

        <button>
          Salir
        </button>
 
        <LoadingOverlay
          active={this.state.isActive}
          spinner
          styles={{
            wrapper: {
              width: '100%',
              height: '100%',
              overflow: this.state.isActive ? 'hidden' : '',
            },
          }}
          text="Cargando..."
        >
		
		
		          <Container>
              <br />
              <h2 className="center">Consulta Grabaciones Históricas</h2>
              <br />
            <h5 className="center">Escoja los criterios de busqueda:</h5>
            <br />
            <div>
              <Fechas sendData={this.getData} />
            </div>
            <br />
            <div class="col-2">
              <Button
                className="btn btn-primary btnUsers paddingbutton"
                onClick={() => this.getListaJobsDynamo()}
                style={{
                  width: '120px',
                  height: '35px',
                  fontSize: '16px',
                }}
              >
                Consultar Jobs
              </Button>
              <Button
                className="btn btn-success btnUsers"
                style={{
                  width: '120px',
                  height: '35px',
                  fontSize: '16px',
                  marginRight: '20px',
                }}
                onClick={() => this.mostrarModalCrearJobs()}
              >
                Crear Job
              </Button>
            </div>
            <br />

            <Table id="tblJobs">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Nombre Archivo</th>
                  <th>Agente</th>
                  <th>Estado Genesys</th>
                  <th>Nombre Job</th>
                  <th>Intervalo</th>
                  <th>Porcentaje</th>
                  <th>Total interacciones</th>
                  <th>Total grabaciones</th>
                  <th>Estatus Actual</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody>
                {this.state.jobs.map((dato, i) => (
                  <tr key={dato.job_id}>
                    <td>{dato.Fecha}</td>
                    <td>{dato.nombre_archivo}</td>
                    <td>{dato.nombre_usuario}</td>
                    <td>{dato.Estado}</td>
                    <td>{dato.nombre_job}</td>
                    <td>{dato.intervalo}</td>
                    <td>{dato.porcentajeProgreso}</td>
                    <td>{dato.totalConversations}</td>
                    <td>{dato.totalS3}</td>
                    <td>{dato.estatusD}</td>
                    <td>
                      {dato.nombre_usuario == this.state.usercognito ? (
                        <>
                          <div className="btn-group">
                            {dato.estatusD === 'LISTO PARA PROCESO' ? (
                              <Button
                                color="warning"
                                onClick={() => this.handleJobSubmit(dato)}
                                id={'btnProcesar_' + dato.job_id}
                                style={{ marginRight: '5px' }}
                              >
                                Procesar
                              </Button>
                            ) : null}
                            {dato.estatusD === 'LISTO PARA RENOMBRE' ? (
                              <Button
                                color="primary"
                                disabled={!this.state.habil}
                                onClick={() => this.handleJobSubmitRename(dato)}
                                id={'btnRenombrar_' + dato.job_id}
                                style={{ marginRight: '5px' }}
                              >
                                Renombrar
                              </Button>
                            ) : null}
                            {dato.estatusD === 'LISTO PARA DESCARGA' ? (
                              <Button
                                color="success"
                                disabled={!this.state.habil}
                                onClick={() =>
                                  this.handleJobSubmitDescarga(dato)
                                }
                                id={'btnDescarga_' + dato.job_id}
                                style={{ marginRight: '5px' }}
                              >
                                Descargar
                              </Button>
                            ) : null}
                            {dato.estatusD !== 'DESCARGADO' ? (
                              <Button
                                color="danger"
                                onClick={() => this.eliminar(dato)}
                                id={'btnEliminar_' + dato.Estado}
                              >
                                Eliminar
                              </Button>
                            ) : null}
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <div class="col-2">
              <Button
                color="primary"
                id="des"
                visibility="hidden"
                onClick={() => this.traeGrabacion()}
              >
                Descargar Grabacion
              </Button>
            </div>
          </Container>
		  </LoadingOverlay>
      

      <Modal isOpen={this.state.modalCrearJobs}>
          <ModalHeader>
            <div>
              <h3>Crear Jobs de Descarga de Grabaciones</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <form>
                <div class="row" style={{ textAlign: 'center' }}>
                  <div class="col-6">
                    <div style={{ textAlign: 'center' }}>
                      <Fechas sendData={this.getDataJob} />
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="nombrejob"
                        class="col-sm-12 col-form-label"
                      >
                        Nombre job <span style={{ color: 'red' }}>(*)</span>
                      </label>
                      <div class="col-sm-12 crearJobsCenter">
                        <input
                          className="form-control crearJobs"
                          id="nombrejob"
                          placeholder="Nombre Job"
                          value={this.state.nombrejob}
                          onChange={(e) =>
                            this.setState({
                              nombrejob: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="nombrejob"
                        class="col-sm-12 col-form-label "
                      >
                        Nombre cola <span style={{ color: 'red' }}>(*)</span>
                      </label>
                      <div class="col-sm-12 crearJobsCenter">
                        <Queues
                          functionCallFromParentQUEUES={this.parentFunctionQUEUES.bind(
                            this
                          )}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="numerotel"
                        class="col-sm-12 col-form-label"
                      >
                        Número Telefónico
                      </label>
                      <div class="col-sm-12 crearJobsCenter">
                        <input
                          name="action"
                          className="form-control crearJobs"
                          id="numerotel"
                          placeholder="998765432"
                          onChange={(e) =>
                            this.setState({
                              numerotel: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-6">
                    <div className="form-group row">
                      <label
                        htmlFor="wrapupcode"
                        class="col-sm-12 col-form-label"
                      >
                        Código conclusión
                      </label>
                      <div class="col-sm-12 crearJobsCenter">
                        
                      </div>
                    </div>
                    <div>
                      <label htmlFor="Usuario" class="col-sm-12 col-form-label">
                        Usuario
                      </label>
                      <div class="col-sm-12 crearJobsCenter">
                        <div>
                          <SelectMultiple
                            functionCallFromParent={this.parentFunction.bind(
                              this
                            )}
                          />
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="form-group row">
                      <label htmlFor="renameA" class="col-sm-12 col-form-label">
                        Nombre para archivo audio{' '}
                        <span style={{ color: 'red' }}>(*)</span>
                      </label>
                      <div class="col-sm-12 crearJobsCenter">
                        <SelectMultiplename
                          functionCallFromParent={this.parentFunctionNM.bind(
                            this
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-6"></div>
                  <div class="col-6"></div>
                </div>
              </form>
            </FormGroup>
          </ModalBody>

          <ModalFooter style={{ justifyContent: 'center' }}>
            <div>
              <Button
                className="btn btn-danger btnUsers paddingbuttonDanger"
                style={{
                  width: '150px',
                  height: '35px',
                  fontSize: '16px',
                }}
                onClick={() => this.cerrarModalCrearJobs()}
                id="btnCancelarCrear"
              >
                Cancelar
              </Button>

              <Button
                className="btn btn-success btnUsers paddingbuttonSuccess"
                style={{
                  width: '150px',
                  height: '35px',
                  fontSize: '16px',
                }}
                id="btnCrearJob"
                onClick={() => this.insertar()}
              >
                Crear Job
              </Button>
            </div>
          </ModalFooter>
        </Modal>


      </>
  );
};
  }
//export default MyButton;
export default withAuthenticator(App)
//export default App;
