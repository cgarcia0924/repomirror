import React from 'react';
import { getToken, getUser } from '../auth-helpers';
import logo from './styles/logo-recover2.png';
//import CardStats from './AppsGenesys/cardsStats';
const $ = require('jquery');

const onSubmit = (event) => {
  event.preventDefault();
  window.location.href = '/user-change';
};

class HomeLogo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      emailname: '',
    };
  }
  callApi() {
   // const token = getToken();
    var users = "MGA";//getUser(token);
    console.log('este es el user:', users);
    if (users) {
      this.setState({
        username: users['given_name'] + ' ' + users['family_name'],
        emailname: users['email'],
      });
      if (users['custom:role'] === 'TenantAdmin') {
        $('#rolUser').text('Administrador');
      } else {
        $('#rolUser').text('Operador');
      }
      $('#nameUser').text(users['given_name'] + ' ' + users['family_name']);
      $('#emailUser').attr('href', 'mailto:' + users['email']);
      $('#emailUser').text(users['email']);
    }
  }
  sendMail() {}
  componentDidMount() {
    //this.callApi();
  }
  render() {
    return (
      <div style={{ background: '#f0f3f4' }}>
        <img
          alt=""
          src={logo}
          width="300"
          height="150"
          className="d-inline-block align-top"
        />{' '}
        <br />
        <img
          aria-label="user"
          src="https://dhqbrvplips7x.cloudfront.net/directory/10.92.0-1/assets/images/svg/person.svg"
          class="full-width-image entity-person"
        />
        <br />
        <span id="nameUser" className="usernameLogo"></span>
        <br />
        <span id="rolUser" className="userRolLogo"></span>
        <br />
        <br />
        <button type="button" class="btnMail">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-envelope-fill"
            viewBox="0 0 16 16"
          >
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"></path>
          </svg>
        </button>
        <br />
        <a id="emailUser" href="mailto:" className="userEmailLogo">
          {this.state.emailname}
        </a>
        <br />
        {/* <br />
        <button
          onClick={onSubmit.bind(this)}
          className="btn btn-primary btn-block btn-login paddingbutton"
          title="Iniciar sesión"
          style={{ maxWidth: '250px' }}
        >
          Cambiar contraseña
        </button> */}
      </div>
    );
  }
}
export default HomeLogo;
