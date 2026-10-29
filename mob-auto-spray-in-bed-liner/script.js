'use strict';
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
// GHL will supply its own validation and submission behavior when embedded.
// No lead is collected or success event emitted by the preview quote panel.
