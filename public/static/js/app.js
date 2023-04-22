const base = location.protocol + '//' + location.host;
const route = document.getElementsByName('routeName')[0].getAttribute('content');
const csrfToken = document.getElementsByName('csrf-token')[0].getAttribute('content');

document.addEventListener('DOMContentLoaded', function () {
    let loader_action = document.getElementById('loader_action');
    let show_password = document.getElementsByClassName('show_password');
    if (show_password) {
        for (let i = 0; i < show_password.length; i++) {
            show_password[i].addEventListener('click', function (e) {
                e.preventDefault();
                show_password_fn(this.getAttribute('id'));
            });
        }
    }

    //Autocomplete
    let fields_autocomplete = document.getElementsByClassName('autocomplete');
    if (fields_autocomplete) {
        let page_autocomplete = Date.now();
        for (let i = 0; i < fields_autocomplete.length; i++) {
            fields_autocomplete[i].value = page_autocomplete;
        }

        let tagArr = document.getElementsByClassName('disableac');
        for (let i = 0; i < tagArr.length; i++) {
            let originalName = tagArr[i].getAttribute('name');
            tagArr[i].setAttribute('name', originalName + '_' + page_autocomplete);
            tagArr[i].autocomplete = originalName + '_' + page_autocomplete;
        }
    }
});

//Loader Action Function
function loader_action_status(status) {
    if (status === 'show') {
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
        loader_action.style.display = 'flex';
        loader_action.classList.remove('loader_action_animation_hide')
        loader_action.classList.add('loader_action_animation_show')
    }

    if (status === 'hide') {
        document.getElementsByTagName('body')[0].style.removeProperty('overflow');
        loader_action.style.display = 'none';
        loader_action.classList.add('loader_action_animation_hide')
        loader_action.classList.remove('loader_action_animation_show')
    }
}

//Show Password Field Function
function show_password_fn(element) {
    element = document.getElementById(element);
    let target = element.getAttribute('data-target');
    let state = element.getAttribute('data-state');

    if (state == 'hide') {
        document.getElementById(target).setAttribute('type', 'text');
        element.innerHTML = lang['hide_password'];
        element.setAttribute('data-state', 'show');

    } else if (state == 'show') {
        document.getElementById(target).setAttribute('type', 'password');
        element.innerHTML = lang['show_password'];
        element.setAttribute('data-state', 'hide');

    }
}

export {base, route, csrfToken, loader_action_status};
