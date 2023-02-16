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
            <p>
                Desenvolvedor front-end. Posso desenvolver sites responsivos a partir do zero e transformá-los em experiências web modernas e fáceis de usar.
            </p>

            <p>
                Antes de mergulhar de cabeça no desenvolvimento web, trabalhei em uma empresa onde era responsável pela manutenção dos laboratórios de informática, fui supervisor de operações, ocupei a cadeira de professor de matemática e física em pré vestibulares, e realizei trabalhos voluntários que consistiam no ensino da Matemática de uma forma mais lúdica para comunidades carentes e zona rural. Foi um período de grande crescimento pessoal e profissional, onde adquiri aptidão para encarar situações de extrema pressão. Tenho experiência com resolução de problemas e tomadas de decisão, em supervisionar, traçar metas e estratégias em equipe, entre outras atividades.
            </p>

            <p>
                Já no âmbito da tecnologia, venho aprimorando meus conhecimentos em front-end, prezando sempre em entregar meus projetos com design responsivo começando pelo mobile (Mobile First).
                Tenho conhecimentos em HTML5, CSS3, JavaScript, e atualmente, tenho me aprofundando nos frameworks React e Bootstrap.
            </p>

            <p>
                Hoje, além de trabalhar com desenvolvimento web, sou responsável por uma equipe que coordena toda a parte de banco de dados da empresa que presto serviços, juntamente com a tratativa e cruzamento de dados do sistema de ponto integrado.
            </p>

            <p>
                Sou formado em Matemática e estou cursando Análise e Desenvolvimento de Sistemas. Divido meu tempo livre em momentos de lazer com a família, igreja, amo tocar violão (montar aquela roda de amigos e fazer um som), gosto de frequentar a academia pela manhã e por último mas não menos importante gosto bastante de fazer trilhas e realizar esportes radicais.
            </p>

            <p>
                Estou sempre bem animado em conhecer pessoas novas, novos ensinamentos e novas culturas! Caso queira saber mais, entre em contato comigo. Um grande abraço!
            </p>
        </PostModelo>

    )
}