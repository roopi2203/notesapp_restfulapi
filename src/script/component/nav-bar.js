class Navbar extends HTMLElement {
  constructor() {
    super()

    this._style = document.createElement('style')
  }

  connectedCallback() {
    this.render()
  }

  updateStyle() {
    this._style.textContent = `
        .wrapper {
            padding-block: 32px;
            padding-inline: 24px;
            background-color: #121212;
            color: beige;
        }
        
        .brand-name {
            font-size: 2rem;
            text-decoration: inherit;
            color: inherit;
            color: #bfa75d;
        }
        
        
        `
  }

  render() {
    this.updateStyle()
    this.innerHTML = `
        ${this._style.outerHTML}
                <div class="wrapper">
                    <a href="#" class="brand-name">Notes App</a>
                   
                </div>
      `
  }
}

customElements.define('nav-bar', Navbar)
