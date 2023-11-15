import "bootstrap/dist/css/bootstrap.min.css"
import Image from "next/image"

const services = [
    {
        name: "Cortes de cabelo de precisão",
        description: "Nossos barbeiros são especializados em cortes de precisão adaptados às suas características únicas e estilo pessoal."
    },
    {
        name: "Tratamento da barba",
        description: "Desde esculpir até aparar, ajudaremos você a manter uma barba bem cuidada e elegante."
    },
    {
        name: "Barbear com toalha quente",
        description: "Delicie-se com o luxo de um barbear clássico com toalha quente para uma experiência suave e refrescante."
    },
    {
        name: "Penteado",
        description: "Se você deseja uma aparência elegante e profissional ou um estilo moderno e moderno, nós temos o que você precisa."
    },
    {
        name: 'Dia do noivo',
        description: "Ou seja, neste dia, o noivo vai se arrumar, fazer a barba, cabelo, bigode, massagens, manicure, depilação e tudo que tem direito. Pois, este momento é só dele e este dia é tão importante para ele assim como é para a noiva, não é mesmo?"
    },
    {
        name:'Quimica capilar',
        description: "A “Química da Estética Capilar” se refere a beleza das transformações químicas do cabelo. Todos os procedimentos capilares envolvem a Química, desde as mais simples que realizamos cotidianamente como lavar e condicionar até os mais complexos com alisar e colorir os cabelos."
    },
    {
        name: "Cortes infantis",
        description: "Recebemos clientes de todas as idades, e nossos barbeiros qualificados sabem como fazer as crianças se sentirem confortáveis ​​e com uma aparência bacana."
    },
    {
        name:"BAR",
        description: "Contamos com bebidas alcoólicas e não alcoólicas para nossos clientes, inclusive refrigerantes e sucos também para as crianças."
    }
]

export default function Servicos() {
    return (
        <div className={"container-fluid page-servicos"}>
            <section>
                <h1>Nossos Serviços</h1>
                <br/>
                <div className="servicos mb-2 mt-2">
                {services.map((service, index) => (
                    <div className="card" key={index}>
                        <div className="card-body">
                            <h5 className="card-title">{service.name}</h5>
                            <p className="card-text">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
                </div>
            </section>
        </div>
    )
}
