const spacefinder = {
    map: null,
    currentLoc: {'lat': 52.205575, 'lng': 0.121682},
    personLoc: {'lat': 52.205575, 'lng': 0.121682},
    personMarker: null,
    personWatcher: false,
    geoActive: false,
    infoWindow: null,
    startZoom: 16,
    watchID: false,
    permission: false,
    mapLoaded: false,
    spacesLoaded: false,
    mapBounds: null,
    spacesurl: '{{ site.url }}{{ site.baseurl }}/spaces.json',
    imageBaseURL: '{{ site.url }}{{ site.baseurl }}assets/photos/',
    spaces: [],
    filterEvent: new Event('viewfilter', {
        bubbles: true,
        cancelable: true,
        composed: false,
    })
};
spacefinder.filters = {
{%- for filter in site.data.filters -%}
    {%- for option in filter.options -%}
    '{{ filter.key }}_{{ option.key }}':'{{option.label }}'{% if forloop.last != true %},{% endif %}
    {%- endfor -%}{% if forloop.last != true %},{% endif %}
{%- endfor -%}
};
spacefinder.icons = {
{%- for filter in site.data.filters -%}
    {%- if filter.key == 'facility' -%}
        {%- for option in filter.options -%}
            {%- if option.icon -%}
    '{{ option.key }}':'{{option.icon }}'{% if forloop.last != true %},{% endif %}
            {%- endif -%}
        {%- endfor -%}
    {%- endif -%}
{%- endfor -%}
};
    

