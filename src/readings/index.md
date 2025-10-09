---
title: "Readings"
layout: "base.njk"
permalink: "/readings/"
tags: ["null"]
---

# Reading notes

Reading has always been one of my greatest passions. I especially enjoy Chinese martial arts novels and Western classics. I’m also a big movie enthusiast, especially of Chinese films from mainland China and Hong Kong.

(Different from computer science and mathematics fields where I write blogs in English, as it is the common communicative language, I will prioritize comfortness in writing reading notes)

Currently, I feel comfortable and confident in having written, being writing and being going to write reading notes on:
 - Jin Yong's martial arts novel series
 - Jin Yucheng's _Blossoms Shanghai_ (also TV series produced by Wong Kar-wai).

<div class="blog-list">
{% for post in collections.rd %}
  <article class="blog-post-preview">
    <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
    <time datetime="{{ post.date | dateISO }}">{{ post.date | dateReadable }}</time>
    {% if post.data.excerpt %}
      <p>{{ post.data.excerpt }}</p>
    {% endif %}
    <a href="{{ post.url }}" class="read-more">Read more →</a>
  </article>
{% endfor %}
</div>