import SinusDots from "../SinusDots/SinusDots"


function WhoIAm()
    {
        
        return (
            <div className="WhoIAm">
                <h2>Qui suis-je ?</h2>

                <p>Je suis Amaury Durand, développeur Web et suis à la recherche d'un emploi.<br/>
                Je suis situé en Normandie dans le département du Calvados.</p>
                <p>Depuis toujours passionné par la programmation, j'ai décidé d'en faire mon métier après de nombreuses années passées comme commerçant.</p>
                <p>C'est ainsi que j'ai commencé en Avril 2022 la formation de développeur web chez OpenClassRoom.<br/>
                Celle-ci c'est terminée en février 2023 et je suis donc désormais disponible pour une première expérience professionnelle.</p>

                <h2>L'origine d'une passion</h2>

                <p>Le choix de devenir developpeur web n'est pas venu par hasard. Je code depuis déjà de nombreuses années.</p>

                <p>En effet, en 1989, mes parents ont acheté une machine qui changera ma vie à tout jamais: un Amstrad CPC 6128+.<br/>
                Cette machine fût à l'origine d'une passion débordante et enrichissante.</p>

                <p>Bien que les premières semaines furent consacrées aux jeux, je découvrais rapidement le language Basic embarqué.<br/>
                Sur ces machines, pas d'interface graphique: pour lancer un programme, il faut déjà taper des instructions.<br/>
                C'est ainsi que petit à petit je m'intéressais au Basic et faisais mes premiers programmes. Mais c'était trop limité.</p>

                <p>Afin d'avoir de meilleures performances, je me dirigeais alors vers un autre language: L'assembleur Z80.<br/>
                Je devins démomaker et produisis quelques effets comme les Sinus dots si dessous (bien plus faciles à faire en assembleur).</p>
                <SinusDots/>

                <h2>Avant la formation</h2>

                <p>Passionné de programmation je n'ai dans un premier temps pas souhaité en faire mon métier "par crainte de détruire cette passion".</p>
                <p>J'ai donc fait des études dans le domaine scientifique/médical dont la microbiologie, biologie, biochimie (BGB).<br/>
                J'ai ensuite exercé différents emplois donc celui de préparateur en pharmacie, ainsi que celui de commerçant.</p>

                <h2>La réorientation.</h2>

                <p>Après de nombreuses années de travail, j'ai souhaité changer de direction.<br/>
                Afin faire un site en rapport avec ma passion pour les vieux ordinateurs, j'ai 
                commencé à apprendre les bases de quelques langages web dont le HTML, le CSS ou encore le PHP.<br/>
                C'est ainsi que m'est venue l'idée d'aller plus loin et d'en faire mon métier.</p>
            </div>
            )
    }

export default WhoIAm