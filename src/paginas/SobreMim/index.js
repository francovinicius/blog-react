import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import styles from './SobreMim.module.css'
import fotoSobreMim from "assets/sobre_mim_foto.JPG"

export default function SobreMim() {
    return (

        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre Mim"
        
        >

            <h3 className={styles.subtitulo}>
                Olá, eu sou o Vinícius
            </h3>

            <img 
                src={fotoSobreMim}
                alt="Foto do Vinícius com microfone"
                className={styles.fotoSobreMim}
            />

            Desenvolvedor front-end. Posso desenvolver sites responsivos a partir do zero e transformá-los em experiências web modernas e fáceis de usar.
        </PostModelo>

    )
}