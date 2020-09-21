import styled from 'styled-components';
import logo from './padlock.svg'
import check from './check.svg'

export const FormWrapper = styled.form`
    width: 350px;
    padding: 25px 15px;
    color: #ffffff9a;
`
export const FormLogo = styled.div`
    margin: 0 auto;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: url('${logo}') center center no-repeat, #f569ac;
    background-size: 30px;
`
export const FormTitle = styled.h1`
    font-size: 24px;
    margin-top: 10px;
    margin-bottom: 0px;
    color: #fff;
    letter-spacing: 3px;
    text-align: center;
`
export const FormNameWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    & > input {
        width: 46%
    }
`
export const FormInput = styled.input`
    width: 100%;
    height: 40px;
    padding: 0 15px;
    border: 1px solid #ffffff9a;
    background: none;
    color: #fff;
    border-radius: 5px;
    outline: none;
    margin-top: 20px;
    font-size: 14px;
    &::placeholder {
        font-size: 12px;
        color: #ffffff9a;
    }
`
export const FormCheckboxLabel = styled.label`
    display: flex;
    align-items:center;
    margin-top: 20px;
    cursor: pointer;
    font-size: 12px;
    &::before {
        content: '';
        min-width: 13px;
        min-height: 13px;
        background: none;
        border: 1px solid #ffffff9a;
        border-radius: 50%;
        margin-right: 10px;
        transition: .2s;
    }
`
export const FormCheckbox = styled.input`
    display: flex;  
    width: 0.1px;
    height: 0.1px;
    margin: 0;
    opacity: 0;
    transition: .3s;
    &:checked + label::before {
        background: url('${check}') center center no-repeat, #f569ac;
        background-size: 10px;
        border-color: #f569ac;
        transition: .2s;
    }
`
export const FormSubmit = styled.input`
    width: 100%;
    height: 30px;
    padding: 0 15px;
    border: none;
    background: #59b6d3;
    color: #000;
    text-transform: uppercase;
    border-radius: 5px;
    outline: none;
    margin-top: 20px;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
    letter-spacing: 1px;
    &:active {
        background: #4c9cb4;
    }
    box-shadow: 0 0 20px 0 #ffffff1e; 
`
export const FormActions = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    & > a {
        color: #59b6d3;
        text-decoration: none !important;
        font-size: 10px;
        letter-spacing: 1px;
    }
`
export const CopyRights = styled.h6`
    margin: 0;
    margin-top: 50px;
    font-weight: normal;
    text-align: center;
`