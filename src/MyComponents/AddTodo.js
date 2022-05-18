import React, { useContext, useState } from 'react'

export default function AddTodo(props) {
    const[title, setTitle] = useState("");
    const[desc, setdesc] = useState()
    
    const submit = ()=>{}
  return (
    <div>
      <form onSubmit={submit}>
        <h3>Add a Todos</h3>
  <div class="mb-3">
    <label for="title" class="form-label">Todo Title</label>
    <input type="TexT " value={title} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="desc" class="form-label">for description</label>
    <input type="text " class="form-control" id="title"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="desc"/>
    <label class="form-check-label" for="exampleCheck1">Add todo</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
