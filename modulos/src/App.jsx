import Listitem from "./Listltem"


const links = [
  {
    name: 'Google',
    url: 'https://google.com'
  },
  {
    name: 'Facebook',
    url: 'https://facebook'
  },
  {
    name: 'Twitter',
    url: 'http://twitter.com'
  }
]

function App() {
  return (
    <div>
      <h1>
      Links
      </h1>
      <hr />
      <ul>
        {
         links.map((link) =>(
          <Listitem
          key={link.name} 
          name={link.name} 
          url={link.url}/>
         )) 
        
       /** links.map((link) =>(
          <li key={link.name}>
            <a href="link.url">{link.name}</a>
            </li>))*/
        }
      </ul>

    </div>
  )
  
}
export default App


