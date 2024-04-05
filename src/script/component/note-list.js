class NoteList extends HTMLElement {
  constructor() {
    super()

    this._noteList = []
    this._style = document.createElement('style')
  }

  setNoteList(value) {
    this._noteList = value
    this.render()
  }

  connectedCallback() {
    this.render()
  }

  updateStyle() {
    this._style.textContent = `
      note-list {
            margin: 50px;
            display: grid;
            gap: 25px;
            grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
        }
      `
  }

  render() {
    this.updateStyle()

    const noteItemElements = this._noteList.map((item) => {
      const note = document.createElement('note-item')
      note.setNote(item)

      return note
    })

    this.innerHTML = ''
    this.append(this._style, ...noteItemElements)
  }
}

customElements.define('note-list', NoteList)
