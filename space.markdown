---
layout: gallery
permalink: /space
---
<p>
<div class="slides">
{% for item in site.data.artifacts.space %}
    <div id="{{ item.title | uri_escape }}" class="slide">
        <img loading="lazy" src="{{ item.url | relative_url }}" alt="{{ item.title }}" />
        <p class="image-title">
          {{ item.title | markdownify | remove: '<p>' | remove: '</p>' }}
        </p>
    </div>
{% endfor %}
</div>
</p>
