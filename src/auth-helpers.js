import Axios from 'axios';
import jwtDecode from 'jwt-decode';

const TOKEN_KEY = 'HT_TOKENb';
const TOKEN_KEYR = 'HT_TOKENa';
const TOKEN_KEYT = 'HT_TOKENc';
const TOKEN_KEYUI = 'HT_TOKENd';

const UrlLicencesProd =
  'https://lsb31wlsf5.execute-api.us-east-1.amazonaws.com/dev/';
const UrlReportMinutesProd =
  'https://lsb31wlsf5.execute-api.us-east-1.amazonaws.com/dev/';
const UrlLicencesDev = 'https://lsb31wlsf5.execute-api.us-east-1.amazonaws.com/dev/';
const UrlReportMinutesDev = 'https://lsb31wlsf5.execute-api.us-east-1.amazonaws.com/dev/';

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}
export function setRefresh(token) {
  localStorage.setItem(TOKEN_KEYR, token);
}
export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}
export function getUrlProd() {
  return {
    licence: UrlLicencesProd,
    reportMinutes: UrlReportMinutesProd,
  };
}
export function setUserEn(encrip) {
  localStorage.setItem(TOKEN_KEYUI, encrip);
}
export function getUserEn() {
  return localStorage.getItem(TOKEN_KEYUI);
}
export function getUrlDev() {
  return {
    licence: UrlLicencesDev,
    reportMinutes: UrlReportMinutesDev,
    //reportivr:"http://localhost:5000/"
    reportivr: 'https://b9y88jyw44.execute-api.us-east-1.amazonaws.com/dev/',
  };
}
export function getTenant() {
  var inpu = localStorage.getItem(TOKEN_KEYT);
  if (inpu) {
    var user = getUser(getToken());
    if (user) {
      if (user['custom:role'] === 'SystemAdmin') {
        try {
          var res = inpu.split('/');
          var tenant = res[1].split('::');
          var tent = {
            UserPoolId: tenant[0],
            IdentityPoolId: tenant[1],
            ClientId: tenant[2],
            TenantId: tenant[3],
            CompanyName: tenant[4],
          };
          return tent;
        } catch (error) {
          return null;
        }
      } else {
        return null;
      }
    } else {
      return null;
    }
  } else {
    return null;
  }
}

export function deleteTenant() {
  localStorage.removeItem(TOKEN_KEYT);
}

export function setTenant(tenant) {
  localStorage.setItem(TOKEN_KEYT, tenant);
}

export function getRefresh() {
  return localStorage.getItem(TOKEN_KEYR);
}
export function deleteToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export function deleteRefresh() {
  localStorage.removeItem(TOKEN_KEYR);
}

export function getUser(token) {
  if (token) {
    try {
      //return jwtDecode(token);
      return "token";
    } catch (error) {
      return null;
    }
  } else {
    return null;
  }
}

export function initAxiosInterceptors() {
  Axios.interceptors.request.use(function (config) {
    const token = getToken();

    if (token) {
      config.headers.Authorization = `bearer ${token}`;
    }
    return config;
  });

  Axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status === 401) {
        console.log(error);
      } else {
        return Promise.reject(error);
      }
    }
  );
}
