#!/bin/bash
prove -m -a /archive.tgz --exec 'nodeunit --reporter tap' --ext .js -r -v t
