import './App.css';
// import { useTypewriter } from 'react-simple-typewriter';
import {useState} from 'react' 
import axios from 'axios'
import BannerItem from './BannerItem';
import bannerImg1 from './FOON.jpg'
import bannerImg2 from './FOON2.avif'
import bannerImg3 from './FOON3.avif'


function App() {
  const [inputValue, setInputValue] = useState([]);
  const [response, setResponse] = useState([]);
  const ACCESS_KEY = "nKnKTDLfF-u8ty8Dvdqqkpg1TIYjQBxp91oG08Cel_k"

  // const { text } = useTypewriter({
  //   words: ['Beach', 'Cars', 'Birds', 'Mountains', "sun", "phone"],
  //   loop: "0",
  // });

  console.log(response.map(i => console.log(i)));
  const getImg = (e)=>{
    e.preventDefault()
    const url = "https://api.unsplash.com/search/photos?page=1&query=" + inputValue + "&client_id=" + ACCESS_KEY;
    axios
      .get(url)      
      .then((res)=> setResponse(res.data.results))
      .catch((err)=> console.log(err))
    }

   


  return (
    <div className="app">
      <header>
        <center>
          <h1>Turli xil rasmlarini <span>UNSPLASH</span> dan izlang!</h1>
        </center>
        <form onSubmit={getImg}>
          <input autoFocus={true}
                 type="search" 
                //  placeholder={text}
                placeholder='Qidirish...'
                value={inputValue} 
                onChange={e =>setInputValue(e.target.value)} />
          <button type='Submit'>Qidirish</button>
        </form>
      </header>
      
      <div className="banner">
        {response.length !== 0?
          response.map((img)=> 
            <BannerItem img={img} response={response}/>
            ):
         <div className="banner_cap">
           <img src={bannerImg1} alt="" />
           <img src={bannerImg2} alt="" />
           <img src={bannerImg3} alt="" />
         </div>
        }
      </div> 
    </div>
  );
}

export default App;
