"use strict";

/**
 * This script parses a json file returned from https://cloudbuild.googleapis.com/v1/projects/${PROJECT_ID}/triggers
 * identifies a trigger by name (called "description" property in trigger json object though), and outputs (to files)
 * the trigger's uuid and a trigger template object that contains trigger parameters (such as repo name and branch name)
 * as they are configured in the actual trigger, to be used to actually run the trigger in a later build step.
 */

var trigger_name = (process.argv.length > 2) ? process.argv[2] : 'keep-ahope-gcp-trigger';
var json_file_name = (process.argv.length > 3) ? process.argv[3] : 'triggers_file.json';
var trigger_id_file = (process.argv.length > 4) ? process.argv[4] : 'trigger_id_file';
var trigger_template_json_file_name = (process.argv.length > 5) ? process.argv[5] : 'trigger_template.json';

var fs = require('fs');
var triggers = JSON.parse(fs.readFileSync(json_file_name, 'utf8'));

const trigger_found = triggers.triggers.filter(x => x.description === trigger_name);

if (trigger_found && trigger_found.length > 0) {
  console.log(`Trigger "${trigger_name}" is found:`);
  console.log(JSON.stringify(trigger_found[0]));
  fs.writeFileSync(trigger_template_json_file_name, JSON.stringify(trigger_found[0].triggerTemplate));
  fs.writeFileSync(trigger_id_file, trigger_found[0].id);
} else {
  console.error(`Trigger named ${trigger_name} could not be found.`);
  process.exit(-1);
}
