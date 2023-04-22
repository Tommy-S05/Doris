@extends('master_full')
@section('title',  __('lg.connect.login'))

@section('scripts')
    <script type="module" src="{{ asset('/static/js/connect.js')}}"></script>
@endsection

@section('content')
    <div class="page">
        <div class="box">
            <div class="logo">
                <img src="{{ asset('static/images/doris-app-logo.png') }}" alt="">
            </div>
            <h2 class="title">{{ __('lg.connect.login') }}</h2>
            <div class="form mtop16">
                {!! Form::open(['url' => '/', 'id' => 'form_connect_login', 'autocomplete' => 'off']) !!}
                {!! Form::hidden('autocomplete', null, ['class' => 'autocomplete']) !!}
                <label for="email">{{ __('lg.connect.email') }}:</label>
                <div class="group">
                    <i class="bi bi-envelope-open"></i>
                    {!! Form::email('email', null, ['class' => 'input disableac', 'autofocus']) !!}
                </div>

                <label for="password" class="mtop16">{{ __('lg.connect.password') }}:</label>
                <div class="group">
                    <i class="bi bi-fingerprint"></i>
                    {!! Form::password('password', ['class' => 'input disableac', 'id' => 'input_password']) !!}
                </div>
                <div class="actions">
                    <a href="#" id="show_password_login" class="show_password" data-state="hide"
                       data-target="input_password">
                        {{ __('lg.connect.show_password') }}
                    </a>
                </div>

                {!! Form::submit(__('lg.connect.connect'), ['class' => 'btn mtop16 transition']) !!}
                {!! Form::close() !!}
            </div>
        </div>
    </div>
@endsection
