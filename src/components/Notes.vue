<template>
<div>
  <div class="row m-3">
    <div class="form-group col-12 col-sm-6 mx-auto">
      <input type="text"
             placeholder="filter"
             class="form-control"
             v-model="filter">
    </div>
  </div>
  <div class="row m-3">
    <ul class="list-group col-12 col-sm-8 mx-auto">
      <li class="list-group-item" v-for="note in filterNotes">
        {{ note.body }}
      </li>
      <li class="list-group-item from-group">
        <input type="text" 
               class="form-control" 
               placeholder="new note" 
               v-model="noteBody">
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {

  props: ['notesList'],
  data() {
    return {
      filter: '', 
      noteBody:'' 
    };
  },

  methods: {
    postNote() {
      var newNote = {body: this.noteBody, order: this.notesList.length}
      this.$http.post('notes.json', newNote)
        .then(response => {
          if (response.status === 200 ) 
            this.notesList.push(newNote);
            this.noteBody = '';
        }, error => console.log(error));
    },

    removeNote(note) {
      this.$http.delete('notes.json', note.uuid)
        .then( 
          () => {
            let noteFound = this.notesList.find(elem => elem.id = note.id);
            let index = this.notesList.indexOf(noteFound);
            this.notesList.splice(index, 1);
          }, 
          error => console.log('error') );
    }
  },

  computed: {
    filterNotes() {
      return this.notesList.filter( note => note.body.match(this.filter) )
    }
  }
}  

</script>
