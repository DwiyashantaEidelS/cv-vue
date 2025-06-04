<script setup>
import foto from '@/assets/foto.jpg';  
</script>

<template>
  <div class="cv-wrapper">
    <main class="main-content">

      <!-- Konten sidebar -->
      <div class="profile-header">
        <img :src="foto" alt="Foto Profil Dwiyashanta Eidel Safira" class="profile-photo" />
        <h1 class="name">Dwiyashanta Eidel Safira</h1>
        <p class="location">Malang, Indonesia</p>
        <p class="contact">085815542319 | dwiyashanta10@gmail.com</p>
        <p class="links">
          <a href="https://www.linkedin.com/in/dwiyashanta" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
          <a href="https://drive.google.com/file/d/11afmr9rYeZUmCipHM64iZ_h_nwRQ8vr4/view?usp=sharing" target="_blank" rel="noopener noreferrer">Portofolio</a>
        </p>
      </div>

      <!-- Konten lain -->
      <section>
        <h2>Profile</h2>
        <p>
          A fifth-semester student majoring in Information Technology at Universitas Brawijaya, passionate about design and web development. Specializing in UI/UX, product design, and front-end development. Skilled in creating intuitive, user-centered designs and eager to contribute to impactful digital projects.
        </p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li><strong>Technical Skills:</strong> HTML, CSS, Figma, Canva, Microsoft Office, Google Workspace</li>
          <li><strong>Soft Skills:</strong> Communication, Teamwork, Problem Solving, Attention to Detail</li>
        </ul>
      </section>

      <section>
        <h2>Education</h2>
        <ul>
          <li><strong>Universitas Brawijaya</strong> (2022 - Present) – Bachelor's program in Information Technology within the Faculty of Computer Science.</li>
          <li><strong>SMAN 2 Kediri</strong> (2019 – 2022) – Majoring in Mathematics and Sciences.</li>
        </ul>
      </section>
    </main>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html, #app {
  height: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f0f2f5;
  color: #222;
  font-size: 14px;
}

.cv-wrapper {
  width: 100%;
  max-width: 2000px; 
  margin: 0 auto; /* center */
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08);
}


.profile-header {
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #0b3954;
}

.profile-photo {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.name {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.3rem;
  color: #0b3954;
}

.location,
.contact,
.links {
  font-size: 0.85rem;
  color: #555;
  margin-bottom: 0.3rem;
}

.links a {
  color: #0b3954;
  text-decoration: none;
  font-weight: 600;
}

.links a:hover {
  text-decoration: underline;
}

.main-content section {
  margin-bottom: 2rem;
}

.main-content h2 {
  font-size: 1.3rem;
  color: #0b3954;
  margin-bottom: 0.6rem;
  border-bottom: 2px solid #0b3954;
  padding-bottom: 0.3rem;
}

.main-content p,
.main-content ul {
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
}

.main-content ul {
  padding-left: 1.4rem;
}

.main-content ul li {
  margin-bottom: 0.4rem;
}

@media print {
  body {
    background: white;
  }
  .cv-wrapper {
    box-shadow: none;
    margin: 0;
    border-radius: 0;
    width: auto;
    max-width: none;
    padding: 0;
  }
}

@media (max-width: 480px) {
  .cv-wrapper {
    padding: 1rem;
  }
}
</style>
