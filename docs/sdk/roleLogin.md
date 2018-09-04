### 角色登录
---

**接口描述：**

* 角色登录

**请求URL(正式)：**

* ```https://sea-joysdk-dev.15166.com/role/v1/login```


**请求方式：**

* POST

**加密方式：**

* MD5

**加密规则：**
* 将全部请求参数按a-z 排序
* 排序后,拼接成 value1+value2+…+```Appkey```
* md5(value1+value2+…+```Appkey```)
* ```+符号为连接符不实际接入字符串```

**请求参数：**

| 参数名     | 必填 | 类型      | 说明  | 实例 |
| ------------- | ---- | ----------- | ------- | ---- |
| appID         | 是  | 长长的标题3 | title 4 |      |
| channelID     | 是  |             |         |      |
| subChannelID  | 是  | column 3    |         |      |
| serverID      | 是  |             |         |      |
| channelRoleID | 是  |             |         |      |
| channelUserID | 是  |             |         |      |
| serverName    | 是  |             |         |      |
| roleLevel     | 是  |             |         |      |
| vipLevel      | 是  |             |         |      |
| balance       | 是  |             |         |      |
| guildName     |  是    |             |         |      |
| guildID       |  是    |             |         |      |
| fighting      |  是    |             |         |      |
| commonData    |   是   |             |         |      |
| timestamp     |   是   |             |         |      |
| signature     |   是   |             |         |      |

**返回示例**
```js
  {
    "code": 0,
    "msg": "success",
    "data": {},
  }
```

```注意：```

* 错误码说明：

    10011-app配置错误

    10012-渠道关闭登陆

    10001-角色所属用户不存在