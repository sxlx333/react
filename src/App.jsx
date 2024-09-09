import './App.css'
function App() {
  const [count, setCount] = useState(0)


  // //  This will render a <div> containing three <p> elements
  // return (
  //   <div>
  //     <p></p>
  //     <p></p>   // kai nori grazinti viena div su 3 p
  //     <p></p>
  //   </div>
  // )


  // This will render just the three <p> elements, without an extra parent container
return (
  <> 
  <p></p>   {/* renders 3 paragraphs using React Fragment <></> */}
  <p></p>
  <p></p>
  </>
)
}

// The <></> symbol in JSX is called a React Fragment. React Fragments allow you to group multiple elements without adding an extra node to the DOM, unlike a <div> which would create an additional HTML element.

export default App
