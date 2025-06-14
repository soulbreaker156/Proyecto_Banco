<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="{{ mix('css/app.css') }}" rel="stylesheet">
        <link href="{{ mix('js/app.js') }}" rel="stylesheet">
        <title>@yield('title')</title>
    </head>
    <body class=" flex bg-[#dbcbdf]">
        <x-navbar />
        <main class=" flex h-screen justify-center w-[85%] p-2 relative">
            <h1 class="text-4xl text-white">@yield('titulo')</h1>
            @yield('contenido')
             <x-footer />
        </main>
    </body>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="../js/barras.js"></script>
    <script src="{{ asset('js/lineal.js') }}"></script>
    <script src="{{ asset('js/circular.js') }}"></script>
</html>










































































































































































































