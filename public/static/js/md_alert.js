// import {base} from "@/static/app";
import {base} from "./app.js";

document.addEventListener('DOMContentLoaded', function () {
    let md_alert_dom = document.getElementById('md_alert_dom');
    let md_alert_inside = document.getElementById('md_alert_inside');
    let md_alert_content = document.getElementById('md_alert_content');

    let md_alert_footer_other_btns = document.getElementById('md_alert_footer_other_btns')
    let md_alert_btn_close = document.getElementById('md_alert_btn_close');

    if (md_alert_btn_close) {
        md_alert_btn_close.addEventListener('click', function (e) {
            e.preventDefault();
            md_alert_status('hide');
        })
    }
});

export function md_alert(data) {
    md_alert_content.innerHTML = "";
    md_alert_footer_other_btns.innerHTML = "";
    let content = '';
    let title;
    let msg;
    let messages;
    let actions;
    let additionals;
    let actions_btn = '';

    if (data) {
        if (data.title) {
            title = data.title;
        } else {
            title = 'MD Alert';
        }

        content += '<h2>' + title + '</h2>';

        if (data.type) {
            content += '<div class="icon"><img src="' + base + '/static/images/icons/' + data.type + '.png" alt="Error"></div>';
        }

        if (data.msg) {
            msg = data.msg;
        } else {
            msg = 'Error Desconocido';
        }
        content += '<h5>' + msg + '</h5>';

        if (data.msgs) {
            messages = JSON.parse(data.msgs);
            if (messages.length > 0) {
                content += '<ul>';
                messages.forEach(function (element, index) {
                    content += '<li><i class="bi bi-bullseye"></i> ' + element + '</li>';
                })
                content += '</ul>';
            }
        }

        if (data.actions) {
            actions = JSON.parse(data.actions);
            if (actions.length > 0) {
                actions.forEach(function (element, index) {
                    if (element.url) {
                        actions_btn += '<a href="' + element.url + '" class="btn btn-' + element.type + '">' + element.name + '</a>';
                    } else {
                        actions_btn += '<a href="#" onclick="' + element.callback + '(' + element.params + '); return false" class="btn btn-' + element.type + '">' + element.name + '</a>';
                    }
                });
            }
        }

        if (data.additionals) {
            additionals = JSON.parse(data.additionals);
            if (additionals.hideclose && additionals.hideclose === true) {
                document.getElementById('md_alert_btn_close').style.display = 'none';
            } else
                document.getElementById('md_alert_btn_close').style.display = 'block';
        }

        md_alert_content.innerHTML = content;
        md_alert_footer_other_btns.innerHTML = actions_btn;
        md_alert_status('show');
    }
}

function md_alert_status(status) {
    if (status === 'show') {
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        document.getElementsByClassName('wrapper')[0].classList.add('blur');
        md_alert_dom.style.display = 'flex';
        md_alert_dom.classList.remove('md_alert_animation_hide')
        md_alert_dom.classList.add('md_alert_animation_show')
        md_alert_inside.classList.add('scale_animation');
    }
    if (status === 'hide') {
        document.getElementsByTagName('body')[0].style.removeProperty('overflow');
        document.getElementsByClassName('wrapper')[0].classList.remove('blur');
        md_alert_dom.style.display = 'none';
        md_alert_dom.classList.add('md_alert_animation_hide')
        md_alert_dom.classList.remove('md_alert_animation_show')
        md_alert_inside.classList.remove('scale_animation');
    }
}
