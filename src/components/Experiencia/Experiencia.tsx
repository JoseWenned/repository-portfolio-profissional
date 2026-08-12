import "./Experiencia.module.css";
import { experiencias } from "../../data/experiencia";

export default function Experiencia() {
  return (
    <section className="experiencia" id="experiencia">
      <div className="experiencia__container">
        <h2>Experiência</h2>

        <div className="experiencia__content">
          {experiencias.map((experiencia) => (
            <article
              className="experiencia__item"
              key={`${experiencia.empresa}-${experiencia.cargo}`}
            >
              <div className="experiencia__header">
                <div>
                  <h3>{experiencia.cargo}</h3>
                  <h4>{experiencia.empresa}</h4>
                </div>

                <span>{experiencia.periodo}</span>
              </div>

              <p>{experiencia.descricao}</p>

              <ul>
                {experiencia.atividades.map((atividade) => (
                  <li key={atividade}>{atividade}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}