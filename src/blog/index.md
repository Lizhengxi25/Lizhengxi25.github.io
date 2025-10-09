---
title: "Blog"
layout: "base.njk"
permalink: "/blog/"
tags: ["null"]
---

# Blog

_In my younger and more vulnerable years my mentor gave me some advice that I've been turning over in my mind ever since._

_"In research," he told me, "taste is everything. Your work should set the standard—become the paradigm others follow. Hold that confidence, that ambition, regardless of where you stand today."_

_Half a year into writing this blog, I have yet to pen a single article about computer science proper—just a few of competitive programming tutorials. The truth is, I simply haven't produced any investigation worth turning into an article. Today's piece, "On the Recursion of Lambda Expressions," stems from a small investigation I'm quite pleased with. It embodies taste in two dimensions: the elegance of a one-liner reflects the aesthetic of simplicity; the subtleties of language fundamentals reflect depth of understanding. This is not a discovery from zero to one, but rather an investigation conducted with care and effort._

These were the words I wrote when I began my very first computer science blog. I hope the following posts can serve as paradigms of thoughtful CS blogging and, in some way, inspire my readers — rather than merely function as course notes.

<div class="blog-list">
{% for post in collections.posts %}
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