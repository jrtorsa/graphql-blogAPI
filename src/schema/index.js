const { GraphQLSchema, GraphQLObjectType } = require("graphql");
import author from "./queries/author";
import posts from "./queries/posts";
import post from "./queries/post";
import addPost from "./mutations/addPost";
import addComment from "./mutations/addComment";

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Rootquery",
    fields: () => ({
      ...posts,
      ...post,
      ...author,
    }),
  }),

  mutation: new GraphQLObjectType({
    name: "Rootmutation",
    fields: () => ({
      ...addPost,
      ...addComment,
    }),
  }),
});

export default schema;
