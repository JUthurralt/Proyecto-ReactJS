import "../Footer/Footer.css";

const footer = () =>{
    return (
        <div className="contFooter">
            <ol>
                <p>Institucional:</p>
                <li className="pie">Quienes somos</li>
                <li className="pie">Contacto</li>
                <li className="pie">Politica de cambios</li>
            </ol>
            <ol>
                <p>Redes sociales:</p>
                <li className="pie">Twitter</li>
                <li className="pie">Facebook</li>
                <li className="pie">Instagram</li>
            </ol>
            <ol>
                <p>Ayuda:</p>
                <li className="pie">Preguntas frecuentes</li>
                <li className="pie">Promociones</li>
                <li className="pie">Entregas</li>
            </ol>
            <ol>
                <p>Atención al cliente:</p>
                <li className="pie">Lunes a Viernes: 09:00 - 20:00</li>
                <li className="pie">Sabados: 10:00 - 15:00</li>
                <li className="pie">Teléfono: (011) 4455-7231 </li>
            </ol>
        </div>
    )
}
export default footer;