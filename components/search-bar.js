import React, { Component } from 'react'

export default class Search extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const movieQuery = {
      movie: formData.get('movie')
    }
  }

  render() {
    return (
      <div className="container">
	      <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <div id="imaginary_container">
              <div className="input-group stylish-input-group">
                <input name="movie" type="text" className="form-control"  placeholder="Search" >
                <span className="input-group-addon">
                  <button type="submit">
                    <span className="glyphicon glyphicon-search"></span>
                  </button>
                </span>
              </div>
            </div>
          </div>
	      </div>
      </div>
    )
  }
}
