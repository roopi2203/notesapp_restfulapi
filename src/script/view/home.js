import Utils from '../utils.js'
import Toastify from 'toastify-js'
import { animate, stagger } from 'motion'

function home() {
  const baseUrl = 'https://notes-api.dicoding.dev/v2'

  const showLoading = () => {
    let loadingElement = document.querySelector('loading-element')

    if (!loadingElement) {
      loadingElement = document.createElement('loading-element')
      document.body.appendChild(loadingElement)

      setTimeout(() => {
        animateLoading()
      }, 50)
    }
  }

  const hideLoading = () => {
    const loadingElement = document.querySelector('loading-element')
    if (loadingElement) {
      setTimeout(() => {
        loadingElement.remove()
      }, 300)
    }
  }

  const animateLoading = () => {
    document.addEventListener('DOMContentLoaded', () => {
      const numSegments = document.querySelectorAll(
        'loading-element .segment',
      ).length
      const offset = 0.09

      animate(
        'loading-element .segment',
        { opacity: [0, 1, 0] },
        {
          offset: [0, 0.1, 1],
          duration: numSegments * offset,
          delay: stagger(offset),
          repeat: Infinity,
        },
      )
    })
  }

  const fetchInterceptor = (url, options) => {
    showLoading()
    return fetch(url, options)
      .then((response) => {
        hideLoading()
        return response
      })
      .catch((error) => {
        hideLoading()
        throw error
      })
  }

  const getNote = () => {
    fetchInterceptor(`${baseUrl}/notes`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.error) {
          showResponseMessage(responseJson.message)
        } else {
          displayResult(responseJson)
        }
      })
      .catch((error) => {
        showResponseMessage(error)
      })
  }

  const insertNote = (note) => {
    fetchInterceptor(`${baseUrl}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Gagal menambahkan catatan')
        }
        return response.json()
      })
      .then((responseJson) => {
        showSuccessToast('Catatan berhasil ditambahkan!')
        getNote()
      })
      .catch((error) => {
        showErrorToast(error.message)
      })
  }

  const removeNote = (noteId) => {
    fetchInterceptor(`${baseUrl}/notes/${noteId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Gagal menghapus catatan')
        }
        return response.json()
      })
      .then((responseJson) => {
        showSuccessToast('Catatan berhasil dihapus!')
        getNote()
      })
      .catch((error) => {
        showErrorToast(error.message)
      })
  }

  function archiveNote(noteId) {
    fetchInterceptor(`${baseUrl}/notes/${noteId}/archive`, {
      method: 'POST',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Gagal mengarsipkan catatan')
        }
        return response.json()
      })
      .then((responseJson) => {
        showSuccessToast('Catatan berhasil diarsipkan!')
        getNote()
      })
      .catch((error) => {
        showErrorToast(error.message)
      })
  }

  const displayResult = (responseJson) => {
    if (responseJson.status === 'success') {
      const notes = responseJson.data

      const noteListElement = document.querySelector('note-list')
      if (noteListElement) {
        Utils.emptyElement(noteListElement)

        notes.forEach((note) => {
          const noteItemElement = document.createElement('note-item')
          noteItemElement.setNote({
            id: note.id,
            title: note.title,
            body: note.body,
            createdAt: note.createdAt,
          })
          noteItemElement.addEventListener('clickDelete', () => {
            removeNote(note.id)
          })

          noteListElement.appendChild(noteItemElement)
        })
      } else {
        console.error("Element with ID 'noteList' not found.")
      }
    } else {
      console.error(`Error: ${responseJson.message}`)
      showErrorAlert(responseJson.message)
    }
  }

  const showNoteList = () => {
    Array.from(document.querySelectorAll('.container > section')).forEach(
      (element) => {
        Utils.hideElement(element)
      },
    )
    const noteList = document.querySelector('.note-list')
    if (noteList) {
      Utils.showElement(noteList)
    } else {
      console.error("Element with class 'note-list' not found.")
    }
  }

  const onNoteFormSubmit = async (event) => {
    event.preventDefault()

    const title = event.target.elements.title.value
    const body = event.target.elements.body.value

    try {
      await insertNote({ title, body })
      showNoteList()
      getNote()
      event.target.reset()
    } catch (error) {
      showResponseMessage(error.message)
    }
  }

  const showSuccessToast = (message) => {
    Toastify({
      text: message,
      backgroundColor: 'linear-gradient(to right, #1a6d6d, #5c8a32)',
      position: 'top-right',
      duration: 2000,
      className: 'toastify-popup',
    }).showToast()
  }

  const showErrorToast = (message) => {
    Toastify({
      text: message,
      backgroundColor: 'linear-gradient(to right, #8b0000, #ff4b2b)',
      position: 'top-right',
      duration: 2000,
      className: 'toastify-popup',
    }).showToast()
  }

  const showResponseMessage = (message = 'Check your internet connection') => {
    alert(message)
  }

  document.addEventListener('DOMContentLoaded', () => {
    const inputNoteForm = document.getElementById('inputNote')
    inputNoteForm.addEventListener('submit', onNoteFormSubmit)

    getNote()
  })
}

export default home
