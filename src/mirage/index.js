import { createServer } from "miragejs"

export default function () {
    let arr = [{id : "1", text : "hello"}]
  createServer({
    routes() {
        this.namespace = "/fakeapi"
        this.get("/getTodos", {todos:arr})
        // this.post()     // create or add data
        // this.put()      // update data
        // this.delete()   // for delete of data
    },
  })
}