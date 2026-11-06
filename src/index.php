<?php

// PHP runs first: Exura answers ?/rune as JSON, any other request gets the page
if (!class_exists('Exura')) {
  require __DIR__ . '/exura/exura.php';
}

// ExuraPHP: GET index.php?/rune
Exura::module('GET', 'rune', function() {
  return [
    'data'=> [
      'message'=> 'Answered by ExuraPHP at ' . date('H:i:s'),
    ],
  ];
});

$year = date('Y');
