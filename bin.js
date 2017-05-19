#!/usr/bin/env node
'use strict'

const minimist = require('minimist')
const monitor = require('db-monitor')
const ndjson = require('ndjson')

const argv = minimist(process.argv.slice(2))

if (argv.help || argv.h) {
	process.stdout.write(`
Usage:
    db-monitor [--interval milliseconds] station-id [...]

Options:
    --interval <ms>   How often to query for each station.

Examples:
    db-monitor 8011167
    db-monitor --interval 5000 8011167 8002553
\n`)
	process.exit(0)
}

let interval = argv.interval || argv.i || null
if (interval) {
	interval = parseInt(interval)
	if (Number.isNaN(interval)) {
		process.stdout.write('--interval must be a number.')
		process.exit(1)
	}
}

const stations = argv._.map((id) => id + '')
if (stations.length === 0) {
	process.stdout.write('One or more station IDs must be given.')
	process.exit(1)
}

const src = monitor(stations, interval)
src
.pipe(ndjson.stringify())
.pipe(process.stdout)

process.on('SIGINT', () => {
	src.stop()
})
