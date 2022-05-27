import styled from 'styled-components';
import { useNavigate, Outlet } from 'react-router-dom';
import { getSteps } from '../variables/steps';

const StyledLink = styled.button({
    width: '100px',
    height: '30px',
    borderRadius: '5px',
    backgroundColor: 'royalblue',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer',
});

export default function Steps() {
    const navigate = useNavigate();
    const steps = getSteps();
    let currentStep = 1;

    function stepBackward() {
        currentStep--;
        console.log(currentStep);
        navigate(`/steps/${currentStep}`);
    }

    function stepForward() {
        currentStep++;
        console.log(currentStep);
        navigate(`/steps/${currentStep}`);
    }

    return (
        <div>
            <h1>Steps</h1>
            <Outlet />
            <StyledLink onClick={() => stepBackward()}>Step backward</StyledLink>
            <StyledLink onClick={() => stepForward()}>Step forward</StyledLink>
        </div>
    )
}