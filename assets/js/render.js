// Builds the page from window.SITE (see content.js). You shouldn't need to edit this file.
(function () {
  var S = window.SITE;
  if (!S) return;

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text) n.textContent = text;
    return n;
  }
  function visible(list) {
    return (list || []).filter(function (x) { return x && !x.hidden; });
  }
  function link(href, text) {
    var a = el("a", null, text);
    a.href = href;
    if (/^https?:/.test(href)) { a.target = "_blank"; a.rel = "noopener"; }
    return a;
  }

  // Simple text bindings
  document.querySelectorAll("[data-bind]").forEach(function (n) {
    var v = S[n.getAttribute("data-bind")];
    if (v) n.textContent = v;
  });

  // About paragraphs
  var about = document.getElementById("about");
  if ((S.about || []).length) about.innerHTML = "";
  (S.about || []).forEach(function (p) { about.appendChild(el("p", null, p)); });

  // Links
  var L = S.links || {};
  ["linkedin-hero", "linkedin-contact", "linkedin-footer"].forEach(function (id) {
    var a = document.getElementById(id);
    if (a && L.linkedin) { a.href = L.linkedin; a.target = "_blank"; a.rel = "noopener"; }
  });
  var gh = document.getElementById("github-footer");
  if (gh) { if (L.github) { gh.href = L.github; gh.target = "_blank"; gh.rel = "noopener"; } else gh.remove(); }

  // Work entries (used for Selected work and Current projects)
  function renderEntries(listId, items) {
    var box = document.getElementById(listId);
    visible(items).forEach(function (p) {
      var art = el("article", "project");
      var meta = el("div", "project-meta");
      if (p.years) meta.appendChild(el("p", "years", p.years));
      if (p.role) meta.appendChild(el("p", "role", p.role));
      if (p.org) meta.appendChild(el("p", "org", p.org));

      var main = el("div", "project-main");
      main.appendChild(el("h3", null, p.title));
      if (p.summary) main.appendChild(el("p", "summary", p.summary));
      if (p.image && p.image.src) {
        var fig = el("figure", "project-image");
        var im = el("img");
        im.src = p.image.src; im.alt = p.image.alt || ""; im.loading = "lazy";
        fig.appendChild(im);
        if (p.image.caption) fig.appendChild(el("figcaption", null, p.image.caption));
        main.appendChild(fig);
      }
      if (p.details && p.details.length) {
        var ul = el("ul", "details");
        p.details.forEach(function (d) { ul.appendChild(el("li", null, d)); });
        main.appendChild(ul);
      }
      var links = (p.links || []).concat(p.link ? [p.link] : []);
      if (p.outcome || links.length) {
        var out = el("div", "outcome");
        if (p.outcome) out.appendChild(el("p", null, p.outcome));
        if (links.length) {
          var lp = el("p", "outcome-link");
          links.forEach(function (l) { if (l && l.url) lp.appendChild(link(l.url, l.label || "Learn more")); });
          out.appendChild(lp);
        }
        main.appendChild(out);
      }
      if (p.tags && p.tags.length) {
        var tags = el("ul", "tags");
        tags.setAttribute("aria-label", "Skills used");
        p.tags.forEach(function (t) { tags.appendChild(el("li", null, t)); });
        main.appendChild(tags);
      }
      art.appendChild(meta);
      art.appendChild(main);
      box.appendChild(art);
    });
  }
  renderEntries("work-list", S.work);
  if (visible(S.currentProjects).length) {
    renderEntries("current-list", S.currentProjects);
    document.getElementById("current").hidden = false;
  }

  // Experience timeline
  var xl = document.getElementById("experience-list");
  visible(S.experience).forEach(function (x) {
    var li = el("li", "job");
    var head = el("div", "job-head");
    head.appendChild(el("h3", null, x.title));
    head.appendChild(el("p", "years", x.years));
    li.appendChild(head);
    li.appendChild(el("p", "org", x.org));
    if (x.points && x.points.length) {
      var ul = el("ul", "details");
      x.points.forEach(function (d) { ul.appendChild(el("li", null, d)); });
      li.appendChild(ul);
    }
    xl.appendChild(li);
  });

  // Teaching
  var tl = document.getElementById("leadership-list");
  visible(S.leadership).forEach(function (t) {
    var d = el("div", "teach");
    d.appendChild(el("h4", null, t.title));
    d.appendChild(el("p", "org", t.org + (t.years ? ", " + t.years : "")));
    if (t.text) d.appendChild(el("p", null, t.text));
    tl.appendChild(d);
  });

  // Publications
  var pub = document.getElementById("publication-list");
  visible(S.publications).forEach(function (p) {
    var li = el("li");
    li.appendChild(el("span", null, p.text + " "));
    if (p.url) li.appendChild(link(p.url, "View"));
    pub.appendChild(li);
  });
  var talks = document.getElementById("presentation-list");
  visible(S.presentations).forEach(function (t) {
    var li = el("li");
    li.appendChild(el("span", "talk-year", t.year));
    var body = el("div");
    body.appendChild(el("p", "talk-title", t.text));
    var where = el("p", "talk-where", t.where + (t.url ? " " : ""));
    if (t.url) where.appendChild(link(t.url, "View"));
    body.appendChild(where);
    li.appendChild(body);
    talks.appendChild(li);
  });

  // Awards & certifications
  function fillList(id, items) {
    var ul = document.getElementById(id);
    visible(items).forEach(function (a) {
      var li = el("li");
      var body = el("div");
      body.appendChild(el("p", "item-title", a.title));
      if (a.org) body.appendChild(el("p", "item-org", a.org));
      li.appendChild(body);
      li.appendChild(el("span", "item-year", a.year));
      ul.appendChild(li);
    });
  }
  fillList("award-list", S.awards);
  fillList("cert-list", S.certifications);

  // Education
  var ed = document.getElementById("education-list");
  visible(S.education).forEach(function (e) {
    var d = el("div", "school");
    var head = el("div", "job-head");
    head.appendChild(el("h3", null, e.school));
    head.appendChild(el("p", "years", e.years));
    d.appendChild(head);
    d.appendChild(el("p", "degree", e.degree));
    if (e.notes && e.notes.length) {
      var ul = el("ul", "details");
      e.notes.forEach(function (n) { ul.appendChild(el("li", null, n)); });
      d.appendChild(ul);
    }
    ed.appendChild(d);
  });

  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
