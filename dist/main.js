;(() => {
  var e = {
      463: () => {
        class e extends HTMLElement {
          constructor() {
            super(), (this._style = document.createElement('style'))
          }
          connectedCallback() {
            this.render()
          }
          updateStyle() {
            this._style.textContent =
              '\n        .input_section {\n            border-radius: 5px;\n            background: #fff;\n            width: calc(100% - 15px);\n            box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);\n            top: 50%;\n            left: 50%;\n            z-index: 3;\n            width: 100%;\n            max-width: 1000px;\n            justify-content: center;\n        \n            max-width: 800px;\n            width: 80%;\n            margin: 50px auto;\n            padding: 16px;\n        }\n        \n        .input_section h2 {\n            padding: 15px 25px;\n            border-bottom: 1px solid #ccc;\n        }\n        \n        .input_section form {\n            margin: 15px 25px 35px;\n        }\n        \n        .input_section form .input {\n            margin-bottom: 20px;\n        }\n        \n        form .input label {\n            font-size: 18px;\n            display: block;\n            margin-bottom: 6px;\n        }\n        \n        form :where(input, textarea) {\n            height: 50px;\n            width: 100%;\n            outline: none;\n            font-size: 17px;\n            padding: 0 15px;\n            border-radius: 4px;\n            border: 1px solid #999;\n        }\n        \n        form :where(input, textarea):focus {\n            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.11);\n        }\n        \n        form .input textarea {\n            height: 150px;\n            resize: none;\n            padding: 8px 15px;\n        }\n        \n        form button {\n            width: 100%;\n            height: 50px;\n            color: #fff;\n            outline: none;\n            border: none;\n            cursor: pointer;\n            font-size: 17px;\n            border-radius: 4px;\n            background: #2d3e50;\n        }\n        '
          }
          render() {
            this.updateStyle(),
              (this.innerHTML = `\n        ${this._style.outerHTML}\n        <section class="input_section">\n        <h2>Tambahkan Catatan Baru</h2>\n        <form id="inputNote">\n            <div class="input">\n                <label for="inputNoteTitle">Title</label>\n                <input id="inputNoteTitle" type="text"\n                name="title"\n                required\n                autocomplete="off">\n            </div>\n            <div class="input">\n                <label for="inputNoteDescription">Description</label>\n                <textarea rows="5" id="inputNoteDescription" type="text"\n                name="body"\n                required\n                autocomplete="off"></textarea>\n            </div>\n            <button id="noteSubmit" type="submit">Add Note</button>\n        </form>\n    </section>\n      `)
          }
        }
        customElements.define('input-note', e)
      },
      131: () => {
        class e extends HTMLElement {
          constructor() {
            super(), (this._style = document.createElement('style'))
          }
          connectedCallback() {
            this.render()
          }
          updateStyle() {
            this._style.textContent =
              '\n        .wrapper {\n            padding-block: 32px;\n            padding-inline: 24px;\n            background-color: #2d3e50;\n            color: beige;\n        }\n        \n        .brand-name {\n            font-size: 2rem;\n            text-decoration: inherit;\n            color: inherit;\n        }\n        \n        \n        '
          }
          render() {
            this.updateStyle(),
              (this.innerHTML = `\n        ${this._style.outerHTML}\n                <div class="wrapper">\n                    <a href="#" class="brand-name">Notes App</a>\n                   \n                </div>\n      `)
          }
        }
        customElements.define('nav-bar', e)
      },
      578: () => {
        class e extends HTMLElement {
          constructor() {
            super(),
              (this._note = {
                id: 0,
                title: 'NEED_TITLE',
                body: 'NEED_BODY',
                createdAt: '',
              }),
              (this._style = document.createElement('style'))
          }
          setNote(e) {
            ;(this._note.id = e.id),
              (this._note.title = e.title),
              (this._note.body = e.body),
              (this._note.createdAt = e.createdAt),
              this.render()
          }
          connectedCallback() {
            this.render()
          }
          updateStyle() {
            this._style.textContent =
              '\n        li {\n            height: 250px;\n            list-style: none;\n            border-radius: 5px;\n            padding: 15px 20px 20px;\n            background: #435B66;\n            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);\n        }\n\n        .note {\n            display: flex;\n            flex-direction: column;\n            justify-content: space-between;\n        }\n        \n        .details {\n            max-height: 165px;\n            overflow-y: auto;\n        }\n        \n        .details::-webkit-scrollbar {\n            width: 0;\n        }\n        \n        .details:hover::-webkit-scrollbar {\n            width: 5px;\n        }\n        \n        .details:hover::-webkit-scrollbar-track {\n            background: #f1f1f1;\n            border-radius: 25px;\n        }\n        \n        .details:hover::-webkit-scrollbar-thumb {\n            background: #e6e6e6;\n            border-radius: 25px;\n        }\n        \n        .note p {\n            font-size: 20px;\n            font-weight: 500;\n            color: #f1f1f1;\n        }\n        \n        .note span {\n            display: block;\n            color: #ccc;\n            font-size: 14px;\n            margin-top: 5px;\n        }\n        \n        .bottom-content {\n            padding-top: 10px;\n            border-top: 1px solid #ccc;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n        }\n        \n        .bottom-content span {\n            color: #ccc;\n            font-size: 14px;\n        }\n        \n        .menu {\n            display: flex;\n            justify-content: space-between;\n        }\n        \n        .menu li {\n            height: 25px;\n            font-size: 16px;\n            margin-bottom: 2px;\n            padding: 0px 2px;\n            cursor: pointer;\n            box-shadow: none;\n            border-radius: 0;\n            justify-content: flex-start;\n            align-items: center;\n        }\n        \n        .menu li:hover {\n            background: #222831;\n        }\n        \n        .menu li i {\n            padding: 5px;\n        }\n        \n        .menu i {\n            font-size: 1.2rem;\n            color: #f1f1f1;\n            // color: #777;\n            cursor: pointer;\n        }\n      '
          }
          render() {
            this.updateStyle(),
              this.setAttribute('data-id', this._note.id),
              (this.innerHTML = `\n        ${this._style.outerHTML}\n        <section class="note-list" id="noteList">\n            <li class="note" id="noted">\n                <div class="details">\n                    <p>${this._note.title}</p>\n                    <span>${this._note.body}</span>\n                </div>\n                <div class="bottom-content">\n                    <span>${this._note.createdAt}</span>\n                    <ul class="menu">\n                        <li><i class="uil uil-pen"></i></li>\n                        <li><i class="uil uil-trash"></i></li>\n                    </ul>\n                </div>\n            </li>\n        </section>\n      `)
          }
        }
        customElements.define('note-item', e)
      },
      881: () => {
        class e extends HTMLElement {
          constructor() {
            super(),
              (this._noteList = []),
              (this._style = document.createElement('style'))
          }
          setNoteList(e) {
            ;(this._noteList = e), this.render()
          }
          connectedCallback() {
            this.render()
          }
          updateStyle() {
            this._style.textContent =
              '\n        note-list {\n            margin: 50px;\n            display: grid;\n            gap: 25px;\n            grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));\n        }\n        \n      '
          }
          render() {
            this.updateStyle()
            const e = this._noteList.map((e) => {
              const t = document.createElement('note-item')
              return t.setNote(e), t
            })
            ;(this.innerHTML = ''), this.append(this._style, ...e)
          }
        }
        customElements.define('note-list', e)
      },
    },
    t = {}
  function n(i) {
    var o = t[i]
    if (void 0 !== o) return o.exports
    var s = (t[i] = { exports: {} })
    return e[i](s, s.exports, n), s.exports
  }
  ;(() => {
    'use strict'
    n(131), n(463), n(881), n(578)
    const e = [
      {
        id: 'notes-jT-jjsyz61J8XKiI',
        title: 'Welcome to Notes, Dimas!',
        body: 'Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.',
        createdAt: '2022-07-28T10:03:12.594Z',
        archived: !1,
      },
      {
        id: 'notes-aB-cdefg12345',
        title: 'Meeting Agenda',
        body: 'Discuss project updates and assign tasks for the upcoming week.',
        createdAt: '2022-08-05T15:30:00.000Z',
        archived: !1,
      },
      {
        id: 'notes-XyZ-789012345',
        title: 'Shopping List',
        body: 'Milk, eggs, bread, fruits, and vegetables.',
        createdAt: '2022-08-10T08:45:23.120Z',
        archived: !1,
      },
      {
        id: 'notes-1a-2b3c4d5e6f',
        title: 'Personal Goals',
        body: 'Read two books per month, exercise three times a week, learn a new language.',
        createdAt: '2022-08-15T18:12:55.789Z',
        archived: !1,
      },
      {
        id: 'notes-LMN-456789',
        title: 'Recipe: Spaghetti Bolognese',
        body: 'Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...',
        createdAt: '2022-08-20T12:30:40.200Z',
        archived: !1,
      },
      {
        id: 'notes-QwErTyUiOp',
        title: 'Workout Routine',
        body: 'Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.',
        createdAt: '2022-08-25T09:15:17.890Z',
        archived: !1,
      },
      {
        id: 'notes-abcdef-987654',
        title: 'Book Recommendations',
        body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
        createdAt: '2022-09-01T14:20:05.321Z',
        archived: !1,
      },
      {
        id: 'notes-zyxwv-54321',
        title: 'Daily Reflections',
        body: 'Write down three positive things that happened today and one thing to improve tomorrow.',
        createdAt: '2022-09-07T20:40:30.150Z',
        archived: !1,
      },
      {
        id: 'notes-poiuyt-987654',
        title: 'Travel Bucket List',
        body: '1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA',
        createdAt: '2022-09-15T11:55:44.678Z',
        archived: !1,
      },
      {
        id: 'notes-asdfgh-123456',
        title: 'Coding Projects',
        body: '1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project',
        createdAt: '2022-09-20T17:10:12.987Z',
        archived: !1,
      },
      {
        id: 'notes-5678-abcd-efgh',
        title: 'Project Deadline',
        body: 'Complete project tasks by the deadline on October 1st.',
        createdAt: '2022-09-28T14:00:00.000Z',
        archived: !1,
      },
      {
        id: 'notes-9876-wxyz-1234',
        title: 'Health Checkup',
        body: 'Schedule a routine health checkup with the doctor.',
        createdAt: '2022-10-05T09:30:45.600Z',
        archived: !1,
      },
      {
        id: 'notes-qwerty-8765-4321',
        title: 'Financial Goals',
        body: '1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.',
        createdAt: '2022-10-12T12:15:30.890Z',
        archived: !1,
      },
      {
        id: 'notes-98765-54321-12345',
        title: 'Holiday Plans',
        body: 'Research and plan for the upcoming holiday destination.',
        createdAt: '2022-10-20T16:45:00.000Z',
        archived: !1,
      },
      {
        id: 'notes-1234-abcd-5678',
        title: 'Language Learning',
        body: 'Practice Spanish vocabulary for 30 minutes every day.',
        createdAt: '2022-10-28T08:00:20.120Z',
        archived: !1,
      },
    ]
    document.addEventListener('DOMContentLoaded', () => {
      const t = document.querySelector('note-list')
      t ? t.setNoteList(e) : console.error('note-list element not found')
    })
    const t = document.querySelector('form'),
      i = t.elements.inputNoteTitle,
      o = t.elements.inputNoteDescription
    t.addEventListener('submit', (e) => e.preventDefault())
    const s = (e) => {
      e.target.setCustomValidity(''),
        e.target.validity.valueMissing &&
          e.target.setCustomValidity('Wajib diisi.')
    }
    i.addEventListener('change', s),
      i.addEventListener('invalid', s),
      o.addEventListener('change', s),
      o.addEventListener('invalid', s)
  })()
})()
