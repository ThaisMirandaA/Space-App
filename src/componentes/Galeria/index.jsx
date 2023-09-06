import { styled } from "styled-components"
import Titulos from "../Titulos"
import Tags from "./Tags"
import Populares from "./Populares"
import Imagem from "./Imagem"

const GaleriaContainer = styled.div`
    display: flex;
`
const SecaoFluida = styled.section`
    flex-grow: 1;
`
const ImagensContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 24px;
`
const Galeria = ({ fotos = [], setTag, aoFotoSelecionada, aoAlternarFavorito }) => {
    return (
        <>
            <Tags setTag={setTag} />
            <GaleriaContainer>
                <SecaoFluida>
                    <Titulos>Navegue pela galeria</Titulos>
                    <ImagensContainer>
                        {fotos.map(foto => <Imagem foto={foto} key={foto.id} aoZoomSolicitado={aoFotoSelecionada} aoAlternarFavorito={aoAlternarFavorito} />)}
                    </ImagensContainer>
                </SecaoFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria