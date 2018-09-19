{
  "name": "message_edited",
  "temp": "message",
  "event-type": "26",
  "_id": "voIMM",
  "actions": [
    {
      "server": "0",
      "varName": "",
      "dataName": "edit_system",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "edit_sys",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "log_system",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "logcount",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "log_system",
      "changeType": "1",
      "value": "1",
      "name": "Control Server Data"
    },
    {
      "message": "1",
      "varName": "message",
      "info": "2",
      "storage": "1",
      "varName2": "text",
      "name": "Store Message Info"
    },
    {
      "message": "1",
      "varName": "messageafter",
      "info": "2",
      "storage": "1",
      "varName2": "textafter",
      "name": "Store Message Info"
    },
    {
      "message": "1",
      "varName": "messageafter",
      "info": "3",
      "storage": "1",
      "varName2": "author",
      "name": "Store Message Info"
    },
    {
      "message": "1",
      "varName": "message",
      "info": "4",
      "storage": "1",
      "varName2": "channel",
      "name": "Store Message Info"
    },
    {
      "message": "1",
      "varName": "message",
      "info": "6",
      "storage": "1",
      "varName2": "mention_count",
      "name": "Store Message Things"
    },
    {
      "message": "1",
      "varName": "messageafter",
      "info": "6",
      "storage": "1",
      "varName2": "mention_countafter",
      "name": "Store Message Things"
    },
    {
      "message": "1",
      "varName": "message",
      "info": "5",
      "storage": "1",
      "varName2": "mention_list",
      "name": "Store Message Things"
    },
    {
      "message": "1",
      "varName": "messageafter",
      "info": "5",
      "storage": "1",
      "varName2": "mention_listafter",
      "name": "Store Message Things"
    },
    {
      "message": "1",
      "varName": "message",
      "info": "3",
      "storage": "1",
      "varName2": "everyone_ping",
      "name": "Store Message Things"
    },
    {
      "message": "1",
      "varName": "messageafter",
      "info": "3",
      "storage": "1",
      "varName2": "everyone_pingafter",
      "name": "Store Message Things"
    },
    {
      "member": "2",
      "varName": "author",
      "info": "16",
      "storage": "1",
      "varName2": "avatar",
      "name": "Store Member Info"
    },
    {
      "member": "2",
      "varName": "author",
      "info": "7",
      "storage": "1",
      "varName2": "tag",
      "name": "Store Member Things"
    },
    {
      "title": "",
      "author": "${tempVars(\"tag\")}",
      "color": "",
      "timestamp": "true",
      "url": "",
      "authorIcon": "${tempVars(\"avatar\")}",
      "imageUrl": "",
      "thumbUrl": "${tempVars(\"avatar\")}",
      "storage": "1",
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Original Message",
      "message": "${tempVars(\"text\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Edited Message",
      "message": "${tempVars(\"textafter\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Channel",
      "message": "${tempVars(\"channel\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Message Author",
      "message": "${tempVars(\"author\")} // ${tempVars(\"tag\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "everyone_ping",
      "comparison": "0",
      "value": "",
      "iftrue": "3",
      "iftrueVal": "2",
      "iffalse": "0",
      "iffalseVal": "2",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "ping",
      "changeType": "0",
      "value": "\"❌\"",
      "name": "Control Variable"
    },
    {
      "call": "25",
      "name": "Jump to Action"
    },
    {
      "storage": "1",
      "varName": "ping",
      "changeType": "0",
      "value": "\"✅\"",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Other Information",
      "message": "Has `@everyone` ping now? ${tempVars(\"ping\")} \nMentioned Member count: **${tempVars(\"mention_countafter\")}**\nList of Mentioned Users: \n${tempVars(\"mention_listafter\")}",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "channel": "6",
      "varName2": "mlchannel",
      "name": "Send Embed Message"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "edit_system",
      "changeType": "1",
      "value": "1",
      "name": "Control Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "edit_system",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "edit_sys",
      "name": "Store Server Data"
    }
  ],
  "temp2": "messageafter"
}
