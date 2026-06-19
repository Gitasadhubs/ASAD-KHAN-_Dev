import "../portfolio.css";

export default function Portfolio() {
  return (
    <>
      <div className="pipeline-bg" aria-hidden="true">
        <div className="pipeline-lane lane-a">
          <span className="stage s1">Code</span>
          <span className="connector"></span>
          <span className="stage s2">Build</span>
          <span className="connector"></span>
          <span className="stage s3">Test</span>
          <span className="connector"></span>
          <span className="stage s4">Security</span>
          <span className="connector"></span>
          <span className="stage s5">Package</span>
          <span className="connector"></span>
          <span className="stage s6">Deploy</span>
          <span className="connector"></span>
          <span className="stage s7">Monitor</span>
          <span className="runner r1"></span>
        </div>
        <div className="pipeline-lane lane-b">
          <span className="stage s1">Commit</span>
          <span className="connector"></span>
          <span className="stage s2">Build</span>
          <span className="connector"></span>
          <span className="stage s3">Test</span>
          <span className="connector"></span>
          <span className="stage s4">Scan</span>
          <span className="connector"></span>
          <span className="stage s5">Artifact</span>
          <span className="connector"></span>
          <span className="stage s6">Release</span>
          <span className="connector"></span>
          <span className="stage s7">Observe</span>
          <span className="runner r2"></span>
        </div>
      </div>

      <header className="site-header">
        <a className="brand" href="#home">Asad Ashraf</a>
        <nav className="site-nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="kicker">Lahore, Pakistan</p>
            <h1>DevOps & Site Reliability Engineer building production-ready infrastructure.</h1>
            <p>
              Managing production environments, CI/CD automation, and cloud-native deployments
              across Docker, Kubernetes, AWS, Jenkins, and GitHub Actions.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="mailto:gasadmail@gmail.com">Hire Me</a>
              <a className="btn btn-ghost" href="https://github.com/gitasadhub" target="_blank" rel="noopener">View GitHub</a>
              <a className="btn btn-ghost" href="/asad-ashraf-devops-cv-2026.pdf" download>Download CV</a>
            </div>
            <ul className="hero-links">
              <li>
                <i className="bx bx-envelope"></i>
                <a href="mailto:gasadmail@gmail.com">gasadmail@gmail.com</a>
              </li>
              <li>
                <i className="bx bx-phone"></i>
                <a href="tel:+923044463268">+92 304 4463268</a>
              </li>
              <li>
                <i className="bx bxl-linkedin-square"></i>
                <a href="https://linkedin.com/in/asadkhan-dev" target="_blank" rel="noopener">linkedin.com/in/asadkhan-dev</a>
              </li>
            </ul>
          </div>
          <a className="hero-visual" href="https://linkedin.com/in/asadkhan-dev" target="_blank" rel="noopener" aria-label="Open Asad Ashraf LinkedIn profile">
            <img src="/s.logo.png" alt="Asad Ashraf profile photo" />
          </a>
        </section>

        <section className="section" id="about">
          <h2>About</h2>
          <p>
            DevOps and Site Reliability Engineer with hands-on experience managing production infrastructure,
            CI/CD automation, containerized applications, Linux servers, and cloud-native deployments.
            Experienced with Docker, Kubernetes, Jenkins, GitHub Actions, AWS, monitoring systems, and backup
            automation. Skilled in backend development using Node.js, Express.js, and PostgreSQL. Currently
            working on production ERP environments, deployment automation, and operational reliability at
            IntelliCode Pvt. Passionate about automation, scalability, reliability engineering, and building
            production-ready infrastructure solutions.
          </p>
        </section>

        <section className="section" id="experience">
          <h2>Experience</h2>
          <div className="exp-list">

            <article className="exp-item">
              <div className="exp-header">
                <div>
                  <h3>DevOps & Site Reliability Engineer</h3>
                  <p className="exp-company">IntelliCode Pvt — Lahore, Pakistan</p>
                </div>
                <span className="exp-date">2025 – Present</span>
              </div>
              <ul className="exp-bullets">
                <li>Managing production ERP infrastructure and deployment workflows for live business environments</li>
                <li>Building and maintaining CI/CD pipelines using Jenkins and GitHub Actions</li>
                <li>Deploying and managing Dockerized applications on Linux-based servers</li>
                <li>Working with Kubernetes deployments and cloud-native infrastructure on AWS EKS</li>
                <li>Managing reverse proxies, SSL certificates, DNS configurations, and application hosting</li>
                <li>Monitoring infrastructure health via Prometheus and Grafana</li>
                <li>Supporting backup automation and disaster recovery operations</li>
                <li>Working with AWS services including EC2, ECR, EKS, IAM, and Load Balancers</li>
              </ul>
            </article>

            <article className="exp-item">
              <div className="exp-header">
                <div>
                  <h3>Backend Engineer</h3>
                  <p className="exp-company">Techmantic Pro Inc — Lahore, Pakistan</p>
                </div>
                <span className="exp-date">Dec 2025 – Apr 2026</span>
              </div>
              <ul className="exp-bullets">
                <li>Designed and developed RESTful APIs using Node.js and Express.js for production web applications</li>
                <li>Managed PostgreSQL databases including schema design, query optimization, and migrations</li>
                <li>Implemented JWT-based authentication and role-based access control (RBAC)</li>
                <li>Deployed and maintained backend services on Linux-based servers with Docker containerization</li>
                <li>Monitored application performance and resolved bottlenecks in production environments</li>
                <li>Participated in code reviews and contributed to engineering best practices</li>
              </ul>
            </article>

            <article className="exp-item">
              <div className="exp-header">
                <div>
                  <h3>DevOps Engineer Trainee</h3>
                  <p className="exp-company">Corvit Systems</p>
                </div>
                <span className="exp-date">May 2025 – Aug 2025</span>
              </div>
              <ul className="exp-bullets">
                <li>Developed CI/CD pipelines using Jenkins and GitHub Actions</li>
                <li>Worked with Docker, Kubernetes, Terraform, and cloud deployment practices</li>
                <li>Learned infrastructure automation across AWS and Azure environments</li>
                <li>Practiced monitoring, DevSecOps, and cloud-native deployment workflows</li>
                <li>Worked on Linux administration and cloud infrastructure fundamentals</li>
              </ul>
            </article>

          </div>
        </section>

        <section className="section" id="skills">
          <h2>Technical Skills</h2>
          <div className="grid cards-2">
            <article className="card">
              <h3>Cloud Platforms</h3>
              <p>AWS (EC2, ECR, EKS, IAM, ALB), Microsoft Azure Fundamentals</p>
            </article>
            <article className="card">
              <h3>Containers & Orchestration</h3>
              <p>Docker, Docker Compose, Kubernetes, AWS EKS</p>
            </article>
            <article className="card">
              <h3>CI/CD & Automation</h3>
              <p>Jenkins, GitHub Actions, Azure DevOps, deployment automation, release pipelines</p>
            </article>
            <article className="card">
              <h3>Infrastructure & Systems</h3>
              <p>Linux Administration, Nginx, Reverse Proxy, SSL & DNS Configuration, Shell Scripting, Terraform (Basic)</p>
            </article>
            <article className="card">
              <h3>Monitoring & Observability</h3>
              <p>Prometheus, Grafana, Alertmanager, log monitoring, incident detection</p>
            </article>
            <article className="card">
              <h3>Backend Development</h3>
              <p>Node.js, Express.js, REST APIs, JWT Authentication, PostgreSQL, Git, GitHub</p>
            </article>
          </div>
        </section>

        <section className="section" id="projects">
          <h2>Projects</h2>
          <div className="timeline">
            <article>
              <h3>Production ERP Infrastructure & SRE Operations</h3>
              <p className="project-stack">Docker · Jenkins · Linux · PostgreSQL · Prometheus · Grafana · CI/CD</p>
              <ul className="project-bullets">
                <li>Managed production deployments and CI/CD workflows using Jenkins and GitHub Actions</li>
                <li>Maintained Dockerized services and Linux-based application environments with high availability</li>
                <li>Monitored application uptime via Prometheus and Grafana dashboards</li>
                <li>Configured Nginx reverse proxy, SSL certificates, and service routing for production environments</li>
                <li>Automated backup and operational maintenance workflows using Bash scripting</li>
              </ul>
            </article>
            <article>
              <h3>Kubernetes-Based CI/CD Deployment Platform</h3>
              <p className="project-stack">Kubernetes · Docker · GitHub Actions · AWS EKS · AWS ECR</p>
              <ul className="project-bullets">
                <li>Created end-to-end CI/CD pipelines for automated Docker image build, push, and deployment</li>
                <li>Managed Kubernetes deployments, services, ConfigMaps, and ingress configurations</li>
                <li>Deployed and scaled containerized workloads on AWS EKS infrastructure</li>
                <li>Integrated GitHub Actions with AWS ECR for streamlined container image workflows</li>
                <li>Improved deployment reliability, rollback procedures, and release automation cadence</li>
              </ul>
              <div className="project-links">
                <a href="https://github.com/Gitasadhubs/3-Tier-ReactJS-NodeJS-MongoDB-App-on-Kubernetes-AWS-ECR-ALB-" target="_blank" rel="noopener">Code</a>
              </div>
            </article>
            <article>
              <h3>Infrastructure Monitoring & Log Management System</h3>
              <p className="project-stack">Prometheus · Grafana · Alertmanager · Linux · Docker</p>
              <ul className="project-bullets">
                <li>Designed and configured infrastructure monitoring pipelines using Prometheus</li>
                <li>Built Grafana dashboards for real-time visibility of server and container metrics</li>
                <li>Set up Alertmanager rules for proactive incident detection and notification</li>
                <li>Reduced mean time to detection (MTTD) for production incidents through improved observability</li>
              </ul>
            </article>
            <article>
              <h3>Automated Backup & Disaster Recovery System</h3>
              <p className="project-stack">Linux · Bash · PostgreSQL · Cron</p>
              <ul className="project-bullets">
                <li>Automated scheduled PostgreSQL database backups using Bash scripts and cron jobs</li>
                <li>Implemented backup retention policies and structured archive management</li>
                <li>Developed scripts for log rotation, cleanup automation, and operational maintenance</li>
                <li>Tested and documented recovery procedures to ensure RTO and RPO targets were met</li>
              </ul>
            </article>
            <article>
              <h3>RESTful Backend API Platform</h3>
              <p className="project-stack">Node.js · Express.js · PostgreSQL · Docker · JWT</p>
              <ul className="project-bullets">
                <li>Built scalable RESTful backend services with Node.js and Express.js for web applications</li>
                <li>Designed relational database schemas in PostgreSQL with indexing and query optimization</li>
                <li>Implemented secure JWT-based authentication and role-based access control</li>
                <li>Containerized backend services with Docker for consistent dev and production environments</li>
              </ul>
            </article>
            <article>
              <h3>AutoFlow GitHub Actions Dashboard</h3>
              <p className="project-stack">GitHub Actions · React · Node.js</p>
              <ul className="project-bullets">
                <li>Built a developer-focused dashboard to monitor workflows and trigger pipeline dispatches</li>
                <li>Managed reusable YAML template generation for faster CI/CD setup</li>
              </ul>
              <div className="project-links">
                <a href="https://github.com/Gitasadhubs/autoflow-pakaims-final-year-project-" target="_blank" rel="noopener">Code</a>
                <a href="https://autoflow-pakaims-final-year-project-pi.vercel.app/" target="_blank" rel="noopener">Live Demo</a>
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="certifications">
          <h2>Certifications</h2>
          <div className="grid cards-2">
            <article className="card cert-card">
              <h3><i className="bx bxl-docker"></i>Docker Certified Associate</h3>
              <p>Containerization and Docker ecosystem fundamentals. Corvit Lahore (2025).</p>
              <div className="cert-badges">
                <span className="badge"><i className="bx bxl-docker"></i>Docker</span>
                <span className="badge"><i className="bx bx-medal"></i>DCA</span>
              </div>
            </article>
            <article className="card cert-card">
              <h3><i className="bx bxl-microsoft"></i>Microsoft AZ-400</h3>
              <p>Designing and Implementing Microsoft DevOps Solutions.</p>
              <div className="cert-badges">
                <span className="badge"><i className="bx bx-git-branch"></i>DevOps</span>
                <span className="badge"><i className="bx bx-award"></i>AZ-400</span>
              </div>
            </article>
            <article className="card cert-card">
              <h3><i className="bx bx-line-chart"></i>LFEL1014 — Scaling Cloud-Native Apps</h3>
              <p>Scaling cloud-native workloads with KEDA.</p>
              <div className="cert-badges">
                <span className="badge"><i className="bx bx-server"></i>KEDA</span>
                <span className="badge"><i className="bx bx-cloud"></i>Cloud-Native</span>
              </div>
            </article>
            <article className="card cert-card">
              <h3><i className="bx bxl-aws"></i>AWS Application Migration Service</h3>
              <p>AWS MGN — cloud migration service fundamentals.</p>
              <div className="cert-badges">
                <span className="badge"><i className="bx bx-transfer-alt"></i>Migration</span>
                <span className="badge"><i className="bx bx-check-shield"></i>AWS</span>
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="education">
          <h2>Education</h2>
          <div className="grid cards-2">
            <article className="card">
              <h3>BS Computer Science</h3>
              <p>Pak AIMS / Institute of Management Sciences</p>
              <p>2022 – 2026</p>
            </article>
            <article className="card">
              <h3>Intermediate in Computer Science</h3>
              <p>Aspire College Township</p>
              <p>2018 – 2021</p>
            </article>
          </div>
        </section>

        <section className="section contact" id="contact">
          <h2>Contact</h2>
          <p>Open to DevOps & SRE roles focused on CI/CD automation, cloud infrastructure, Kubernetes, and production reliability.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="mailto:gasadmail@gmail.com">Email Me</a>
            <a className="btn btn-ghost" href="https://linkedin.com/in/asadkhan-dev" target="_blank" rel="noopener">LinkedIn</a>
            <a className="btn btn-ghost" href="https://github.com/gitasadhub" target="_blank" rel="noopener">GitHub</a>
          </div>
        </section>
      </main>
    </>
  );
}
