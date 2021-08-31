// 使用 Mock
import Mock from 'mockjs'


export default Mock.mock('/menuAction!getTreeNote.action', 'post', {
    // 属性 list 的值是一个数组，其中含有 1 到 5 个元素
    'list|1-5': [{
        "attributes": {"url": "/admin/xxxg.jsp"},
        "checked": false,
        "id": "xxxg",
        "pid": "yhzx",
        "state": "open",
        "text": "信息修改"
    }, {"attributes": {"url": ""}, "checked": false, "id": "0", "state": "closed", "text": "首页"}, {
        "attributes": {},
        "checked": false,
        "id": "tszq",
        "pid": "0",
        "state": "closed",
        "text": "图书专区"
    }, {
        "attributes": {},
        "checked": false,
        "id": "xtgl",
        "pid": "0",
        "state": "closed",
        "text": "系统管理"
    }, {
        "attributes": {"url": "/aizq/tpsb.jsp"},
        "checked": false,
        "id": "tpsb",
        "pid": "aizq",
        "state": "open",
        "text": "图片识别"
    }, {
        "attributes": {"url": "/admin/yhgl.jsp"},
        "checked": false,
        "id": "yhgl",
        "pid": "xtgl",
        "state": "open",
        "text": "用户管理"
    }, {
        "attributes": {},
        "checked": false,
        "id": "aizq",
        "pid": "0",
        "state": "closed",
        "text": "智能专区"
    }, {
        "attributes": {"url": "/admin/buggl.jsp"},
        "checked": false,
        "id": "buggl",
        "pid": "xtgl",
        "state": "open",
        "text": "BUG管理"
    }, {
        "attributes": {"url": "/admin/jsgl.jsp"},
        "checked": false,
        "iconCls": "icon-save",
        "id": "jsgl",
        "pid": "xtgl",
        "state": "open",
        "text": "角色管理"
    }, {
        "attributes": {"url": "/admin/grzx.jsp"},
        "checked": false,
        "id": "grzx",
        "pid": "yhzx",
        "state": "open",
        "text": "个人中心"
    }, {
        "attributes": {"url": "/admin/qxgl.jsp"},
        "checked": false,
        "id": "qxgl",
        "pid": "xtgl",
        "state": "open",
        "text": "权限管理"
    }, {
        "attributes": {},
        "checked": false,
        "id": "yhzx",
        "pid": "0",
        "state": "closed",
        "text": "用户中心"
    }, {
        "attributes": {"url": "/tszq/tsgl.jsp"},
        "checked": false,
        "id": "tsgl",
        "pid": "tszq",
        "state": "open",
        "text": "图书管理"
    }, {
        "attributes": {"url": "/admin/cdgl.jsp"},
        "checked": false,
        "id": "cdgl",
        "pid": "xtgl",
        "state": "open",
        "text": "菜单管理"
    }]
})
