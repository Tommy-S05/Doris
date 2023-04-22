<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="routeName" content="{{ Route::currentRouteName() }}">

    <title>@yield('title') | Doris APP</title>
    {{--    <link rel="shortcut icon" href="{{ asset('/favicon.ico') }}" type="image/x-icon">--}}
    <link rel="icon" href="{{ url('favicon.ico') }}" type="image/x-icon">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css">
    {{--    <link rel="stylesheet" href="{{ asset('/static/css/connect.css') }}">--}}

    @vite(['resources/stylus/static/connect.styl', 'resources/stylus/static/md_alert.styl'])
    {{--    @vite(['resources/js/static/app.js', 'resources/js/static/connect.js'])--}}

    <script type="module" src="{{ asset('/static/js/app.js')}}"></script>

    <script src="{{ asset('/static/js/lang/'.config('doris.language').'.js')}}"></script>
    @yield('scripts')
</head>
<body>
@include('components.loader_action')
@include('components.md_alert')
<div class="wrapper">
    @yield('content')
</div>

<script type="module" src="{{ asset('/static/js/md_alert.js')}}"></script>
{{--@vite(['resources/js/static/md_alert.js'])--}}
</body>
</html>
