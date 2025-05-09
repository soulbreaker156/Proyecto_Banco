@extends('template')
@section('title','Dashboard')

@push('css')
    
@endpush
@section('titulo', 'HOLA')
@section('contenido')
<div class="  w-[40%] h-[30%] flex justify-center items-center absolute p-[10px] bg-white bottom-[60%] left-4 rounded-md">
    <canvas id="myChart" style="width:200px; height:100px;"></canvas>
</div>
 
@endsection

@push('js')
@endpush