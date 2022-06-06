const {gql} = require('apollo-server');

const typeDefs = gql`
    type Query {
        classes: [Class]
        class_detail(type: CLASSTYPE!): Class
        get_homework(type: CLASSTYPE!, id: Int!): Homework
        get_classes: [CLASSTYPE]
    }

    type Mutation {
        add_class(type: CLASSTYPE!): [Class]
        delete_class(type: CLASSTYPE!): [Class]
        create_homework(type: CLASSTYPE!, id: Int!): Class
        addto_homework(type: CLASSTYPE!, id: Int!, finished_people: Int, total_time: Int): Homework
        edit_homework(type: CLASSTYPE!, id: Int!, finished_people: Int!, total_time: Int!): Homework
        delete_homework(type: CLASSTYPE!, id: Int!): Class
    }

    type Class {
        type: CLASSTYPE
        homeworks: [Homework]
    }

    type Homework {
        id: Int
        finished_people: Int
        total_time: Int
    }

    enum CLASSTYPE {
        Computer_Architecture
        Probability
        Software_Studio
    }
`;

module.exports = typeDefs;