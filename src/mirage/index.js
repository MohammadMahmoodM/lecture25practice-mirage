import { createServer } from "miragejs"

export default function () {
    let arr = [{id : "1", text : "hello"}]
    let user = [{name: "mahmood", age: 26}]
  createServer({
    routes() {
        this.namespace = "/fakeapi"
        this.get("/getTodos", {todos:arr})

        this.get("/getUsers", {todos:user})

        this.post("/addTodo",(_,req)=>{
          console.log('req',req);
          arr.push(req.requestBody)
        })
        // this.post()     // create or add data
        // this.put()      // update data
        // this.delete()   // for delete of data
    },
  })
}