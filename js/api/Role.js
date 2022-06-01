const apidomain = 'http://localhost:8080'
/*取得所有角色*/
function GetAllRole() {
    const token = getCookie('token')//clien端裡面的cookie抓取token的值
    //console.log(token)
    return fetch(apidomain + '/role', {//這裡要按照api的網址
        method: 'GET',
        headers:{
            'Authorization': token
        }
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            return res
        })
        .catch(e => {
            console.error('Error:', e)
        })
}
GetAllRole()
//使用GetAllRole 
async function getRole() {
    var data;
    await GetAllRole().then(r => data = r);
    
    GetAllRole()
        .then(r => data = r)
    data = r
    console.log(data);
    printalldata(data);
}
getRole();
function printalldata(data){
    var text = document.getElementsByClassName("text");

    //如果data裡面有data代表資料正確
    if(data.hasOwnProperty('data')){
        var dataa = data.data;//取出data所有資料
        for(i = 0 ; i < dataa.length ; i++){
            console.log(dataa[i]);//印出每筆資料內容
            console.log(dataa[i].Name);//取出單一資料
        }
    }

}
/*function HELLOFETCH(){
    fetch("網址", {
        method: 'GET',
        headers:{
            //寫JS的時候，建議不要直接把token放在其他地方
            //通常token，會放在Headers，欄位名稱要跟後端講好
            'Authorization': token
        }
    })//上面的部分結束後才會順著到then
        .then(res => res.json())
        .then(res => {
            console.log(res);
            return res

        })
        .catch(e => {
            console.error('Error:', e)
        })
    }
*/

/*新增角色*/
function CreateRole(roleName) {
    const token = getCookie('token')
    var data = new FormData()
    data.append('RoleName', roleName)
    //console.log(data)
    return fetch(apidomain + '/role', {//這裡要按照api的網址
        method: 'POST',
        headers: {
            'Authorization': token
        },
        body: data,
    })
        .then(res => res.json())
        .then(res => {
            /*完成後接收傳回來的資料*/
        })
        .catch(e => {
            console.error('Error:', error)
        })
}
// CreateRole
async function createRole() {
    var data;
    await CreateRole().then(r => data = r);
    
    CreateRole()
        .then(r => data = r)
    data = r
    console.log(data);
    printalldata(data);

}
createRole();

/*更新角色*/
function UpdateRole($roleupdate) {
    const token = getCookie('token')
    var formBody = []

    var details = {
        'RoleName': $roleupdate
    }
    for (var property in details) {
        var encodedKey = encodeURIComponent(property)
        var encodedValue = encodeURIComponent(details[property])
        formBody.push(encodedKey + "=" + encodedValue)
    }
    fetch(apidomain + '/role/1', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Authorization': token,
        },
        body: formBody
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            return data
        })
        .catch(e => {
            console.error('Error:', e)
        })

}
// UpdateRole
async function updateRole() {
    var data;
    await UpdateRole().then(r => data = r);
    
    UpdateRole()
        .then(r => data = r)
    data = r
    console.log(data);
    printalldata(data);

}
updateRole();
/*刪除角色*/
function DeleteRole(id) {
    const token = getCookie('token');
    return fetch(apidomain + '/role/1/' + id, {
        method: 'DELETE',
        headers: {
            'Authorization': token,
        },
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            return res;
        })
        .catch(e => {
            console.error('Error:', error)
        })
}
// DeleteRole
async function deleteRole() {
    var data;
    await DeleteRole().then(r => data = r);
    
    DeleteRole()
        .then(r => data = r)
    data = r
    console.log(data);
    printalldata(data);

}
deleteRole();
//取得Cookie
function getCookie(cookiename) {
    let name = cookiename + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//設置
function setCookie(cname, cvalue, exdays) {
    var d = new Date()
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    var expires = "expires=" + d.toUTCString()
    document.cookie = cname + "=" + cvalue + "; " + expires
}

//清除cookie
function clearCookie(name) {
    setCookie(name, "", -1);
}

//測試
/*function GetAllProduct() {
    var token = getCookie('token');
    return fetch(apidomain + '/product', {
        method: 'GET',
        headers: {
            'Authorization': token,
        }
    })
        .then(res => res.json())
        .then(res => {
            return res;
        })
        .catch(e => {
            console.error('Error:', error)
        })
}*/
