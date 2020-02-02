const Mirage = require("miragejs")

function makeServer({ environment = "development" } = {}) {
  let server = new Mirage.Server({
    environment,

    models: {
      dog: Mirage.Model,
    },

    seeds(server) {
      server.create("dog", { name: "Labrador Retrievers" })
      server.create("dog", { name: "German Shepherds" })
    },

    routes() {
      this.namespace = "api"

      this.get("/dogs", schema => {
        return schema.dogs.all()
      })
    },
  })

  return server
}

module.exports = {
  makeServer
}
