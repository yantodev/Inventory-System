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
                        <a class="card" href="https://codetheweb.blog/2017/10/06/html-syntax/" style="--bg-img: url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/html-syntax/cover.jpg)">                       
                            <div>
                                <h1>HTML Syntax</h1>
                                <p>The syntax of a language is how it works. How to actually write it. Learn HTML syntax…</p>
                                <div class="date">6 Oct 2017</div>
                                <div class="tags">
                                    <div class="tag">HTML</div>
                                </div>
                            </div> 
                        </a>                       
                    </div>                    
                </section>
            </>
        );
    }
}

export default Diskon;