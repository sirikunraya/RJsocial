import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';

class Login extends Component {
    loginSubmit(event){
        event.preventDefault();
        console.log('Login Submit');
    }
    render() {
        return (
            <div id="login-container">
                <div id="login-brand">
                <div>
                    <h1>SICC Social</h1>
                    <h3>สังคมออนไลน์
                        วิทยาลัยการอาชีพสอง</h3> </div>
                </div>
                <div id="login-form">
                <div>
                    <h2>เข้าสู่ระบบ</h2>
                    <hr />
                    <form onSubmit={this.loginSubmit }>
                        <div class="social-form-div">
                            <input type="text" id="username" name="username"
                            placeholder="ชื่อผู้ใช้" />
                            <div class="social-form-div">
                            <input type="password" id="userpass" name="userpass"
                            placeholder="รหัสผ่าน" />
                            </div>
                            <div class="social-form-div">
                                <button>ลงชื่อเข้าใช้</button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;