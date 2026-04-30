import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./App.css";

function App() {
  const projects = [
    {
      title: "EcoCharge+: Sustainable EV Charging using Micro Grids",
      type: "BSc Dissertation / Research Project",
      description:
        "A full-stack system for recommending eco-friendly EV charging routes using microgrid-powered stations, solar production estimates, and spatial-temporal data. The system is deployed on the University of Cyprus Computer Science domain, and a related paper has been submitted to IEEE Mobile Data Management Conference 2026.",
      tech: ["Flask", "Leaflet.js", "SQLite", "OpenWeather", "Python", "Spatial Data"],
      links: [
        { label: "EcoCharge+ Website", url: "https://ecocharge.cs.ucy.ac.cy/" },
        { label: "Live Demo", url: "https://ecochargeplus.cs.ucy.ac.cy/" },
        { label: "Demo Video", url: "https://www.youtube.com/watch?v=CmjFZFbXKDs" },
        { label: "Repository", url: "https://github.com/dmsl/ecocharge/tree/main/Ecocharge%2B" },
      ],
    },
    {
      title: "Brain Tumor MRI Classification",
      type: "Deep Learning",
      description:
        "A medical image classification project for classifying brain MRI scans into glioma, meningioma, pituitary tumour, and no tumour. The project compares a traditional ML baseline, a custom CNN, and transfer learning models.",
      tech: ["PyTorch", "CNN", "ResNet18", "EfficientNetB0", "Grad-CAM", "Kaggle"],
      links: [
        { label: "Repository", url: "https://github.com/Elenimichala55/brain-tumor-mri-classification" },
      ],
    },
    {
      title: "Amazon Product Review Intelligence Pipeline",
      type: "ML / NLP / LLM",
      description:
        "A product review intelligence pipeline for analysing Amazon Electronics reviews, filtering useful reviews, extracting product aspects, and visualising product-level insights. Developed as part of a group assignment for the WM9B7 Artificial Intelligence & Deep Learning module.",
      tech: ["Python", "TF-IDF", "BiLSTM", "DistilRoBERTa", "LLaMA 3.1", "LIME"],
      links: [
        { label: "Repository", url: "https://github.com/Elenimichala55/product-review-intelligence-pipeline" },
        { label: "Frontend Demo", url: "https://elenimichala55.github.io/amazon-reviews-dataset-frontend/" },
        { label: "Frontend Repository", url: "https://github.com/Elenimichala55/amazon-reviews-dataset-frontend" },
      ],
    },
    {
      title: "Diabetes Prediction",
      type: "Machine Learning",
      description:
        "A machine learning project for predicting diabetes risk using patient health indicators. Includes preprocessing, exploratory analysis, classification model training, and performance evaluation.",
      tech: ["Python", "Pandas", "Scikit-learn", "Classification", "Data Analysis"],
      links: [
        { label: "Repository", url: "https://github.com/Elenimichala55/diabetes-prediction" },
      ],
    },
    {
      title: "Kohonen Self-Organising Map",
      type: "Machine Learning",
      description:
        "A full Python implementation of a Kohonen Self-Organising Map for clustering handwritten English characters. Includes custom training and testing pipelines, error visualisation, and tunable parameters.",
      tech: ["Python", "SOM", "Clustering", "Neural Networks"],
      links: [
        { label: "Repository", url: "https://github.com/Elenimichala55/kohonen-som" },
      ],
    },
    {
      title: "Public Health Insights Dashboard",
      type: "Data Dashboard",
      description:
        "A Streamlit dashboard for analysing public health indicators such as life expectancy and obesity prevalence. Includes filtering, trend analysis, descriptive statistics, CRUD operations, activity logging, and CSV export.",
      tech: ["Streamlit", "SQLite", "Pandas", "Altair", "Python"],
      links: [
        { label: "Repository", url: "https://github.com/Elenimichala55/public-health-dashboard" },
      ],
    },
    {
      title: "Weather Dashboard",
      type: "Frontend / Data Dashboard",
      description:
        "A responsive weather dashboard built with vanilla JavaScript, HTML, and CSS. Displays 5-day forecasts, temperature, humidity and pressure charts, and city-based weather lookup using the OpenWeather API.",
      tech: ["JavaScript", "HTML", "CSS", "OpenWeather API"],
      links: [
        { label: "Repository", url: "https://github.com/Elenimichala55/weather-dashboard" },
        { label: "Live Demo", url: "https://elenimichala55.github.io/weather-dashboard/" },
      ],
    },
    {
      title: "LMS – Leave Management System",
      type: "Backend / Full-Stack",
      description:
        "A Spring Boot-based leave management system where employees can request leave and managers can approve, update, or delete requests. Includes role-based authentication, REST endpoints, and a clean multi-layer architecture.",
      tech: ["Java", "Spring Boot", "REST API", "Authentication", "SQL"],
      links: [
        { label: "Repository", url: "https://github.com/Elenimichala55/lms" },
      ],
    },
    {
      title: "Payments Microservice",
      type: "Backend / Microservices",
      description:
        "A distributed payment processing microservice using FastAPI, Kafka, PostgreSQL, and Docker Compose. Includes asynchronous producer and consumer logic with database persistence.",
      tech: ["FastAPI", "Kafka", "PostgreSQL", "Docker", "Python"],
      links: [
        { label: "Repository", url: "https://github.com/Elenimichala55/payments-microservice" },
      ],
    },
  ];

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">MSc Applied Artificial Intelligence</p>
        <h1>Eleni Michala</h1>
        <p className="hero-text">
          Computer Science graduate currently pursuing an MSc in Applied AI at the
          University of Warwick. I build machine learning, deep learning, data,
          backend, and full-stack systems with a focus on practical real-world applications.
        </p>

        <div className="hero-links">
          <a href="https://github.com/Elenimichala55" target="_blank" rel="noreferrer">
            <FaGithub className="link-icon" />
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/eleni-michala-aaa5b0365/" target="_blank" rel="noreferrer">
            <FaLinkedin className="link-icon" />
            LinkedIn
          </a>

          <a href="mailto:elenimichala55@gmail.com">
            <MdEmail className="link-icon" />
            Email
          </a>
        </div>
      </section>

      <section className="section">
        <h2>Featured Projects</h2>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-list">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="card-links">
                {project.links.map((link) => (
                  <a href={link.url} target="_blank" key={link.label}>
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills-section">
        <h2>Technical Skills</h2>

        <div className="skills-grid">
          <div>
            <h3>AI / Machine Learning</h3>
            <p>
              PyTorch, TensorFlow, Scikit-learn, Hugging Face Transformers, CNNs,
              Transfer Learning, NLP, LLMs, model evaluation, and classification pipelines.
            </p>
          </div>

          <div>
            <h3>Explainable AI</h3>
            <p>
              Grad-CAM, LIME, SHAP, feature importance,
              attribution methods, confusion matrices, and error analysis.
            </p>
          </div>

          <div>
            <h3>Backend & APIs</h3>
            <p>
              Flask, FastAPI, Django, Wagtail CMS, Spring Boot, RESTful API development,
              Kafka, Docker, and test-driven development.
            </p>
          </div>

          <div>
            <h3>Frontend & Data</h3>
            <p>
              React, JavaScript, HTML, CSS, Streamlit, Leaflet.js, Pandas, Altair,
              PowerBI, Alteryx, and data dashboards.
            </p>
          </div>

          <div>
            <h3>Databases</h3>
            <p>
              PostgreSQL, MySQL, SQLite, and MSSQL.
            </p>
          </div>

          <div>
            <h3>Programming Languages</h3>
            <p>
              Python, Java, JavaScript, C, C++, SQL, Matlab, HTML, CSS, and basic
              exposure to Dart and Kotlin.
            </p>
          </div>

          <div>
            <h3>Tools & Practices</h3>
            <p>
              Git, Linux command line, Jupyter Notebook, Agile methodologies,
              problem-solving, teamwork, communication, and technical documentation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;