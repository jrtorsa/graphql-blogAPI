import { GraphQLNonNull, GraphQLInt } from "graphql";
import { fakeDatabase } from "../../FakeDatabase";
import { Author } from "../types/Author";

export default {
  post: {
    type: Post,
    description: "Gets details of a specific post",
    args: {
      id: { type: new GraphQLNonNull(GraphQLInt) },
    },
    resolve: function (parent, { id }) {
      return fakeDatabase.getBlogPost(id);
    },
  },
};
