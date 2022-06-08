# Global Server
## 安裝方法(應該是不用安裝的)
- npm init --yes
- npm install apollo-server graphql
- npm install sqlite3 sequelize sequelize-cli

## 執行
- node {路徑/index.js}

## Type
- Homework
    - type(CLASSTYPE): 屬於哪堂課
    - id(Int): 哪項作業(1, 2, 3...)
    - finished_people(Int): 總共幾個人完成
    - total_time(Int): 總時間長(分鐘為單位)
- CLASSTYPE 課程名稱
    - Computer_Architecture
    - Probability
    - Software_Studio 

## Query: 主要是用來查詢的
- get_all_homework()
    - return [Homework]
    - 列出所有homework
- class_detail(type: CLASSTYPE!)
    - return [Homework]
    - 找**一堂課**所有homework的資訊
- get_homework(type: CLASSTYPE!, id: Int!)
    - return Homework
    - 找**一個**homework
- get_classes()
    - return [CLASSTYPE]
    - 列出**所有enum**

## Mutation: 改資訊的
- create_homework(type: CLASSTYPE!, id: Int!)
    - return [Homework]
    - 為一個class**增加**homework，回傳class的所有homework
- addto_homework(type: CLASSTYPE!, id: Int!, finished_people: Int, total_time: Int)
    - return Homework
    - **增加**homework的數字(people和time)
- edit_homework(type: CLASSTYPE!, id: Int!, finished_people: Int!, total_time: Int!)
    - return Homework
    - **直接更改**homework的數字(people和time)
- delete_homework(type: CLASSTYPE!, id: Int!)
    - return [Homework]
    - **刪掉**一個homework，回傳class剩下的homework
