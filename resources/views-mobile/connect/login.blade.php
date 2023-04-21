<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="routeName" content="{{ Route::currentRouteName() }}">

    <title>{{ __('lg.connect.login') }} Doris - APP</title>
    {{--    <link rel="shortcut icon" href="{{ asset('/favicon.ico') }}" type="image/x-icon">--}}
    <link rel="icon" href="{{ url('favicon.ico') }}" type="image/x-icon">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css">
    {{--    <link rel="stylesheet" href="{{ asset('/static/css/connect.css') }}">--}}

    <script type="text/javascript" src="{{ asset('/static/js/app.js')}}"></script>
    <script type="text/javascript" src="{{ asset('/static/js/connect.js')}}"></script>
    {{--    @vite(['resources/stylus/static/connect.styl?v='.time(), 'resources/js/static/app.js', 'resources/js/static/connect.js'])--}}
    @vite(['resources/stylus/static/connect.styl'])
</head>
<body>
@include('components.loader_action')
<div class="page page_app">
    <div class="box">
        <div class="logo">
            <img src="{{ asset('static/images/doris-app-logo-white.png') }}" alt="">
        </div>
        <h2 class="title">{{ __('lg.connect.login') }}</h2>
        <div class="form mtop16">
            {!! Form::open(['url' => '/', 'id' => 'form_connect_login']) !!}
            <label for="email">{{ __('lg.connect.email') }}:</label>
            <div class="group">
                <i class="bi bi-envelope-open"></i>
                {!! Form::email('email', null, ['class' => 'input', 'autofocus']) !!}
            </div>

            <label for="password" class="mtop16">{{ __('lg.connect.password') }}:</label>
            <div class="group">
                <i class="bi bi-fingerprint"></i>
                {!! Form::password('password', ['class' => 'input']) !!}
            </div>

            {!! Form::submit(__('lg.connect.connect'), ['class' => 'btn mtop16']) !!}
            {!! Form::close() !!}
        </div>
    </div>
</div>
</body>
</html>