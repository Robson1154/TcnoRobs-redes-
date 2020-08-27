
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDmNn0VNksclBQIfI2o8-wQ9A-d87hmAdM",
    authDomain: "usercontact-f0ca0.firebaseapp.com",
    databaseURL: "https://usercontact-f0ca0.firebaseio.com",
    projectId: "usercontact-f0ca0",
    storageBucket: "usercontact-f0ca0.appspot.com",
    messagingSenderId: "665005893938",
    appId: "1:665005893938:web:c99bfb87a0ed1b9ddccf2b",
    measurementId: "G-ZV3LSBBMZ7"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Registro de almacen de datos
var dbService = firebase.database();
// Referencia de la base de datos
var referencia = dbService.ref('registros');

$(function(){
  var username, lastname, correo, contraseña, edad, sexo ;
  $(".btnaction").on('click', function(){
    username = $(".name").val();
    lastname = $(".lastname").val();
    correo = $(".correo").val();
    contraseña = $(".contraseña").val();
    edad = $(".edad").val();
    sexo = $(".sexo").val();
    if(username.length == 0|| lastname.length == 0|| correo.length == 0|| contraseña.length == 0|| edad.length == 0|| sexo.length == 0){
      alert("Campos incompletos");
    }else{
      return save;
    }
  })
})



function inhabilitar(){
  document.getElementById('nombre').disabled= true;
  document.getElementById('apellidos').disabled= true;
  document.getElementById('correo').disabled= true;
  document.getElementById('contraseña').disabled= true;
  document.getElementById('edad').disabled= true;
  document.getElementById('sexo').disabled= true;
}




function save(){
  let name = document.getElementById('nombre').value;
  let apell = document.getElementById('apellidos').value;
  let corre = document.getElementById('correo').value;
  let passw = document.getElementById('contraseña').value;
  let age = document.getElementById('edad').value;
  let gen = document.getElementById('sexo').value;

// Pregunto si hay datos

  if(correo){
    referencia.push({
      nombre : name,
      apellidos : apell,
      correo : corre, 
      contraseña : passw,
      edad: age,
      sexo: gen
    })
    .then(()=>{
      const toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer:3000,
        width:400,
      })
    toast({
      type:'success',
      title:'Los datos se registraron correctamente'
    })
    inhabilitar();
    })
    .catch(()=>{
      const toast = Swal.mixin({
        toast: true,
        position:'bottom-start',
        showConfirmButton: false,
        timer:3000,
        width:400
      })
      toast({
        type:'error',
        title:'¡Error! Verifica tu información'
      })
    })
  } else{
    const toast = Swal.mixin({
      toast:true,
      position:'bottom-start',
      showConfirmButton: false,
      timer:3000,
      width:400
    })
    toast({
      type:'error',
      title:'¡Error! Verifica tu información'
    })
  }

  
}



