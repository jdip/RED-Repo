---
    layout: null
---

export default [
    {% assign grouped_items = site.data.items | group_by: "group" | sort: "name" %}
{% for group in grouped_items %}
{% assign items = group.items | sort : "name" %}
{% for item in items %}
{
    name: "{{item.name | xml_escape}}",
    quality: "{{item.quality}}",
    type: "{{item.type}}",
    price: "{{item.price}}",
    value: "{{item.value}}",
    {% if item.primary %}primary: [{% for effect in item.primary%}"{{effect | xml_escape}}"{% if forloop.last == false%}, {% endif %}{% endfor %}],{% endif %}
    {% if item.secondary %}secondary: [{% for effect in item.secondary%}"{{effect | xml_escape}}"{% if forloop.last == false%}, {% endif %}{% endfor %}],{% endif %}
    page: "{{item.page}}",
}{% if forloop.last == false %},{% endif %}{% endfor %}{% if forloop.last == false %},{% endif %}
{% endfor %}
];
