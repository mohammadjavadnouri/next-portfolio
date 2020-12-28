import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch';
import { Component } from 'react';


export default class About extends Component { 

static async getInitialProps () {
        const res = await fetch("https://api.github.com/users/mohammadjavadnouri");
        const data = await res.json();
        
    return { user: data}
    }

    render() {

        const { user } = this.props;

        return (
            <Layout title="About">
                <p>Maybe a front-end-web-developer</p>
                <p>this is{user.name}</p>
                <img src={user.avatar_url} alt="myphoto" height="200px"/>
                <a href="https://github.com/mohammadjavadnouri">Click here to see my latest works</a>
            </Layout>
        )
    }
}

