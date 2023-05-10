import { useState } from "react";
function Admin() {
    const [name, setIsName] = useState('');
    const [author, setIsAuthor] = useState('');
    const [linkImage, setIsLinkImage] = useState('');
    const [linkMusic, setIsLinkMusic] = useState('');
    const [resultado, setResultado] = useState('');
    const validaNome = (event) => {
        const name = event.target.value;
        setIsName(name);
    }
    const validaAuthor = (event) => {
        const author = event.target.value;
        setIsAuthor(author);
    }
    const validaLinkImage = (event) => {
        const linkImage = event.target.value;
        setIsLinkImage(linkImage);
    }
    const validaLinkMusic = (event) => {
        const linkMusic = event.target.value;
        setIsLinkMusic(linkMusic);
    }
console.log(name)
   async function Submitform(event) {
    event.preventDefault();
    console.log('click')
        let response = await fetch('http://localhost:3001/create', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: name, author: author, linkImage: linkImage, linkMusic: linkMusic })
        })
        const result = await response.json();
        const resultado = result.cadastrado;
        const error = result.error;

        if(result.cadastrado) {
            setResultado(resultado);
        }
        if(result.error) {
            setResultado(error);
        }
    }   
return (
    <div className="main">
        <h1>cadastrar musica</h1>
        <form onSubmit={Submitform}>
            <label for="name">Nome:</label>
            <input type="text" name="name" id="name" value={name} onChange={validaNome}></input>

            <label for="author">Autor:</label>
            <input type="text" name="author" id="author" value={author} onChange={validaAuthor}></input>
            
            <label for="linkImage">Link da Imagem:</label>
            <input type="text" name="linkImage" id="linkImage" value={linkImage} onChange={validaLinkImage}></input>
            
            <label for="name">link da Music:</label>
            <input type="text" name="linkMusic" id="linkMusic" value={linkMusic} onChange={validaLinkMusic}></input>
            
            <button type="submit"> Cadastrar</button>
        </form>
        <div className="resultado">{resultado}</div>
    </div>

)
}
export default Admin; 