export const movies = [
  {
    id: 1,
    title: "Star Wars",
    rating: 8.5
  },
  {
    id: 2,
    title: "Avengers",
    rating: 9.3
  },
  {
    id: 3,
    title: "Lottos",
    rating: 7.0
  },
  {
    id: 4,
    title: "The Wars",
    rating: 6.4
  },
  {
    id: 5,
    title: "Bank",
    rating: 5.6
  },
]

const resolvers = {
  Query: {
    post: () => movies
  },
  Mutation: {

  }
}

export default resolvers