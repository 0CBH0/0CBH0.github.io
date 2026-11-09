(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var filters = document.getElementById('tag-filter');
    if (!filters) return;

    var buttons = Array.prototype.slice.call(filters.querySelectorAll('button'));
    var projects = Array.prototype.slice.call(document.querySelectorAll('.project-item'));
    var count = document.getElementById('project-count');
    var selected = [];

    function render() {
      var visible = 0;
      projects.forEach(function (project) {
        var tags = JSON.parse(project.getAttribute('data-tags'));
        var matches = selected.length === 0 || selected.some(function (tag) {
          return tags.indexOf(tag) !== -1;
        });
        project.hidden = !matches;
        if (matches) visible += 1;
      });
      buttons.forEach(function (button) {
        var tag = button.getAttribute('data-tag');
        var active = tag ? selected.indexOf(tag) !== -1 : selected.length === 0;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
      });
      count.textContent = visible + (visible === 1 ? ' project' : ' projects');
    }

    filters.addEventListener('click', function (event) {
      var button = event.target.closest('button');
      if (!button || !filters.contains(button)) return;
      var tag = button.getAttribute('data-tag');
      if (!tag) {
        selected = [];
      } else {
        var index = selected.indexOf(tag);
        if (index === -1) selected.push(tag);
        else selected.splice(index, 1);
      }
      render();
    });
  });
}());
