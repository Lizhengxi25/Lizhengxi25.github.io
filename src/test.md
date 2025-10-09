---
layout: article.njk
title: "My First Blog Post"
date: 2025-09-17
author: "John Doe"
---

# Introduction

Welcome to my first blog post! This post will show you how to write **Markdown content** that uses the `article.njk` layout.

## What You'll Learn

In this post, we'll cover:

1. **Frontmatter configuration** - How to set up your post metadata
2. **Markdown syntax** - Writing beautiful content
3. **Math formulas** - Using LaTeX in your posts
4. **Code examples** - Syntax highlighting

## Writing Content

You can write regular **Markdown** here with *italic* and **bold** text.

### Code Examples

Here's some JavaScript code:
```javascript
// Get all posts with 'featured' tag
eleventyConfig.addCollection("featured", function(collections) {
    return collections.getFilteredByTag("posts").filter(post => {
        return post.data.featured === true;
    });
});
```