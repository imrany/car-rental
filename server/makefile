all: build copy 
# .DEFAULT_GOAL:=build
# .PHONY: build copy 
# variable
B= npm

build: 
	@echo 'building app...'
	rm -rf ./public&&npx tsc

clean:
	@echo 'removing build dir..'
	rm -rf ./public

dev:
	@echo 'starting dev server'
	${B} run dev

copy:
	@echo 'copying views to build dir...'
	cp -r ./views ./public