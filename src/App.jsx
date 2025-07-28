import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import html2pdf from "html2pdf.js";


function App() {
  const exportToPDF = () => {
    const element = document.getElementById("cv-content");
    html2pdf().from(element).save("CV_Facundo_Angulo.pdf");
  };

  return (
    <div className="bg-light py-5 px-3">
      <div className="container bg-white shadow p-5 rounded" id="cv-content">
        <div className="row align-items-center mb-4">
          <div className="col-md-3 text-center mb-3 mb-md-0">
            <div
              className="rounded-circle overflow-hidden mx-auto"
              style={{
                width: "150px",
                height: "150px",
                border: "4px solid black",
              }}
            >
              <img
                src="/Foto.png"
                alt="Tu Foto"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="col-md-9">
            <h1 className="text-primary fw-bold">Facundo Angulo Cabrera</h1>
            <p className="lead text-secondary">
              Desarrollador Full Stack | Enfocado en soluciones innovadoras y diseño web atractivo.
            </p>
            <p>
              Soy un joven entusiasta en el mundo del desarrollo de software. Aunque no cuento con experiencia profesional aún, he trabajado de forma autodidacta en diversos proyectos reales, demostrando mis ganas de aprender, crecer y aportar en un entorno laboral. Estoy listo para enfrentar nuevos desafíos y dejar huella con mi trabajo.
            </p>
          </div>
        </div>

        <hr />

        <div className="mb-4">
          <h3 className="text-primary">Proyectos Reales</h3>
          <ul>
            <li>
              <strong>🎁 Juego del Amigo Secreto:</strong>{" "}
              <a href="https://facundoac.github.io/Amigo-Secreto-/" target="_blank" rel="noreferrer">
                Ver proyecto
              </a>
            </li>
            <li>
              <strong>🧠 Juego de Adivinanza:</strong>{" "}
              <a href="https://juego-adivinanza-five.vercel.app/" target="_blank" rel="noreferrer">
                Ver proyecto
              </a>
            </li>
            <li>
              <strong>💱 Conversor de Monedas (Java):</strong>{" "}
              <a href="https://github.com/FacundoAC/conversor-monedas-java" target="_blank" rel="noreferrer">
                Código en GitHub
              </a>
            </li>
            <li>
              <strong>☕ Proyecto con Spring Boot:</strong>{" "}
              <a href="https://github.com/FacundoAC/mi-springboot-proyecto" target="_blank" rel="noreferrer">
                Código en GitHub
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-primary">Habilidades</h3>
          <div className="row">
            <div className="col-md-6">
              <ul>
                <li>HTML, CSS, Bootstrap</li>
                <li>JavaScript, React, Node.js</li>
                <li>Java (Swing, JDBC, Spring Boot)</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li>MySQL, SQL Server, MongoDB</li>
                <li>phpMyAdmin, JasperSoft Studio</li>
                <li>Diseño web atractivo y responsive</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-primary">Contacto</h3>
          <ul className="list-unstyled">
            <li><strong>📧 Email:</strong> facundo0034@gmail.com</li>
            <li><strong>💻 GitHub:</strong>{" "}
              <a href="https://github.com/FacundoAC" target="_blank" rel="noreferrer">
                github.com/FacundoAC
              </a>
            </li>
            <li><strong>📱 Teléfono:</strong> 967233302</li>
            <li><strong>🌐 Ubicación:</strong> Perú</li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-4">
        <button className="btn btn-primary btn-lg" onClick={exportToPDF}>
          Exportar a PDF
        </button>
      </div>
    </div>
  );
}

export default App;
