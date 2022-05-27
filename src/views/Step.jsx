import { useParams } from 'react-router-dom';
import { getStep } from '../variables/steps';

export default function Invoice() {
    const params = useParams();
    const step = getStep(parseInt(params.stepId));

    return (
        <div>
            <h1>{step.title}</h1>
        </div>
    );
}