let body = JSON.parse($response.body)
let pro = body["mobileProfile"];
pro["profileStatus"] = "PROFILE_AVAILABLE";
pro["legacyProfile"] = "{}";
pro["relationshipProfile"] = "[]";
$done({
  body: JSON.stringify(body)
});
