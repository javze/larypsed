---
layout: page
permalink: /about
---
born 1980, burgas, bulgaria  
ba, vuw, new zealand  
lives and works in sofia, bulgaria  

# activities
{% assign last_year = "" %}
{% include yearlist.html list=site.data.about.activities %}

# selected exhibitions
{% include yearlist.html list=site.data.about.exhibitions %}
