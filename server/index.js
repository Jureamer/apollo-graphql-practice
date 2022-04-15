import { createServer } from "@graphql-yoga/node";
import { movies } from "./graphql/db.js";
const server = createServer({
  // schema, Type 지정
  // Query = Get
  // Mutation = DB 등을 이용해서 값이 변경되는 것
  // ex) REST API 상 POST, UPDATE 등
  schema: {
    typeDefs: `
      type Query {
        getMovies: [Movie]!,
        search(id: Int!): Movie
      }

      type Movie {
        id: Int!
        title: String!
        rating: Int!
      }

      type Mutation {
        addMovie(title: String!, rating: Float!): Boolean
      }
    `,
    resolvers: {
      Query: {
        getMovies: () => movies,
        search: (_, { id }) => movies.find((movie) => movie.id === id),
      },
      Mutation: {
        addMovie: (_, {title, rating}) => {
          const newMovie = {
            id: movies.length + 1,
            title,
            rating
          }
          const beforeLength = movies.length;
          movies.push(newMovie);
          const afterLength = movies.length

          if (beforeLength < afterLength) {
            return true
          } else {
            return false
          }

        },
      }
    }
  }
})

server.start(() => console.log("GraphQL Server Start"))