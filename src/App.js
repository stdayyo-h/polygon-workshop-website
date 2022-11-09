import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

function App() {

//   handleSubmit = event => {
//     event.preventDefault();
//     const user = {
//       name: this.state.name
//     }
//     axios.post('https://oxcite-backend.up.railway.app/register/', { user })
//       .then(res=>{
//         console.log(res);
//         console.log(res.data);
//         //window.location = "/retrieve" 
//       })
//   }
//   handleChange = event =>{
//     this.setState({ name: event.target.value});
//   }
// render() {
//     return (
//       <Container>
//         <Header/>
//         <form onSubmit = { this.handleSubmit }>
//           <label> Name:
//             <input type = "text" name = "name" onChange= {this.handleChange}/>
//           </label>
//           <label> E-Mail:
//             <input type = "text" name = "name" onChange= {this.handleChange}/>
//           </label>
//           <label> Mobile Number:
//             <input type = "text" name = "name" onChange= {this.handleChange}/>
//           </label>
//           <label> College Name:
//             <input type = "text" name = "name" onChange= {this.handleChange}/>
//           </label>
//           <label> Transaction ID:
//             <input type = "text" name = "name" onChange= {this.handleChange}/>
//           </label>
//           <button type = "submit"> Add </button>
//           <button type = "reset"> reset </button>
//         </form>
//     </Container>
//     );
//   }
    


  AOS.init({ duration: 2000 });
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
