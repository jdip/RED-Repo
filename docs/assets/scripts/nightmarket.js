---
    layout: null
---
var items = [
{% assign grouped_items = site.data.items | group_by: "group" | sort: "name" %}
{% for group in grouped_items %}
    {% assign items = group.items | sort : "name" %}
    {% for item in items %}
        {
        name: "{{item.name}}",
        quality: "{{item.quality}}",
        type: "{{item.type}}",
        price: "{{item.price}}",
        value: "{{item.value}}",
        page: "{{item.page}}",
        },
{% endfor %}
{% endfor %}
];
