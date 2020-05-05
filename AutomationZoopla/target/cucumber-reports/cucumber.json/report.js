$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/FindProperty.feature");
formatter.feature({
  "line": 1,
  "name": "Findout thard property.",
  "description": "",
  "id": "findout-thard-property.",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "User can search the thard number property.",
  "description": "",
  "id": "findout-thard-property.;user-can-search-the-thard-number-property.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "User open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "enter application url - https://www.zoopla.com.uk/",
  "keyword": "And "
});
formatter.step({
  "line": 5,
  "name": "User click on login button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enter valid credential",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "submit login button.",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Varifi application title.",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enter loction New York , Lincolnhire.",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user click suerch button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User check all the price values.",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "User need to select thard property in the list.",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Thard property  agent name \u0026 phone number varify.",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User click logout button \u0026 go to zoopla home page.",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User close the browser",
  "keyword": "When "
});
formatter.match({
  "location": "Zooplastep.user_open_browser()"
});
formatter.result({
  "duration": 2426022818,
  "status": "passed"
});
formatter.match({
  "location": "Zooplastep.enter_application_url_https_www_zoopla_com_uk()"
});
formatter.result({
  "duration": 3174222158,
  "status": "passed"
});
formatter.match({
  "location": "Zooplastep.user_click_on_login_button()"
});
formatter.result({
  "duration": 333688999,
  "status": "passed"
});
formatter.match({
  "location": "Zooplastep.user_enter_valid_credential()"
});
formatter.result({
  "duration": 1074776037,
  "status": "passed"
});
formatter.match({
  "location": "Zooplastep.submit_login_button()"
});
formatter.result({
  "duration": 1250027012,
  "status": "passed"
});
formatter.match({
  "location": "Zooplastep.varifi_application_title()"
});
formatter.result({
  "duration": 10798027,
  "status": "passed"
});
formatter.match({
  "location": "Zooplastep.user_enter_loction_New_York_Lincolnhire()"
});
formatter.result({
  "duration": 479622271,
  "status": "passed"
});
formatter.match({
  "location": "Zooplastep.user_click_suerch_button()"
});
formatter.result({
  "duration": 871589328,
  "status": "passed"
});
formatter.match({
  "location": "Zooplastep.user_check_all_the_price_values()"
});
formatter.result({
  "duration": 4349132105,
  "status": "passed"
});
formatter.match({
  "location": "Zooplastep.user_need_to_select_thard_property_in_the_list()"
});
formatter.result({
  "duration": 741480483,
  "status": "passed"
});
formatter.match({
  "location": "Zooplastep.thard_property_agent_name_phone_number_varify()"
});
formatter.result({
  "duration": 681608480,
  "status": "passed"
});
formatter.match({
  "location": "Zooplastep.user_click_logout_button_go_to_zoopla_home_page()"
});
formatter.result({
  "duration": 2889913887,
  "status": "passed"
});
formatter.match({
  "location": "Zooplastep.user_close_the_browser()"
});
formatter.result({
  "duration": 103474716,
  "status": "passed"
});
});