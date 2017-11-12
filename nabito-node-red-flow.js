[
    {
        "id": "9142b200.b7019",
        "type": "tab",
        "label": "Flow 1"
    },
    {
        "id": "d446d785.d09ea8",
        "type": "mqtt out",
        "z": "9142b200.b7019",
        "name": "",
        "topic": "user/1/random00MQTTid/1/cpu_temp",
        "qos": "",
        "retain": "",
        "broker": "59618f8d.af895",
        "x": 937,
        "y": 50,
        "wires": []
    },
    {
        "id": "c4715a7f.477bd8",
        "type": "mqtt in",
        "z": "9142b200.b7019",
        "name": "control_topic",
        "topic": "user/1/random00MQTTid/1/control",
        "qos": "2",
        "broker": "59618f8d.af895",
        "x": 222,
        "y": 609,
        "wires": [
            [
                "9eb78666.8ead08"
            ]
        ]
    },
    {
        "id": "6a356109.280d1",
        "type": "mqtt out",
        "z": "9142b200.b7019",
        "name": "",
        "topic": "user/1/random00MQTTid/1/load",
        "qos": "",
        "retain": "",
        "broker": "59618f8d.af895",
        "x": 1110,
        "y": 104,
        "wires": []
    },
    {
        "id": "eecbc397.dd9c8",
        "type": "mqtt out",
        "z": "9142b200.b7019",
        "name": "",
        "topic": "user/1/random00MQTTid/1/auth",
        "qos": "",
        "retain": "",
        "broker": "59618f8d.af895",
        "x": 1091,
        "y": 222,
        "wires": []
    },
    {
        "id": "6d4f69d7.1d5cb8",
        "type": "inject",
        "z": "9142b200.b7019",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "20",
        "crontab": "",
        "once": true,
        "x": 174,
        "y": 65,
        "wires": [
            [
                "3dd5601.cbbd1a"
            ]
        ]
    },
    {
        "id": "1c9ef51c.8780db",
        "type": "serial in",
        "z": "9142b200.b7019",
        "name": "USB0",
        "serial": "4f379c28.8b15d4",
        "x": 88,
        "y": 180,
        "wires": [
            [
                "539c4877.ef9268"
            ]
        ]
    },
    {
        "id": "9eb78666.8ead08",
        "type": "switch",
        "z": "9142b200.b7019",
        "name": "control_switch",
        "property": "payload",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "ON",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "OFF",
                "vt": "str"
            }
        ],
        "checkall": "false",
        "outputs": 2,
        "x": 512,
        "y": 609,
        "wires": [
            [
                "c943a5a9.31d238"
            ],
            [
                "6f5966d1.7cf958"
            ]
        ]
    },
    {
        "id": "e535aced.e1579",
        "type": "mqtt out",
        "z": "9142b200.b7019",
        "name": "control_topic",
        "topic": "user/1/random00MQTTid/1/control",
        "qos": "",
        "retain": "",
        "broker": "59618f8d.af895",
        "x": 456,
        "y": 436,
        "wires": []
    },
    {
        "id": "c2a391b3.055eb",
        "type": "inject",
        "z": "9142b200.b7019",
        "name": "control:ON",
        "topic": "user/1/n6ps3ejguswls9om/1/control",
        "payload": "ON",
        "payloadType": "str",
        "repeat": "",
        "crontab": "",
        "once": false,
        "x": 119,
        "y": 407,
        "wires": [
            [
                "e535aced.e1579"
            ]
        ]
    },
    {
        "id": "aeceeb65.b32a18",
        "type": "inject",
        "z": "9142b200.b7019",
        "name": "control:OFF",
        "topic": "user/1/n6ps3ejguswls9om/1/control",
        "payload": "OFF",
        "payloadType": "str",
        "repeat": "",
        "crontab": "",
        "once": false,
        "x": 126,
        "y": 465,
        "wires": [
            [
                "e535aced.e1579"
            ]
        ]
    },
    {
        "id": "73a4233.156f2dc",
        "type": "function",
        "z": "9142b200.b7019",
        "name": "load",
        "func": "msg.topic = 'load';\nvar Irms = msg.payload.LOAD;\nmsg.payload = Irms;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 610,
        "y": 180,
        "wires": [
            [
                "a3f8888a.9a4d38"
            ]
        ]
    },
    {
        "id": "e7c638e8.70fe78",
        "type": "function",
        "z": "9142b200.b7019",
        "name": "relay_status",
        "func": "var relay_status = global.get(\"relay\");\nif (relay_status === \"OFF\") {\n    return null;\n}\nif (relay_status === \"ON\") {\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "x": 410,
        "y": 180,
        "wires": [
            [
                "73a4233.156f2dc"
            ]
        ]
    },
    {
        "id": "c943a5a9.31d238",
        "type": "function",
        "z": "9142b200.b7019",
        "name": "relay_status_on",
        "func": "global.set(\"relay\", \"ON\");\nglobal.set(\"box_status\", \"ACTIVE\");\nmsg.payload = 1;\nreturn msg",
        "outputs": 1,
        "noerr": 0,
        "x": 733,
        "y": 557,
        "wires": [
            [
                "14d91d69.c017b3",
                "59bd64dc.7c63ac"
            ]
        ]
    },
    {
        "id": "6f5966d1.7cf958",
        "type": "function",
        "z": "9142b200.b7019",
        "name": "relay_status_off",
        "func": "global.set(\"relay\", \"OFF\");\nglobal.set(\"box_status\", \"ONLINE\");\nmsg.payload = 0;\nreturn msg",
        "outputs": 1,
        "noerr": 0,
        "x": 749,
        "y": 618,
        "wires": [
            [
                "14d91d69.c017b3",
                "ac79988c.b76768"
            ]
        ]
    },
    {
        "id": "539c4877.ef9268",
        "type": "json",
        "z": "9142b200.b7019",
        "name": "",
        "pretty": false,
        "x": 256,
        "y": 243,
        "wires": [
            [
                "e7c638e8.70fe78",
                "622cd42f.ecfd9c",
                "95a13d1b.f687d"
            ]
        ]
    },
    {
        "id": "622cd42f.ecfd9c",
        "type": "function",
        "z": "9142b200.b7019",
        "name": "NfcTag",
        "func": "if (msg.payload.NFC != null ) {\n  msg.topic = 'user/1/n6ps3ejguswls9om/1/control';\n  var relay_status = global.get(\"relay\");\n  if (relay_status === \"OFF\") {\n      msg.payload = 'ON';\n  }\n  if (relay_status === \"ON\") {\n      msg.payload = 'OFF';\n  }\n  return msg;\n}\nelse {\n    return null;\n}\n\n\n",
        "outputs": 1,
        "noerr": 0,
        "x": 400,
        "y": 320,
        "wires": [
            [
                "41a8ed57.6d1ea4",
                "e535aced.e1579"
            ]
        ]
    },
    {
        "id": "95a13d1b.f687d",
        "type": "function",
        "z": "9142b200.b7019",
        "name": "DebugNfcTag",
        "func": "if (msg.payload.NFC != null ) {\n  return msg;\n}\nelse {\n    return null;\n}\n\n\n",
        "outputs": 1,
        "noerr": 0,
        "x": 440,
        "y": 240,
        "wires": [
            [
                "eecbc397.dd9c8"
            ]
        ]
    },
    {
        "id": "e8f57341.a34b6",
        "type": "inject",
        "z": "9142b200.b7019",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "1",
        "crontab": "",
        "once": false,
        "x": 191,
        "y": 905,
        "wires": [
            [
                "d7f1b7ac.66c758"
            ]
        ]
    },
    {
        "id": "d7f1b7ac.66c758",
        "type": "function",
        "z": "9142b200.b7019",
        "name": "relay_status",
        "func": "var relay_status = global.get(\"relay\");\nif (relay_status === \"OFF\") {\n    return null;\n}\nif (relay_status === \"ON\") {\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "x": 391,
        "y": 905,
        "wires": [
            [
                "9dc0898d.009388"
            ]
        ]
    },
    {
        "id": "14d91d69.c017b3",
        "type": "rpi-gpio out",
        "z": "9142b200.b7019",
        "name": "Relay",
        "pin": "12",
        "set": true,
        "level": "0",
        "freq": "",
        "out": "out",
        "x": 1048,
        "y": 546,
        "wires": []
    },
    {
        "id": "fa6d8b43.8584c8",
        "type": "rpi-gpio out",
        "z": "9142b200.b7019",
        "name": "Green LED",
        "pin": "16",
        "set": true,
        "level": "0",
        "freq": "",
        "out": "out",
        "x": 1202,
        "y": 716,
        "wires": []
    },
    {
        "id": "3dd5601.cbbd1a",
        "type": "exec",
        "z": "9142b200.b7019",
        "command": "/opt/vc/bin/vcgencmd measure_temp",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "CPU temp",
        "x": 421,
        "y": 50.5,
        "wires": [
            [
                "d446d785.d09ea8"
            ],
            [],
            []
        ]
    },
    {
        "id": "5b94ac92.ef0824",
        "type": "rpi-gpio out",
        "z": "9142b200.b7019",
        "name": "red LED",
        "pin": "18",
        "set": true,
        "level": "1",
        "freq": "",
        "out": "out",
        "x": 1072,
        "y": 437,
        "wires": []
    },
    {
        "id": "bb5d4f74.b9bdb",
        "type": "function",
        "z": "9142b200.b7019",
        "name": "red LED ON",
        "func": "msg.payload = 1;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1025,
        "y": 318,
        "wires": [
            [
                "5b94ac92.ef0824"
            ]
        ]
    },
    {
        "id": "41a8ed57.6d1ea4",
        "type": "function",
        "z": "9142b200.b7019",
        "name": "red LED OFF",
        "func": "msg.payload = 0;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 630,
        "y": 331,
        "wires": [
            [
                "5b94ac92.ef0824",
                "a8048695.4c9648"
            ]
        ]
    },
    {
        "id": "a8048695.4c9648",
        "type": "delay",
        "z": "9142b200.b7019",
        "name": "",
        "pauseType": "delay",
        "timeout": "500",
        "timeoutUnits": "milliseconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 849,
        "y": 313,
        "wires": [
            [
                "bb5d4f74.b9bdb"
            ]
        ]
    },
    {
        "id": "a3f8888a.9a4d38",
        "type": "function",
        "z": "9142b200.b7019",
        "name": "average load values",
        "func": "var currentTime = new Date().getTime();\n\nif (!context.lastTime) {\n    context.lastTime = currentTime;\n    \n    context.Isum = msg.payload.I;\n    context.Vsum = msg.payload.V;\n    context.Psum = msg.payload.P;\n    context.count = 1;\n}\nif (currentTime-context.lastTime > 5000) {\n    // calculate average for previous messages\n    msg.payload.I = context.Isum/context.count;\n    msg.payload.V = context.Vsum/context.count;\n    msg.payload.P = context.Psum/context.count;\n    // start tracking average again\n    /*\n    context.Isum = msg.payload.I;\n    context.Vsum = msg.payload.V;\n    context.Psum = msg.payload.P;\n    context.count = 1;*/\n    context.lastTime = null; //currentTime;\n    \n    return msg;\n} else {\n    context.Isum += msg.payload.I;\n    context.Vsum += msg.payload.V;\n    context.Psum += msg.payload.P;\n    context.count +=1;\n}\n\n",
        "outputs": 1,
        "noerr": 0,
        "x": 830,
        "y": 153,
        "wires": [
            [
                "6a356109.280d1"
            ]
        ]
    },
    {
        "id": "f869eaf8.ed08b8",
        "type": "function",
        "z": "9142b200.b7019",
        "name": "relay_status",
        "func": "var relay_status = global.get(\"relay\");\nif (relay_status === \"OFF\") {\n    msg.payload = '{\"I\":0.0,\"V\":230,\"P\":0.0}';\n    return msg;\n}\nif (relay_status === \"ON\") {\n    return null;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "x": 577,
        "y": 107,
        "wires": [
            [
                "6a356109.280d1"
            ]
        ]
    },
    {
        "id": "23189b11.9d3724",
        "type": "inject",
        "z": "9142b200.b7019",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "1800",
        "crontab": "",
        "once": false,
        "x": 382,
        "y": 126,
        "wires": [
            [
                "f869eaf8.ed08b8"
            ]
        ]
    },
    {
        "id": "261af34.81c010c",
        "type": "mqtt out",
        "z": "9142b200.b7019",
        "name": "",
        "topic": "user/1/random00MQTTid/1/status",
        "qos": "",
        "retain": "true",
        "broker": "59618f8d.af895",
        "x": 1234,
        "y": 626,
        "wires": []
    },
    {
        "id": "86ba1a00.0275f8",
        "type": "function",
        "z": "9142b200.b7019",
        "name": "box ONLINE",
        "func": "global.set(\"box_status\", \"ONLINE\");\nmsg.payload = 1;\nreturn msg\n",
        "outputs": 1,
        "noerr": 0,
        "x": 734,
        "y": 700,
        "wires": [
            [
                "fa6d8b43.8584c8"
            ]
        ]
    },
    {
        "id": "9705579c.2a65e8",
        "type": "status",
        "z": "9142b200.b7019",
        "name": "connection",
        "scope": [
            "c4715a7f.477bd8"
        ],
        "x": 107,
        "y": 749,
        "wires": [
            [
                "3596f962.796de6"
            ]
        ]
    },
    {
        "id": "3596f962.796de6",
        "type": "switch",
        "z": "9142b200.b7019",
        "name": "",
        "property": "status.text",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "node-red:common.status.connected",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "node-red:common.status.connecting",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "node-red:common.status.disconnected",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "outputs": 3,
        "x": 252,
        "y": 751,
        "wires": [
            [
                "1eae31a1.b4777e"
            ],
            [
                "5276ec29.e3f4f4"
            ],
            [
                "a87b2fc2.78cea"
            ]
        ]
    },
    {
        "id": "a08fa4a0.15bf38",
        "type": "debug",
        "z": "9142b200.b7019",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "false",
        "x": 1269,
        "y": 427,
        "wires": []
    },
    {
        "id": "1eae31a1.b4777e",
        "type": "function",
        "z": "9142b200.b7019",
        "name": "connected",
        "func": "msg.payload = \"CONNECTED\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 459,
        "y": 690,
        "wires": [
            [
                "86ba1a00.0275f8"
            ]
        ]
    },
    {
        "id": "5276ec29.e3f4f4",
        "type": "function",
        "z": "9142b200.b7019",
        "name": "connecting",
        "func": "msg.payload = \"CONNECTING\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 443,
        "y": 757,
        "wires": [
            [
                "108891f8.04f48e"
            ]
        ]
    },
    {
        "id": "a87b2fc2.78cea",
        "type": "function",
        "z": "9142b200.b7019",
        "name": "disconnected",
        "func": "msg.payload = \"DISCONNECTED\";\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 446,
        "y": 805,
        "wires": [
            [
                "108891f8.04f48e"
            ]
        ]
    },
    {
        "id": "108891f8.04f48e",
        "type": "function",
        "z": "9142b200.b7019",
        "name": "box OFFLINE",
        "func": "global.set(\"relay\", \"OFF\");\nglobal.set(\"box_status\", \"OFFLINE\");\nmsg.payload = 0;\nreturn msg;\n\n",
        "outputs": 1,
        "noerr": 0,
        "x": 723,
        "y": 779,
        "wires": [
            [
                "14d91d69.c017b3",
                "fa6d8b43.8584c8"
            ]
        ]
    },
    {
        "id": "43e5b316.551d5c",
        "type": "function",
        "z": "9142b200.b7019",
        "name": "green LED ON",
        "func": "msg.payload = 1;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1010,
        "y": 885,
        "wires": [
            [
                "fa6d8b43.8584c8"
            ]
        ]
    },
    {
        "id": "9dc0898d.009388",
        "type": "function",
        "z": "9142b200.b7019",
        "name": "green LED OFF",
        "func": "msg.payload = 0;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 615,
        "y": 898,
        "wires": [
            [
                "432265a3.0aabbc",
                "fa6d8b43.8584c8"
            ]
        ]
    },
    {
        "id": "432265a3.0aabbc",
        "type": "delay",
        "z": "9142b200.b7019",
        "name": "",
        "pauseType": "delay",
        "timeout": "500",
        "timeoutUnits": "milliseconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 817,
        "y": 915,
        "wires": [
            [
                "43e5b316.551d5c"
            ]
        ]
    },
    {
        "id": "59bd64dc.7c63ac",
        "type": "function",
        "z": "9142b200.b7019",
        "name": "status",
        "func": "msg.payload = 'ACTIVE';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 1009,
        "y": 612,
        "wires": [
            [
                "261af34.81c010c"
            ]
        ]
    },
    {
        "id": "95ad5254.276ba",
        "type": "inject",
        "z": "9142b200.b7019",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": false,
        "x": 576,
        "y": 519,
        "wires": [
            []
        ]
    },
    {
        "id": "ac79988c.b76768",
        "type": "function",
        "z": "9142b200.b7019",
        "name": "status",
        "func": "msg.payload = 'ONLINE';\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 995,
        "y": 665,
        "wires": [
            [
                "261af34.81c010c"
            ]
        ]
    },
    {
        "id": "59618f8d.af895",
        "type": "mqtt-broker",
        "z": "",
        "broker": "nabito.org",
        "port": "1883",
        "clientid": "random00MQTTid",
        "usetls": false,
        "compatmode": true,
        "keepalive": "60",
        "cleansession": true,
        "willTopic": "user/1/random00MQTTid/1/status",
        "willQos": "0",
        "willRetain": "true",
        "willPayload": "OFFLINE",
        "birthTopic": "user/1/random00MQTTid/1/status",
        "birthQos": "0",
        "birthRetain": "true",
        "birthPayload": "ONLINE"
    },
    {
        "id": "4f379c28.8b15d4",
        "type": "serial-port",
        "z": "",
        "serialport": "/dev/ttyUSB0",
        "serialbaud": "57600",
        "databits": "8",
        "parity": "none",
        "stopbits": "1",
        "newline": "\\n",
        "bin": "false",
        "out": "char",
        "addchar": false
    }
]