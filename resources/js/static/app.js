const base = location.protocol + '//' + location.host;
const route = document.getElementsByName('routeName')[0].getAttribute('content');
const csrfToken = document.getElementsByName('csrf-token')[0].getAttribute('content');

document.addEventListener('DOMContentLoaded', function () {
    let loader_action = document.getElementById('loader_action');
});

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
