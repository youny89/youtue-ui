import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import { useState } from 'react';

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${({theme})=>theme.bg};
    color:${({theme})=>theme.text};

    display: flex;
    flex-direction: column;
    align-items: center;

    form {
        padding:20px;
        width:400px;
        height: fit-content;
        box-shadow: 1px 2px 8px 3px rgba(0,0,0,0.6);
        margin-top:100px;
        border-radius: 10px;
        position: relative;
}
`

const InputItem = styled.div`
    margin-bottom:22px;
    label{
        display: block;
        color:${({theme})=>theme.lightText};
        font-size:13px;
        margin-bottom:12px;
    }
    input {
        background-color: transparent;
        border:none;
        outline:none;
        color:${({theme})=>theme.lightText};
        border: solid 2px transparent;
        padding:8px 6px;
        outline:none;
        font-size:16px;
        border-radius: 7px;
        &:focus{
            border: solid 2px ${({theme})=>theme.primary};
            width:100%;
            outline:none;
        }
    }
    button{
        display: block;
        background-color: transparent;
        color:${({theme})=>theme.primary};
        width:100%;
        padding:10px;
        border: solid 1px ${({theme})=>theme.primary};
        cursor: pointer;
        border-radius: 10px;;
        font-family: 'Courier New', Courier, monospace;
        font-size: 16px;
        font-weight:bold;
        &:hover{
            opacity: 0.8;
        }
    }
`
const Title = styled.h3`
    color:${({theme})=>theme.text};
    margin-bottom:40px;
`
const BackButton = styled.div`
    position: absolute;
    top:-40px;
    left:0;
    font-size:14px;

    a{
        display: flex;
        align-items: center;
        gap:20px;
        color:${({theme})=>theme.text};
    }

    &:hover{
        opacity: 0.7;;
    }
`
const ActionButton = styled.div`
    background-color: transparent;
    color:${({theme})=>theme.text};
    display: flex;
    align-items: center;
    justify-content: center;
    gap:12px;
    cursor: pointer;
    font-size:13px;
    transition: ease-in-out .5s ;
    svg{
        font-size:20px;
    }
    &:hover {
        opacity: 0.7;
        gap:20px;
    }
`
const ErrorMessage = styled.div`
    padding:8px;
    color:tomato;
    font-size:14px;
    margin-bottom:20px;
`
const Login = () => {
    const [isLogin,setIsLogin] = useState(true);
    const [isSubmiting,setIsSubmiting] = useState(false);
    const [error, setError] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');


    const handleSubmit = async e => {
        e.preventDefault();
        const requestUrl = isLogin ? 'auth/login':'auth/signup';

        const payload = {
            email,
            password,
            passwordConfirm
        }
        try {
            setIsSubmiting(true)
            const response =await fetch(requestUrl,{
                method:"post",
                headers : { "Content-Type":"application/json"},
                body:JSON.stringify(payload)
            })

            if(!response.ok && response.status === 400) {
                const errorData = await response.json();
                setError(errorData.message);
            }
            
        } catch (error) {
            console.log(error);
            setError(error);
        } finally {
            setIsSubmiting(false)
        }
    }

    return (
        <Container>
            <form>
                <BackButton>
                    <Link to="/">
                        <ArrowBackIosNewOutlinedIcon />
                        홈 으로 돌아가기
                    </Link>
                </BackButton>
                <Title>Youtube-Clone {isLogin ? '로그인':'회원가입'}</Title>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <InputItem>
                    <label htmlFor='email'>이메일</label>
                    <input type='email' name='email' placeholder='email' required onChange={e=> setEmail(e.target.value)}/>
                </InputItem>
                <InputItem>
                    <label htmlFor='password'>비밀번호</label>
                    <input type="password" placeholder='비밀번호' required onChange={e=> setPassword(e.target.value)}/>
                </InputItem>
                {
                    !isLogin && <InputItem>
                    <label htmlFor='password2'>비밀번호 확인</label>
                    <input type="password" placeholder='비밀번호 확인' required onChange={e=> setPasswordConfirm(e.target.value)}/>
                </InputItem> 
                }
                <InputItem>
                    <button disabled={isSubmiting} type="submit" onClick={handleSubmit}>{isLogin ? '로그인':'회원가입'}</button>
                </InputItem>
                <ActionButton onClick={()=>setIsLogin(prev=>!prev)}>{isLogin ? '회원가입 하러 가기':'로그인 하기'} <ArrowForwardOutlinedIcon /></ActionButton>
            </form>
        </Container>
    )
}

export default Login