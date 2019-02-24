# computer-database-js

Maybe be present some flaws in preconditions/run/reports. Don't judge me :)

###for WIN users
* switch to **win_branch**
* or manually change in *nightwatch.json* server_path to 
`"server_path": "node_modules\\.bin\\chromedriver.cmd"`

##pre conditions/setup
`npm install --save-dev`

## Run
`nightwatch`

##Reports
will be automatically opened after tests run

or you can opened them with ``nightwatch-html-reporter -d tests_output``