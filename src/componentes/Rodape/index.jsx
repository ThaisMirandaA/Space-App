import { styled } from "styled-components"

const FooterEstilizado = styled.footer`
    background-color: #04244F;
    height: 80px;
    margin-top: 100px;
`
const ConteudoFooter = styled.div`
    display: flex;
    color: #FFFFFF;
    justify-content: space-between;
    padding: 10px 20px 0px 20px;
`
const MidiasSociais = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    align-items: center;
    justify-content: space-around;
    width: 162.19px;
`
const Rodape = () => {
    return (
        <FooterEstilizado>
            <ConteudoFooter>
                <MidiasSociais>
                    <a href='facebook.com/' target='_blank'><img src="../../public/imagens/sociais/facebook.svg" alt="Logo Facebook" /></a>
                    <a href='twitter.com/' target='_blank'><img src="../../public/imagens/sociais/twitter.svg" alt="Logo Twitter" /></a>
                    <a href='instagram.com/' target='_blank'><img src="../../public/imagens/sociais/instagram.svg" alt="Logo Instagram" /></a>
                </MidiasSociais>
                <h3>Desenvolvido por Thaís</h3>
            </ConteudoFooter>
        </FooterEstilizado>
    )

}

export default Rodape