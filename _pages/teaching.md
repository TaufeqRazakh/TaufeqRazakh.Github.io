---
layout: page
permalink: /teaching/
title: teaching
description: Evaluations and webpages for classes I was a teaching assistant.
nav: true
nav_order: 2
display_categories: [usc]
---

<div class="projects">
	<!-- Display categorized courses -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">@{{ category | upcase }}</h2>
  </a>
  {% assign categorized_sorted_courses = site.courses | where: "categories", category | reverse%}
  {% include courses.liquid%}
  {% endfor %}
</div>
