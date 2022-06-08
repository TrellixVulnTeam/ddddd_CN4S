const resolvers = {
    Homework: {
        type(parent) {
            return parent.type;
        },
        index(parent) {
            return parent.index;
        },
        finished_people(parent) {
            return parent.finished_people;
        },
        total_time(parent) {
            return parent.total_time;
        },
    },

    Query: {
        async get_all_homework(_, __, {models}) {
            return await models.Homework.findAll();
        },
        async class_detail(_, args, {models}) {
            return await models.Homework.findAll({where: {type: args.type}});
        },
        async get_homework(_, args, {models}) {
            return await models.Homework.findOne({where: {type: args.type, index: args.index}});
        },
        get_classes(_, __, ___, info) {
            const ret = [];
            info.returnType.ofType.astNode.values.map(item => {
                ret.push(item.name.value);
            });
            return ret;
        },
    },

    Mutation: {
        async create_homework(_, args, {models}) {
            const homework = await models.Homework.findOne({where: {type: args.type, index: args.index}});
            if(homework === null) await models.Homework.create({type: args.type, index: args.index, finished_people: 0, total_time: 0});
            return await models.Homework.findAll({where: {type: args.type}});
        },
        async addto_homework(_, args, {models}) {
            const cur = await models.Homework.findOne({where: {type: args.type, index: args.index}});
            if(cur === null) return null;
            cur.finished_people += (args.finished_people ? args.finished_people : 0);
            cur.total_time += (args.total_time ? args.total_time : 0);
            await cur.save();
            return cur;
        },
        async edit_homework(_, args, {models}) {
            const cur = await models.Homework.findOne({where: {type: args.type, index: args.index}});
            if(cur === null) return null;
            await models.Homework.update({finished_people: args.finished_people, total_time: args.total_time}, {where: {type: args.type, index: args.index}});
            return await models.Homework.findOne({where: {type: args.type, index: args.index}});
        },
        async delete_homework(_, args, {models}) {
            await models.Homework.destroy({where: {type: args.type, index: args.index}});
            return (await models.Homework.findAll({where: {type: args.type}}));
        },
    }
};

module.exports = resolvers;