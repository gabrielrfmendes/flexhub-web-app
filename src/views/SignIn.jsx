import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { 
    useEffect,
    useContext, 
    useState 
} from 'react';
import AuthenticationContext from '../contexts/AuthenticationContext';
import authenticate from '../services/authenticate';

const SignInView = styled.main({
    backgroundColor: 'purple',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const SignInContainer = styled.div({
    backgroundColor: 'white',
    height: '460px',
    width: '410px',
    padding: '40px',
    borderRadius: '15px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
});

const SignInHeader = styled.header({
    height: '20%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
});

const SignInMain = styled.main({
    height: '80%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
});

const SignInFooter = styled.footer({
    height: '20%',
    width: '100%',
    display: 'flex',
});

const SignInTitle = styled.h1({
    fontSize: '30px',
    fontWeight: 'bold',
    color: 'black',
    margin: '0',
});

const SignInLabel = styled.label({
    width: '100%',
    margin: '5px',
    color: 'black',
    fontSize: '18px',
    display: 'flex',
    flexDirection: 'column',
});

const SignInInput = styled.input({
    backgroundColor: 'white',
    fontSize: '18px',
    height: '40px',
    padding: '0 5px',
    borderRadius: '5px',
    border: '1px solid black',
});

const SignInButton = styled.button({
    backgroundColor: 'gray',
    height: '40px',
    width: '100%',
    margin: '10px',
    fontSize: '18px',
    color: 'white',
    textTransform: 'uppercase',
    borderRadius: '5px',
    border: '1px solid black',
    ':hover': {
        backgroundColor: 'lightblue',
    }
});

function SignIn() {
    const { authenticated } = useContext(AuthenticationContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (authenticated) {
            return navigate('/');
        }
    },[authenticated]);

    const [credentials, setCredentials] = useState({
        email: '',
        password: '',
    });
    
    function handleInput(event) {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value,
        });
    };

    function handleSignIn(event) {
        event.preventDefault();
        authenticate(credentials);
    };

    return (
        <SignInView>
            <SignInContainer>
                <SignInHeader>
                    <SignInTitle>
                        Logo
                    </SignInTitle>
                    <SignInTitle>
                        Sign In
                    </SignInTitle>
                </SignInHeader>
                <SignInMain>
                    <SignInLabel>
                        Usúario
                        <SignInInput 
                            type='text'
                            name='user' 
                            placeholder='Usuário'
                            onInput={handleInput}
                        />
                    </SignInLabel>
                    <SignInLabel>
                        Senha
                        <SignInInput 
                            type='password'
                            name='password'
                            placeholder="Senha" 
                            onInput={handleInput}
                        />
                    </SignInLabel>
                    <SignInButton onClick={handleSignIn}>Entrar</SignInButton>
                </SignInMain>
                <SignInFooter>

                </SignInFooter>
            </SignInContainer>
        </SignInView>
    )
}

export default SignIn;
