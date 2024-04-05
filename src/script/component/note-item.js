class NoteItem extends HTMLElement {
  constructor() {
    super()

    this._note = {
      id: 0,
      title: 'NEED_TITLE',
      body: 'NEED_BODY',
      createdAt: '',
    }

    this._style = document.createElement('style')
  }

  setNote(value) {
    this._note['id'] = value.id
    this._note['title'] = value.title
    this._note['body'] = value.body
    this._note['createdAt'] = value.createdAt
    this.render()
  }

  connectedCallback() {
    this.render()
  }

  updateStyle() {
    this._style.textContent = ` 
        note-item {
            height: 250px;
            border-radius: 5px;
            padding: 15px 20px 20px;
            background: #282828;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        
        .details {
            max-height: 165px;
            overflow-y: auto;
        }
        
        .details::-webkit-scrollbar {
            width: 0;
        }
        
        .details:hover::-webkit-scrollbar {
            width: 5px;
        }
        
        .details:hover::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 25px;
        }
        
        .details:hover::-webkit-scrollbar-thumb {
            background: #e6e6e6;
            border-radius: 25px;
        }
        
        p {
            font-size: 20px;
            font-weight: 500;
            color: #bfa75d;
        }
        
        span {
            display: block;
            color: #ccc;
            font-size: 14px;
            margin-top: 5px;
        }
        
        .bottom-content {
            padding-top: 10px;
            border-top: 1px solid #bfa75d;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .bottom-content span {
            color: #ccc;
            font-size: 14px;
        }
        
        .menu {
            display: flex;
            justify-content: space-between;
        }
        
        .menu li {
            height: 25px;
            font-size: 16px;
            margin-bottom: 2px;
            padding: 0px 2px;
            cursor: pointer;
            box-shadow: none;
            border-radius: 0;
            justify-content: flex-start;
            align-items: center;
            list-style: none;
        }
        
        .menu li:hover {
            background: #bfa75d;
        }
        
        .menu li i {
            padding: 5px;
        }

        .menu i:hover {
            color: #282828;
        }
        
        .menu i {
            font-size: 1.2rem;
            color: #bfa75d;
            cursor: pointer;
        }
      `
  }

  render() {
    this.updateStyle()

    this.setAttribute('data-id', this._note.id)

    this.innerHTML = `
        ${this._style.outerHTML}
            <div class="details">
                <p>${this._note.title}</p>
                <span>${this._note.body}</span>
            </div>
            <div class="bottom-content">
                <span>${this._note.createdAt}</span>
                <ul class="menu">
                    <li><i class="uil-archive-alt"></i></li>
                    <li><i class="uil uil-trash button-delete"></i></li>
                </ul>
            </div>
      `
    const deleteButton = this.querySelector('.button-delete')
    deleteButton.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('clickDelete'))
    })
  }
}

customElements.define('note-item', NoteItem)
