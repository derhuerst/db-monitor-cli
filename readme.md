# db-monitor-cli 🔭

**Command line tool to fetch departures at DB stations.** Wrapper around [`db-monitor`](https://github.com/derhuerst/db-monitor).

[![npm version](https://img.shields.io/npm/v/db-monitor-cli.svg)](https://www.npmjs.com/package/db-monitor-cli)
[![build status](https://img.shields.io/travis/derhuerst/db-monitor-cli.svg)](https://travis-ci.org/derhuerst/db-monitor-cli)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/db-monitor-cli.svg)
[![gitter channel](https://badges.gitter.im/derhuerst/vbb-rest.svg)](https://gitter.im/derhuerst/vbb-rest)


## Installing

```shell
npm install db-monitor-cli
```


## Usage

```shell
monitor [--interval milliseconds] station-id [...]
```

Writes [ndjson](http://ndjson.org/) in [the format of `db-monitor`](https://github.com/derhuerst/db-monitor) to stdout.


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/db-monitor-cli/issues).
