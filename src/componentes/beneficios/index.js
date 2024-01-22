import "./estilo.css"
import saude from "../../images/icones/saude.png"
import vale from "../../images/icones/alimentação.png"
import odonto from "../../images/icones/odonto.png"
import creche from "../../images/icones/maternidade.png"
import carreira from "../../images/icones/carreira.png"

function Beneficios(){
    return(
        <div>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Dosis:wght@200&display=swap');
            </style>
            <h1 className="Nome">Benefícios</h1>
            
            <div className='images-beneficios'>
                <figure className="figure-img">
                    <img className="img" src={saude}/>
                    <figcaption className="figcaption-img">Plano de Saúde</figcaption>
                </figure>
                <figure className="figure-img">
                    <img className="img" src={vale}/>
                    <figcaption className="figcaption-img">Vale alimentação</figcaption>
                </figure>
                <figure className="figure-img">
                    <img className="img" src={odonto}/>
                    <figcaption className="figcaption-img">Convênio Odontológico</figcaption>
                </figure>
                <figure className="figure-img">
                    <img className="img" src={creche}/>
                    <figcaption className="figcaption-img">Auxílio Creche</figcaption>
                </figure>
                <figure className="figure-img">
                    <img className="img" src={carreira}/>
                    <figcaption className="figcaption-img">Plano de Carreira</figcaption>
                </figure>
                


            </div>

        </div>
    )
}


export default Beneficios
