install:
	yarn
build:
	ansible-playbook cm/site.yml -i 'localhost, ' -c local -vv
start:
	node server.js
