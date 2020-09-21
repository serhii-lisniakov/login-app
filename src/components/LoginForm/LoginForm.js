import React, {Component} from 'react'
import {RenderIf} from '../../renderIf'
import {Link} from 'react-router-dom'
import {FormWrapper, FormLogo, FormTitle, FormNameWrapper, FormInput, FormCheckboxLabel, FormCheckbox, FormSubmit, FormActions, CopyRights} from './StyledComponents'

export default class LoginForm extends Component {
    state = {
        firstName: '',
        lastName: '',
        password: '',
        email: '',
        remember: false,
        emailValid: false,
        passwordValid: false,
        formValid: false
    }

    componentDidUpdate() {
        // console.log(this.state)
        // console.log('emailValid  ' , this.state.emailValid)
        // console.log('remember?  ' + this.state.remember)
        // console.log('passValid  ' + this.state.passwordValid)
    }

    validation = (field, e) => {
        
        this.setState({[field]: e.target.value})

        const emailReg = new RegExp(/^([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]{3,})+@([a-zA-Z0-9-]{2,})+\.([a-zA-Z0-9-]{2,})$/);
        const passReg = new RegExp(/^(?=.*[A-Z])([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]{8,})$/);

        e.target.style.borderColor = 'green'

            if (field === 'email') {
                if (!emailReg.test(e.target.value)) e.target.style.borderColor = 'red'
            } 
            else if (field === 'password') {
                if (!passReg.test(e.target.value)) e.target.style.borderColor = 'red'
            }
            else if (field === 'firstName' || field === 'lastName') {
                if (e.target.value.length < 3) e.target.style.borderColor = 'red'
            }

    }

    handleCheckboxChange = () => this.setState({remember: !this.state.remember})

    resetInputs = () => {
        this.setState({
            firstName: '',
            lastName: '',
            password: '',
            email: '',
            remember: false,
            emailValid: false,
            passwordValid: false,
            formValid: false
        })

        document.querySelectorAll(`form > input`).forEach(i => i.style.borderColor = '#ffffff9a')
    }

    render() {
        return (
            <>
                <FormWrapper>
                    {/* logo */}
                    <FormLogo />

                    {/* title */}
                    <RenderIf condition={window.location.href.indexOf('/up') === -1}>
                        <FormTitle>Sign In</FormTitle>
                    </RenderIf>
                    <RenderIf condition={window.location.href.indexOf('/up') !== -1}>
                        <FormTitle>Sign Up</FormTitle>

                    {/* name inputs */}
                        <FormNameWrapper>
                            <FormInput  type='text' 
                                        placeholder='First Name *' 
                                        onChange={this.validation.bind(this, 'firstName')}
                                        value={this.state.firstName}
                                        />
                            <FormInput  type='text' 
                                        placeholder='Last Name *' 
                                        onChange={this.validation.bind(this, 'lastName')}
                                        value={this.state.lastName}
                                        />
                        </FormNameWrapper>
                    </RenderIf>

                    {/* email & pass inputs */}
                        <FormInput  type='text' 
                                    placeholder='Email *' 
                                    onChange={this.validation.bind(this, 'email')}
                                    value={this.state.email}  
                        />
                        <FormInput  type='password' 
                                    placeholder='Password *' 
                                    name='password' 
                                    autoComplete='on' 
                                    onChange={this.validation.bind(this, 'password')}
                                    value={this.state.password}
                        />

                    {/* checkbox in */}
                    <RenderIf condition={window.location.href.indexOf('/up') === -1}> 
                        <div>
                            <FormCheckbox id='remember' type='checkbox' value={this.state.remember} onClick={this.handleCheckboxChange}/>
                            <FormCheckboxLabel htmlFor='remember'>Remember me</FormCheckboxLabel>
                        </div>
                        <FormSubmit type='submit' value='Sign In' />
                        <FormActions>
                            <Link to='/in'>Forgot password?</Link>
                            <Link to='/up' onClick={this.resetInputs}>Dont have an account? Sign up</Link>
                        </FormActions>
                    </RenderIf>
                        
                    {/* checkbox up */}
                    <RenderIf condition={window.location.href.indexOf('/up') !== -1}>
                        <div>
                            <FormCheckbox id='remember' type='checkbox' value={this.state.remember} onClick={this.handleCheckboxChange}/>
                            <FormCheckboxLabel htmlFor='remember'>I want to recieve an inspiration, marketing promotions and updates via email.</FormCheckboxLabel>
                        </div>
                        <FormSubmit type='submit' value='Sign Up' />
                        <FormActions style={{justifyContent: 'flex-end'}}>
                            <Link to='/in' onClick={this.resetInputs}>Already have an account? Sign in</Link>
                        </FormActions>
                    </RenderIf>

                    {/* CopyRights */}
                    <CopyRights>Copyright © Serhii Lisniakov 2020</CopyRights>

                </FormWrapper>
            </>
        )
    }
} 