//Configure Environment
import axios from 'axios';

//Configure Logging
/**
 * Register a new tenant
 */
export function Login(user, callback) {
  // Generate the tenant id
  // First create the tenant admin user via the
  // User Manager Service
  axios
    .post(
      `https://i2lmfepcg6.execute-api.us-east-1.amazonaws.com/dev/auth`,
      user
    )
    .then((res) => {
      console.log(res);
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
      callback(err);
    });
  //https://ivme01c584.execute-api.us-east-1.amazonaws.com/dev/auth
  //https://glwwyjqjhf.execute-api.us-east-2.amazonaws.com/dev/auth
  //
}

export function GetCode(user, callback) {
  // Generate the tenant id
  // First create the tenant admin user via the
  // User Manager Service
  axios
    .post(
      `https://i2lmfepcg6.execute-api.us-east-1.amazonaws.com/dev/auth/forgotpassword`,
      user
    )
    .then((res) => {
      if (res.data.message === 'UserCompany not found') {
        var errores = {
          mensaje: 'No existe',
        };
        callback(errores);
      } else {
        var errores = {
          mensaje: 'Si existe',
          status: res.data.statusCode,
        };
        callback(errores);
      }
    })
    .catch((err) => {
      console.log(err);
      callback(err);
    });
  //https://ivme01c584.execute-api.us-east-1.amazonaws.com/dev/auth
  //https://glwwyjqjhf.execute-api.us-east-2.amazonaws.com/dev/auth
  //
}

export function NewPassword(user, callback) {
  // Generate the tenant id
  // First create the tenant admin user via the
  // User Manager Service
  axios
    .post(
      `https://i2lmfepcg6.execute-api.us-east-1.amazonaws.com/dev/auth/newpassword`,
      user
    )
    .then((res) => {
      if (res.data.message == 'UserCompany not found') {
        console.log(res);
        var errores = {
          mensaje: 'No existe',
        };
        callback(errores);
      } else {
        console.log(res);
        var errores = {
          mensaje: 'Si existe',
          status: res.data.statusCode,
          msg: res.data.message,
        };
        callback(errores);
      }
    })
    .catch((err) => {
      console.log(err);
      callback(err);
    });
  //https://ivme01c584.execute-api.us-east-1.amazonaws.com/dev/auth
  //https://glwwyjqjhf.execute-api.us-east-2.amazonaws.com/dev/auth
  //
}
export function ChangePassword(user, callback) {
  // Generate the tenant id
  // First create the tenant admin user via the
  // User Manager Service
  axios
    .post(
      `https://i2lmfepcg6.execute-api.us-east-1.amazonaws.com/dev/auth/changepassword`,
      user
    )
    .then((res) => {
      if (res.data.message == 'UserCompany not found') {
        console.log(res);
        var errores = {
          mensaje: 'No existe',
        };
        callback(errores);
      } else {
        console.log(res);
        var errores = {
          mensaje: 'Si existe',
          status: res.data.statusCode,
          msg: res.data.message,
        };
        callback(errores);
      }
    })
    .catch((err) => {
      console.log(err);
      callback(err);
    });
  //https://ivme01c584.execute-api.us-east-1.amazonaws.com/dev/auth
  //https://glwwyjqjhf.execute-api.us-east-2.amazonaws.com/dev/auth
  //
}

export function ResetPassword(email, rol, companyName, callback) {
  // Generate the tenant id
  // First create the tenant admin user via the
  // User Manager Service
  var user = {
    userName: email,
    companyName: companyName,
  };
  axios
    .post(
      `https://i2lmfepcg6.execute-api.us-east-1.amazonaws.com/dev/auth/setpassword/` +
        rol,
      user
    )
    .then((res) => {
      console.log(res);
      if (res.data.message == 'UserCompany not found') {
        console.log(res);
        var errores = {
          mensaje: 'No existe',
        };
        callback(errores);
      } else {
        console.log(res);
        var errores = {
          mensaje: 'Si existe',
          status: res.data.statusCode,
          msg: res.data.message,
        };
        callback(errores);
      }
    })
    .catch((err) => {
      console.log(err);
      callback(err);
    });
  //https://ivme01c584.execute-api.us-east-1.amazonaws.com/dev/auth
  //https://glwwyjqjhf.execute-api.us-east-2.amazonaws.com/dev/auth
  //
}

export function Refresh(user, callback) {
  // Generate the tenant id
  // First create the tenant admin user via the
  // User Manager Service
  axios
    .post(
      'https://i2lmfepcg6.execute-api.us-east-1.amazonaws.com/dev/auth/refresh',
      user
    )
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      callback(null);
    });
}
export function Create(token, user, callback) {
  const config = {
    headers: { Authorization: `${token}` },
  };
  axios
    .post(
      `https://auwusp9np6.execute-api.us-east-1.amazonaws.com/dev/user`,
      user,
      config
    )
    .then((res) => {
      console.log(res);
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
      callback(null);
    });
}
//https://rimnp9iqtd.execute-api.us-east-1.amazonaws.com/dev/user
//https://ef8nvgpcf9.execute-api.us-east-2.amazonaws.com/dev/user

export function Delete(token, user, callback) {
  const config = {
    headers: { Authorization: `${token}` },
  };
  axios
    .delete(
      `https://auwusp9np6.execute-api.us-east-1.amazonaws.com/dev/user/` + user,
      config
    )
    .then((res) => {
      console.log(res);
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
      callback(null);
    });
}
// `https://ef8nvgpcf9.execute-api.us-east-2.amazonaws.com/dev/user/`+user,
export function Edit(token, user, callback) {
  const config = {
    headers: { Authorization: `${token}` },
  };
  axios
    .put(
     `https://auwusp9np6.execute-api.us-east-1.amazonaws.com/dev/user`,
      //`http://localhost:3062/user`,
      user,
      config
    )
    .then((res) => {
      console.log(res);
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
      callback(null);
    });
}
//  `https://ef8nvgpcf9.execute-api.us-east-2.amazonaws.com/dev/user`,
export function Enabled(token, user, enabled, callback) {
  const config = {
    headers: { Authorization: `${token}` },
  };
  if (enabled) {
    //desabilitar
    axios
      .put(
        `https://auwusp9np6.execute-api.us-east-1.amazonaws.com/dev/user/disable`,
        user,
        config
      )
      .then((res) => {
        console.log(res);
        callback(res.data);
      })
      .catch((err) => {
        console.log(err);
        callback(null);
      });
  } else {
    axios
      .put(
        `https://auwusp9np6.execute-api.us-east-1.amazonaws.com/dev/user/enable`,
        user,
        config
      )
      .then((res) => {
        console.log(res);
        callback(res.data);
      })
      .catch((err) => {
        console.log(err);
        callback(null);
      });
  }
  //`https://ef8nvgpcf9.execute-api.us-east-2.amazonaws.com/dev/user/disable`,
  // `https://ef8nvgpcf9.execute-api.us-east-2.amazonaws.com/dev/user/enable`,
}

export function listuser(token, callback) {
  const config = {
    headers: { Authorization: `${token}` },
  };
  axios
    .get(
      `https://auwusp9np6.execute-api.us-east-1.amazonaws.com/dev/users`,
      config
    )
    .then((res) => {
      console.log(res.data)
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
      callback(null);
    });
}

export function getuserinfo(token,email, callback) {
  const config = {
    headers: { Authorization: `${token}` },
  };
  axios
    .get(
      `https://auwusp9np6.execute-api.us-east-1.amazonaws.com/dev/user/`+email,
      config
    )
    .then((res) => {
      console.log(res.data)
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
      callback(null);
    });
}
//  `https://ef8nvgpcf9.execute-api.us-east-2.amazonaws.com/dev/users`,

/////////////////////////////////////////////ADMIN SYSTEM ///////////////////////////////////////////

export function listtenantuser(token, tenant, callback) {
  const config = {
    headers: { Authorization: `${token}` },
  };
  axios
    .get(
      `https://auwusp9np6.execute-api.us-east-1.amazonaws.com/dev/users/system/` +
        tenant.UserPoolId,
      config
    )
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
      callback(null);
    });
}
// `https://ef8nvgpcf9.execute-api.us-east-2.amazonaws.com/dev/users/system/`+tenant.UserPoolId,

export function TenantCreate(token, user, tenant, callback) {
  user.UserPoolId = tenant.UserPoolId;
  user.IdentityPoolId = tenant.IdentityPoolId;
  user.client_id = tenant.ClientId;
  user.tenant_id = tenant.TenantId;
  user.companyName = tenant.CompanyName;
  const config = {
    headers: { Authorization: `${token}` },
  };
  axios
    .post(
      `https://auwusp9np6.execute-api.us-east-1.amazonaws.com/dev/user/system/` +
        tenant.UserPoolId,
      user,
      config
    )
    .then((res) => {
      console.log(res);
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
      callback(null);
    });
}

// `https://ef8nvgpcf9.execute-api.us-east-2.amazonaws.com/dev/user/system/`+tenant.UserPoolId,

export function TenantUserEdit(token, user, tenant, callback) {
  user.UserPoolId = tenant.UserPoolId;
  const config = {
    headers: { Authorization: `${token}` },
  };
  axios
    .put(
      `https://auwusp9np6.execute-api.us-east-1.amazonaws.com/dev/user/system`,
      user,
      config
    )
    .then((res) => {
      console.log(res);
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
      callback(null);
    });
}

//  `https://ef8nvgpcf9.execute-api.us-east-2.amazonaws.com/dev/user/system`,
export function TenantEnabled(token, user, tenant, enabled, callback) {
  user.UserPoolId = tenant.UserPoolId;
  console.log(user);
  const config = {
    headers: { Authorization: `${token}` },
  };
  if (enabled) {
    //desabilitar
    axios
      .put(
        `https://auwusp9np6.execute-api.us-east-1.amazonaws.com/dev/user/system/disable`,
        user,
        config
      )
      .then((res) => {
        console.log(res);
        callback(res.data);
      })
      .catch((err) => {
        console.log(err);
        callback(null);
      });
  } else {
    axios
      .put(
        `https://auwusp9np6.execute-api.us-east-1.amazonaws.com/dev/user/system/enable`,
        user,
        config
      )
      .then((res) => {
        console.log(res);
        callback(res.data);
      })
      .catch((err) => {
        console.log(err);
        callback(null);
      });
  }
}
// `https://ef8nvgpcf9.execute-api.us-east-2.amazonaws.com/dev/user/system/disable`,
// `https://ef8nvgpcf9.execute-api.us-east-2.amazonaws.com/dev/user/system/enable`,

export function TenantUserDelete(token, user, tenantid, callback) {
  const config = {
    headers: { Authorization: `${token}` },
  };
  axios
    .delete(
      `https://auwusp9np6.execute-api.us-east-1.amazonaws.com/dev/user/system/` +
        user +
        '/' +
        tenantid,
      config
    )
    .then((res) => {
      console.log(res);
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
      callback(null);
    });
}
//`https://ef8nvgpcf9.execute-api.us-east-2.amazonaws.com/dev/user/system/`+user+'/'+tenantid,
