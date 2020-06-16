---
layout: page
permalink: /painting
---
<p>
<div class="slides">
{% for item in site.data.artifacts.paintings %}
    <div id="{{ item.title | uri_escape }}" class="slide" tabindex="{% increment ti %}">
        <img loading="lazy" src="{{ item.url | relative_url }}" alt="{{ item.title }}" />
        <p class="image-title">
          {{ item.title }}<br/>{{ item.medium }}<br/>{{ item.year }}
        </p>
    </div>
{% endfor %}
</div>
</p>
