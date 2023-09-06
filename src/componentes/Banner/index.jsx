import { styled } from "styled-components"

const BannerEstilizado = styled.figure`
    background-image: ${props => `url(${props.$bannerBackground})`};
    flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;
`
const TextoEstilizado = styled.h1`
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #FFFFFF; 
    max-width: 300px;
    padding: 0 64px; 
`
const Banner = ({ bannerBackground, texto }) => {
    return (
        <BannerEstilizado $bannerBackground={bannerBackground}>
            <TextoEstilizado>{texto}</TextoEstilizado>
        </BannerEstilizado>
    )
}

export default Banner