const resolvers = {
    Class: {
        type(parent) {
            return parent.type;
        },
        homeworks(parent, __, context) {
            return context.clap.find(item => item.type === parent.type).homeworks;
        },
    },

    Homework: {
        id(parent) {
            return parent.id;
        },
        finished_people(parent) {
            return parent.finished_people;
        },
        total_time(parent) {
            return parent.total_time;
        },
    },

    Query: {
        classes(_, __, context) {
            return context.clap;
        },
        class_detail(_, args, context) {
            return context.clap.find(item => item.type === args.type);
        },
        get_homework(_, args, context) {
            return context.clap.find(item => item.type === args.type).homeworks.find(item => item.id === args.id);
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
        add_class(_, args, context) {
            const newClass = {
                type: args.type,
                homeworks: [],
            };
            if(!context.clap.find(item => item.type === args.type)) {
                context.clap.push(newClass);
            }
            return context.clap;
        },
        delete_class(_, args, context) {
            const index = context.clap.findIndex(item => item.type === args.type);
            if(index !== -1) {
                context.clap.splice(index, 1);
            }
            return context.clap;
        },
        create_homework(_, args, context) {
            const index = context.clap.findIndex(item => item.type === args.type);
            if(index === -1) return null;
            const newHomework = {
                id: args.id,
                finished_people: 0,
                total_time: 0,
            };
            if(!context.clap[index].homeworks.find(item => item.id === args.id)) {
                context.clap[index].homeworks.push(newHomework);
            }
            return context.clap[index];
        },
        addto_homework(_, args, context) {
            const { type, id, finished_people, total_time } = args;
            const which = context.clap.findIndex(item => item.type === type);
            if(which === -1) return null;
            const index = context.clap[which].homeworks.findIndex(item => item.id === id);
            if(context.clap[which].homeworks[index]) {
                context.clap[which].homeworks[index].finished_people += (finished_people || 0);
                context.clap[which].homeworks[index].total_time += (total_time || 0);
            }
            return context.clap[which].homeworks[index];
        },
        edit_homework(_, args, context) {
            const { type, id, finished_people, total_time } = args;
            const which = context.clap.findIndex(item => item.type === type);
            if(which === -1) return null;
            const index = context.clap[which].homeworks.findIndex(item => item.id === id);
            if(context.clap[which].homeworks[index]) {
                context.clap[which].homeworks[index].finished_people = finished_people;
                context.clap[which].homeworks[index].total_time = total_time;
            }
            return context.clap[which].homeworks[index];
        },
        delete_homework(_, args, context) {
            const { type, id } = args;
            const which = context.clap.findIndex(item => item.type === type);
            if(which === -1) return null;
            const index = context.clap[which].homeworks.findIndex(item => item.id === id);
            if(index !== -1) {
                context.clap[which].homeworks.splice(index, 1);
            }
            return context.clap[which];
        },
    }
};

module.exports = resolvers;