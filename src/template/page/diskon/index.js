import React, { Component } from 'react';
import './diskon.css'


class Diskon extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <section class="cards-wrapper">
                    <div class="card-grid-space">
                        <div class="num">01</div>                         
                            <div>
                                <h1>HTML Syntax</h1>
                                <p>The syntax of a language is how it works. How to actually write it. Learn HTML syntax…</p>
                                <div class="date">6 Oct 2017</div>
                                <div class="tags">
                                    <div class="tag">HTML</div>
                                </div>
                            </div>                                               
                    </div>                    
                </section>
            </>
        );
    }
}

export default Diskon;