# GameServerTracker-Tracker

<p align="center">A tracker to monitor the number of players connected to Minecraft / Source (Gmod, CS, CSGO) / FiveM servers</p>

![alt text](https://cdn.discordapp.com/attachments/1076176691170394113/1081905800622129213/image.png)

## Description

This TypeScript script retrieves the number of players connected to a game server specified in the configuration file. The results are stored in a PostgreSQL database and displayed on a Grafana dashboard.

This API was inspired by the Lametric Clock app project : [GameServerTracker-LametricApp](https://github.com/BliTz037/GameServerTracker-LametricApp)

## Available Servers
- Minecraft Java Edition
- Source (All servers using the Source game engine like : Half-Life, Counter-Strike, Team Fortress 2, GMod, etc)
- FiveM / RedM (ONLY By Address)

## Installation

### Requires
- Docker & Docker-compose
- NodeJS
- Pm2 JOB or Screen (recommended)

### Setup

#### Clone project
```bash
$ git clone https://github.com/Sterwim0ff/GameServerTracker-Tracker.git
$ cd GameServerTracker-Tracker/
```

#### Install script's dependencies
```bash
$ npm install
OR
$ yarn install
```

#### Setup .env
- You will need a MySQL or MariaDB database 

The environement variable required

```env
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=root
MYSQL_DB=server

#LOGIN FOR GRAFANA
GF_SECURITY_ADMIN_USER=admin
GF_SECURITY_ADMIN_PASSWORD=admin
```

#### Add server to tracker

- Open file `serverList.ts`

You will see a variable named : **serverList** with some examples
```TS
const serverList: IServer[] = [
    {
        name: "Hypixel",
        type: ServerType.Minecraft,
        address: "mc.hypixel.net"
    },
    {
        name: "Minemen",
        type: ServerType.Minecraft,
        address: "eu.minemen.club"
    }
]
```

- Delete the content of array, and add your server

## Running

#### Running Grafana & Database

```bash
$ docker-compose up
OR (To make it work in the backspace)
$ docker-compose up -d
```

#### Build the script
```bash
$ npx tsc
```

#### Running the script
```bash
$ node dist/src/index.js
```

#### Running the script with pm2
```bash
$ pm2 start dist/src/index.js --name GameServerTracker
```

## Credit

- Author - [BliTz_37 - A guy from Tek](https://github.com/BliTz037/) Modified by Sterwim
