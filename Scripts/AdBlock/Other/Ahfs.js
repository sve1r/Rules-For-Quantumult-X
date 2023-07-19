var body = $response.body.replace(
  /<head>/,
  '<head><style>.top, .bottum, .sidebar-column, .m-menubar, .google-auto-placed, #rizhuti_v2_module_division-2, #related_posts, .post-note, .entry-share, .related-posts, #comments, #ad_position_box{display:none!important} </style>'
);
$done({ body });
