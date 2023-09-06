import Titulos from "../../Titulos"
import fotosPopulares from "./fotos-poplares.json"
import { styled } from "styled-components"

const ColunaFotos = styled.section`
    display: flex;
    flex-direction: column;
`
const ImagemPopular = styled.img`
    width: 212px; 
    height: 158px;
    border-radius: 30px;
    padding: 10px;
    margin-left: 10px;
`
const Botao = styled.button`
    background-color: transparent;
    margin: 10px 0px 0px 25px;
    width: 208px;
    border-radius: 10px;
    border: 2px solid #C98CF1;
    color: #FFFFFF;
    padding: 15px;
    font-size: 20px;
    cursor: pointer;
    &:hover{
        background-color: #C98CF1;
    }
`
const Populares = () => {
    return <div style={{ minWidth: 212 }}>
        <Titulos $alinhamento="center">Populares</Titulos>
        <ColunaFotos>
            {fotosPopulares.map(foto => <ImagemPopular src={foto.path} key={foto.id} />)}
            <Botao>Ver mais</Botao>
        </ColunaFotos>
    </div>
}

export default Populares