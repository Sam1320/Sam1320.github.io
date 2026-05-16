---
layout: default
title: Sam Rodríguez - Posts
description: Posts by Sam Rodriguez
---

# Posts

<ul class="post-list">
{% for post in site.posts %}
    <li class="post-list-item">
        <a href="{{ post.url }}" class="post-list-link">{{ post.title }}</a>
    </li>
{% endfor %}
</ul>
