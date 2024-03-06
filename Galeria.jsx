

import Imagem from "./Imagem";


const imagens = [
    'https://blog.giulianaflores.com.br/wp-content/uploads/2013/06/Tulipas-coloridas.jpg',
    'https://media.istockphoto.com/id/498272178/pt/foto/jubileu-de-neve-jardins-e-pal%C3%A1cio-de-westminster-londres.jpg?s=612x612&w=0&k=20&c=JTrBf6VqpbX2Lc52R7_BGGWCn_t2F0kbpdcldpSguIQ=',
    'https://i.pinimg.com/736x/2c/78/29/2c7829aebe64e856415392699d62dadb.jpg',
    'https://i.ytimg.com/vi/-Cgpe8JaEM8/maxresdefault.jpg',
    'https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/04/142ea-cafes-in-greater-noida.jpg?fit=1000%2C667&ssl=1',
    'https://s2-oglobo.glbimg.com/34JFB-K2RluY6qgea17la1OHf0w=/0x0:5696x3920/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/g/Y/61Kd0xQ8uyDMldEsNncA/101580312-the-library-of-the-benedictine-abbey-in-admont-austria-is-pictured-on-december-6-2022-th.jpg',

]

function Galeria(){
    return(
        <div className="galeria">
            {imagens.map((url, index) => (
                <Imagem key={index} url={url}/>
            ))}
        </div>
    )
}

export default Galeria;
