# Global Server
## 安裝方法
- npm init --yes
- npm install apollo-server graphql
## 執行
- node {路徑/index.js}

## Type
- Class:
    - type(CLASSTYPE: enum): 限定的課程名稱
    - homeworks([Homework]): 作業的清單
- Homework
    - id(Int): 哪項作業(1, 2, 3...)
    - finished_people(Int): 總共幾個人完成
    - total_time(Int): 總時間長(分鐘為單位)
- CLASSTYPE 課程名稱
    - Computer_Architecture
    - Probability
    - Software_Studio 

## Query: 主要是用來查詢的
- classes()
    - return [Class]
    - **列出**所有class
- class_detail(type: CLASSTYPE!)
    - return Class
    - 找**一個**class的資訊
- get_homework(type: CLASSTYPE!, id: Int!)
    - return Homework
    - 找**一個**homework
- get_classes()
    - return [CLASSTYPE]
    - 列出**所有enum**

## Mutation: 改資訊的
- add_class(type: CLASSTYPE!)
    - return [Class]
    - **新增**一個class
- delete_class(type: CLASSTYPE!)
    - return [Class]
    - **刪掉**一個已知的class
- create_homework(type: CLASSTYPE!, id: Int!)
    - return Class
    - 為一個class**增加**homework
- addto_homework(type: CLASSTYPE!, id: Int!, finished_people: Int, total_time: Int)
    - return Homework
    - **增加**homework的數字(people和time)
- edit_homework(type: CLASSTYPE!, id: Int!, finished_people: Int!, total_time: Int!)
    - return Homework
    - **更改**homework的數字(people和time)
- delete_homework(type: CLASSTYPE!, id: Int!)
    - return Class
    - **刪掉**一個homework