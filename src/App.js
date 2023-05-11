import './App.css';
import { ImUser } from 'react-icons/im';
import { useEffect, useState } from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { BiSkipNext } from 'react-icons/bi';
import { BiSkipPrevious } from 'react-icons/bi';
import { BsFillPlayCircleFill } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai'
import { AiOutlineShareAlt } from 'react-icons/ai'
import { HiDownload } from 'react-icons/hi'
import { AiFillInstagram } from 'react-icons/ai'
import { BsYoutube } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import logo from './logo.svg'
import youtubeImg from './images/channels4_profile.jpg'

import image1 from './images/mobile (3).png'
import image2 from './images/mobile (4).png'
function App() {
  const [listMusic, setIsMusicList] = useState([]);
  useEffect(() => {
    console.log('test')
    async function buscaBeats() {
      let response = await fetch('http://localhost:3001/fetchAllBeats', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      })
      const result = await response.json();
      const resultado = result.listBeats.rows;
      setIsMusicList(resultado)
    }
    buscaBeats()

  }, []);


  return (
    <div className="page1">
      <div className='menu'>
        <div className='logo'>
          <div class="text_container">
            <h1 class="text text_top">HIGH.go</h1>
          </div>
        </div>
        <div className='menu-nav'>
          <a className='clientMenu'><ImUser size={22} color='aqua' /> Log in</a>
          <a className='clientMenu'><BiShoppingBag size={22} color='aqua' /> $0,00</a>
          <a className='quickAccess'>Contact</a>
          <a className='quickAccess'>Channel</a>
          <a className='quickAccess'>Home</a>
        </div>
      </div>
      <div className='section'>
        <div className="container-list" >
          <table >
            <thead>
              <tr>
                <th ></th>
                <th className='title'>TITLE</th>
                <th>TIME</th>
                <th>BPM</th>
                <th className='title-tags'>TAGS</th>
              </tr>
            </thead>
            <div id='loadTable'></div>
            {listMusic.map((val, key) => {
              return (
                <tbody>
                  <tr key={key}>
                    <td className='img'><img class="imagemMusic" src={val.linkimage}></img></td>
                    <td className='music'>⚡️ {val.name}</td>
                    <td className='time'>03:10</td>
                    <td className='bpm'>140</td>
                    <td ><h5 className='tags'>gloc</h5></td>
                    <td>
                      <a className='download'><HiDownload size={30} color="aqua" /></a>
                    </td>
                    <td> <a className='share'>
                      <AiOutlineShareAlt size={30} color='aqua' /></a>
                    </td>
                    <td className='bag'>
                      <button className='addItem'> <BiShoppingBag size={19} color='black' /> + $29,00</button>
                    </td>

                  </tr>
                </tbody>
              )
            })
            }
          </table>

        </div>
      </div>
      <div class="section-youtube">
        <div className='centro'>
          <div className='div-left'>
            <div className='cont-info'>
              <img class="logoYout" src={youtubeImg} />
              <h1>HIGH-Go</h1>
            </div>
            <div className='link-youtube'>
              <AiFillYoutube size={30} color='black' id="youtub" />
              <h1>SUBSCRIBE</h1></div>
          </div>
          <div className='div-right'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/AYFUIoKSZXY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      <div className='section-contact'>
        <form class="form-contact">
          <h1>Contact</h1>
          <input class="input" id='nameInput' name="name" placeholder="YOUR NAME" autocomplete="off" required></input>
          <input class="input" id='emailInput' name="email" placeholder="E-MAIL ADDRESS" autocomplete="off" required></input>
          <input class="input" id="subjectInput" type="text" placeholder="SUBJECT"></input>
          <textarea id="messageInput" name="message" cols="30" rows="10" placeholder="MESSAGE" required ></textarea>
          <button type="submit" id="button-enviar">SEND MESSAGE</button>
          <input type="hidden" name="_captcha" value="false"></input>
        </form>
      </div>
      <div className='rodape'>
        <div className='container'>
          <div className='logo'>
            <div class="text_container">
              <h1 class="text text_top">HIGH.go</h1>
            </div>
          </div>
        </div>
        <div className='container LinkRodape'>
          <li className='link'>Home</li>
          <li className='link'>Contact</li>
          <li className='link'>Channel</li>
        </div>
        <div className='container linkMidias'>
          <li className='midias'><AiFillInstagram size={30} color='aqua' className='icon' /><h5>Instagram</h5></li>
          <li className='midias'><BsYoutube size={30} color='aqua' className='icon' /><h5>Youtube</h5></li>
          <li className='midias'><AiFillStar size={30} color='aqua' className='icon' /><h5>beatstars</h5></li>
        </div>
      </div>
    </div>


  );
}

export default App;
