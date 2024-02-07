const persona ={
  nombre :'Eduardo Pineda Luis',
  edad : 22,
  profesion: 'Docente',
  pasatiempos: ['Programar',
  'Leer',
   'Videojuegos',
   'Dormir',
  'comer',
'Estudiar'],
  fechanacimiento: '20/01/2002',
  lugardenacimeinto:'San Juan Bautista Tuxtepec',
  signosodiacal: 'Acuario',
} 

function App() {
  return(
  <div>
    <h1>Informacion Personal</h1>
  <hr />
  <li>Nombre: {persona.nombre}</li>
  <li>Edad: {persona.edad}</li>
  <li>Profesion: {persona.profesion}</li>
  <li>Pastiempos:
    <ul>
{
      persona.pasatiempos.map((pasatiempo) =>{
        return <li key={pasatiempo}>
          {pasatiempo}
          </li>
      })
 } 

{/*<li>{persona.pasatiempos[0]}</li>
    <li>{persona.pasatiempos[1]}</li>  
    <li>{persona.pasatiempos[2]}</li> 
    <li>{persona.pasatiempos[3]}</li>  
<li>{persona.pasatiempos[4]}</li>
<li>{persona.pasatiempos[5]}</li> */}

    </ul>
    <li>Fecha Nacimiento: {persona.fechanacimiento}</li>
    <li>Lugar De Nacimiento: {persona.lugardenacimeinto}</li>
    <li>Signo Sodiacal: {persona.signosodiacal}</li>
  </li>
  </div>
  ) 
}

export default App
