---
# FRONT MATTER: YAML configuration for this page
# This section is processed by Eleventy before the content

# layout: main.njk              # Use the base.njk layout template
title: "index"  # Page title (used in <title> tag)
layout: base.njk
# You can add more data here:
# description: "My awesome website"
# tags: ["home", "featured"]
# date: 2024-01-01
---

<!-- MARKDOWN CONTENT: This gets processed and inserted into {{ content }} -->
<!-- Markdown is converted to HTML, then injected into the layout -->

<div class="profile-section">
    <div class="profile-content">
        <h1>Zhengxi Li</h1>
        <p class="title">Undergraduate Student in Artificial Intelligence</p>
        <p class="affiliation">MBZUAI</p>
        
        <div class="bio">
            <p>
                I am a undergraduate student interested in computer science and mathematics. 
                I always keep open to explore broad range of topics. 
                Currently, I am particularly interested in computer vision, natural language processing, and their 
                applications in real-world problems.
            </p>
        </div>
        
        <div class="contact-links">
            <a href="zhengxi.li@mbzuai.ac.ae">Email</a>
            <a href="https://github.com/Lizhengxi25">GitHub</a>
            <a href="/cv.pdf">CV</a>
        </div>
    </div>
    
    <div class="profile-image">
        <img src="./images/portrait.jpg" alt="Zhengxi Li">
    </div>
</div>

<div class="research-interests">
    <h3>Potential Research Interests</h2>
    <ul>
        <li>Machine Learning</li>
        <li>Natural Language Processing</li>
        <li>Computer Vision</li>
        <li>Deep Learning</li>
    </ul>
</div>
