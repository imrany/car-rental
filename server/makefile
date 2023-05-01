# all: build copy 
# .DEFAULT_GOAL:=build
.PHONY: copy build
# variable
B= npm

build: 
	@echo 'building app...'
	rm -rf ./build&&npx tsc

clean:
	@echo 'removing build dir..'
	rm -rf ./build

dev:
	@echo 'starting dev server'
	${B} run dev

copy:
	@echo 'copying views to build dir...'
	cp -r src/views ./build