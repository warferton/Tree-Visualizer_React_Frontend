import React from 'react'
import "../css/menu-column.css"

export default function MenuColumn(){



    return (
        <div className="container">
            <h3 className="navbar-brand brand-lg">Menu</h3>
            
            <hr class="solid"/>

            <div className="create-tree-form">
                <form>{/* TODO:  ADD onSubmit func*/}
                    <div className="form-group">
                        <input className="form-control" type="number" required placeholder="0" pattern="[0-9]" max="50" min="0"/>
                        <label className="label-primary">Nodes</label>
                    </div>

                    <div className="form-group">
                        <input className="btn btn-primary btn-dark btn-lg" type="submit" value="Create Tree"/>
                    </div>
                </form>
            </div>

           <hr class="solid"/>

            <div className="algorithm-select-form">
                <h4 className="navbar-brand">Algorithms</h4>
                <form>{/* TODO:  ADD onSubmit func*/}
                    <div className="form-group algorithm-options">
                        <h3 className="algorithm-option">OPTION</h3>
                        <h3 className="algorithm-option">OPTION</h3>
                        <h3 className="algorithm-option">OPTION</h3>
                        <h3 className="algorithm-option">OPTION</h3>
                        <h3 className="algorithm-option">OPTION</h3>
                    </div>
                    <div className="form-group">
                        <input className="btn btn-primary btn-lg btn-dark" value="Run" type="submit"/>
                    </div>
                </form>
            </div>
        </div>
    )
}