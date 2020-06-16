---
layout: page
permalink: /painting
---
<p>
<div class="slides">
{% for item in site.data.artifacts.paintings %}
    <div class="slide">
      <a id="{{ item.title | uri_escape }}">
        <img loading="lazy" src="{{ item.url | relative_url }}" alt="{{ item.title }}" />
        <p class="image-title">
          {{ item.title }}<br/>{{ item.medium }}<br/>{{ item.year }}
        </p>
      </a>
    </div>
{% endfor %}
</div>
</p>
