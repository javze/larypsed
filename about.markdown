---
layout: page
permalink: /about
---
born 1980, burgas, bulgaria  
ba, vuw, new zealand  
lives and works in sofia, bulgaria  

# activities
{% for item in site.data.about.activities %}
{% include yearlist.html year=item.year descr=item.descr %}
{% endfor %}

# selected exhibitions
{% for item in site.data.about.exhibitions %}
{% include yearlist.html year=item.year descr=item.descr %}
{% endfor %}
