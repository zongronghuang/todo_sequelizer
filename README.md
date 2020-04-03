# 待辦事項清單
---
待辦事項清單 (Alpha Camp 學期三迷你專案)

![Demo](/Demo.png)

## 開發目的
---
建立個人使用的待辦事項清單。[<sup>1</sup>](#1)

# 建立環境
1. 在本機電腦上安裝相容的 MySQL Server 及 MySQL Workbench 應用程式：[https://dev.mysql.com/downloads/mysql/](https://dev.mysql.com/downloads/mysql/)

2. 建立專案所需的資料庫：開啟 MySQL Workbench。在 Query 頁面上輸入並執行下列指令：
```
    drop database if exists todo_sequelize;
    create database todo_sequelize;
    use todo_sequelize;
```

# 安裝專案及相依套件
---
若要執行此專案，請在 console 內執行下列步驟：

1. 從 GitHub 下載此專案：
```
    git clone https://github.com/zongronghuang/todo_sequelizer.git todo_sequelizer
``` 
2. 前往 **todo_sequelizer** 資料夾。

3. 透過 console 安裝下列相依套件：
```
    npm install 
    express 
    express-handlebars 
    body-parser 
    method-override 
    express-session 
    bcryptjs
    dotenv
    connect-flash 
    passport 
    passport-local 
    passport-facebook
    mysql2
    sequelize
    sequelize-cli
```
4. 始初化 Sequelize 套件
```
    npx sequelize init
```
5. 將所有 migrations 檔案套用到資料庫執行：
```
    npx sequelize db:migrate
```
6. 回到 MySQL Workbench 確認是否執行成功。在原有指令下方輸入並執行下列指令，確認是否產生對應的資料表：
```
    SELECT * FROM todos;
    SELECT * FROM users;   
```

7. 回到 console，利用下列指令來啟動本地伺服器：
```
    npm run start
```

8. 開啟網路瀏覽器並輸入下列網址：
```
    localhost:3000
```

9. 現在您已可以開始使用此專案 (不含 Facebook 登入功能)。

# 啟動 Facebook 登入功能
1. 請先至下列網站註冊個人帳號或登入：[https://developers.facebook.com/](https://developers.facebook.com/)
2. 為此專案建立一組 ID 和 secret key。
3. 在此專案資料夾最上層建立一個 **.env** 檔案。
4. 打開 .env 檔案並貼上下列資料後存檔：
```
    FACEBOOK_ID=[你的 FACEBOOK APP ID]
    FACEBOOK_SECRET=[你的 FACEBOOK APP SECRET KEY]
    FACEBOOK_CALLBACK=http://localhost:3000/auth/facebook/callback
```

# 功能介紹
---
### 註冊 & 登入 & 登出
+ 註冊個人帳號並登入。
+ 可透過 Facebook 登入。
+ 登入、註冊時發生錯誤或登出，會出現提示訊息

登入後可使用下列個人化功能：

### 依使用者顯示對應的待辦項目，可進行管理

+ 按一下 **CREATE** 即可前往建立新的待辦項目。
+ 按一下 **edit** 或 **delete**，即可編輯或刪除待辦項目。

---
<a class="anchor" id="1">1</a>: 此專案及所有內容皆作為學習用途，並無侵犯著作權之意圖。