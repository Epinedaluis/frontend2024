import ListItem from './ListItem'

const personas = [
  {
    nombre: 'Cristian',
    telefono: '92304724523',
    email: 'l5t6H@example.com',
  },
  {
   nombre: 'Eduardo Pineda Luis',
   telefono: '92304724523',
   email: 'l5t6H@example.com',
  },
  {
   nombre: 'Carlos',
   telefono: '92304724523',
   email: 'l5t6H@example.com',
  }
]

function App() {
  return (
    <div>
      <h1>Agenda</h1>
      <hr />
      {
        personas.map(persona => 
          <ListItem
          key={persona.email}
          nombre={persona.nombre}
          telefono={persona.telefono}
          email={persona.email}
          />
      )}
    </div>
  )
}
export default App
