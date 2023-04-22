import {loader_action_status, base, csrfToken, route} from "./app";
import {md_alert} from "./md_alert";

document.addEventListener('DOMContentLoaded', function () {
    let form_connect_login = document.getElementById('form_connect_login');

    if (form_connect_login) {
        form_connect_login.addEventListener('submit', function (e) {
            e.preventDefault();
            connect_user_login();
        });
    }
});

function connect_user_login() {
    loader_action_status('show');
    let url = base + '/api-js/connect/login';
    let data;

    let http = new XMLHttpRequest();
    http.open('POST', url, true);
    http.setRequestHeader('X-CSRF-TOKEN', csrfToken);
    http.onreadystatechange = function () {
        if (this.readyState == '4' && this.status == 200) {
            data = this.responseText;
            data = JSON.parse(data);
            if (data.type == 'error') {
                md_alert(data);
            }
            if (data.type == 'success') {
                window.location.href = base;
            }
            // console.log(data);
        }
        if (this.status != 200) {
            md_alert({
                title: 'Doris APP',
                type: 'error',
                msg: 'Ha Ocurrido Un Error Desconocido',
            });
        }

        loader_action_status('hide');
    }

    http.send(new FormData(document.getElementById('form_connect_login')));
}
