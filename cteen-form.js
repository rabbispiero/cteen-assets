/* CTeen Movie Night form behaviors: FAQ tap-to-open + live donation total.
   Runs only on the two Movie Night form pages; inert everywhere else. */
(function () {
  if (location.pathname.indexOf("7606979") < 0 && location.pathname.indexOf("7606193") < 0) return;
  function init() {
    var qa = document.querySelector(".mn-qa");
    if (qa) {
      qa.classList.add("mn-js");
      var items = qa.querySelectorAll(".mn-item");
      for (var i = 0; i < items.length; i++) {
        items[i].addEventListener("click", function () { this.classList.toggle("open"); });
      }
    }
    function updateTotal() {
      var v = 0;
      var l = document.getElementById("id_17");
      if (l) {
        var r = l.querySelector("input.form-radio:not(.form-radio-other):checked");
        if (r) {
          v = parseFloat(r.value) || 0;
        } else {
          var or = l.querySelector(".form-radio-other:checked");
          var o = l.querySelector(".form-radio-other-input");
          if (or && o) { v = parseFloat(o.value) || 0; }
        }
      }
      var el = document.getElementById("mn-total-val");
      if (el) el.textContent = "$" + v;
    }
    document.addEventListener("change", updateTotal);
    document.addEventListener("input", updateTotal);
    updateTotal();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
