class InputNote extends HTMLElement {
  constructor() {
    super()

    this._style = document.createElement('style')
  }

  connectedCallback() {
    this.render()
    this.addInputEventListeners()
  }

  updateStyle() {
    this._style.textContent = `
        .input_section {
            border-radius: 5px;
            background: #282828;
            width: calc(100% - 15px);
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
            top: 50%;
            left: 50%;
            z-index: 3;
            width: 100%;
            max-width: 1000px;
            justify-content: center;

            max-width: 800px;
            width: 80%;
            margin: 50px auto;
            padding: 16px;
        }

        .input_section h2 {
            padding: 15px 25px;
            border-bottom: 1px solid #bfa75d;
            color: #bfa75d;
        }

        .input_section form {
            margin: 15px 25px 35px;
        }

        .input_section form .input {
            margin-bottom: 20px;
        }

        form .input label {
            font-size: 18px;
            display: block;
            margin-bottom: 6px;
            color: #bfa75d;
        }

        form :where(input, textarea) {
            height: 50px;
            width: 100%;
            outline: none;
            font-size: 17px;
            padding: 0 15px;
            border-radius: 4px;
            border: 1px solid #999;
            background: #282828;
            caret-color: white; /* Mengubah warna kursor */
            color: white;
        }

        form :where(input, textarea):focus {
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.11);
        }

        form .input textarea {
            height: 150px;
            resize: none;
            padding: 8px 15px;
        }

        form button {
            width: 100%;
            height: 50px;
            color: #282828;
            outline: none;
            border: none;
            cursor: pointer;
            font-size: 17px;
            border-radius: 4px;
            background: #bfa75d;
        }
        .invalid {
            border-color: #ff4b2b; /* Ganti warna border saat input invalid */
          }
        `
  }

  render() {
    this.updateStyle()
    this.innerHTML = `
        ${this._style.outerHTML}
        <section class="input_section">
        <h2>Tambahkan Catatan Baru</h2>
        <form id="inputNote">
            <div class="input">
                <label for="inputNoteTitle">Judul Catatan</label>
                <input id="inputNoteTitle" type="text"
                name="title"
                required
                pattern="^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$"
                autocomplete="off">
            </div>
            <div class="input">
                <label for="inputNoteDescription">Isi Catatan</label>
                <textarea rows="5" id="inputNoteDescription" type="text"
                name="body"
                required
                autocomplete="off"></textarea>
            </div>
            <button id="noteSubmit" type="submit">Simpan</button>
        </form>
    </section>
      `
  }

  addInputEventListeners() {
    const inputs = this.querySelectorAll('input, textarea')

    inputs.forEach((input) => {
      input.addEventListener('change', this.customValidationInputHandler)
      input.addEventListener('invalid', this.customValidationInputHandler)
    })
  }

  customValidationInputHandler(event) {
    event.target.setCustomValidity('')

    if (event.target.validity.valueMissing) {
      event.target.setCustomValidity('Wajib diisi.')
      return
    }

    if (event.target.validity.patternMismatch) {
      event.target.setCustomValidity(
        'Tidak boleh diawali dengan simbol, mengandung white space atau spasi, dan mengandung karakter spesial seperti dolar ($).',
      )
      return
    }
  }
}

customElements.define('input-note', InputNote)
