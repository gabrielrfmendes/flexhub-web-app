let steps = [
    {
        id: 1,
        title: 'Step 1',
    },
    {
        id: 2,
        title: 'Step 2',
    },
    {
        id: 3,
        title: 'Step 3',
    },
];
  
export function getSteps() {
    return steps;
}

export function getStep(stepId) {
    console.log(steps.find(step => step.id === stepId));
    return steps.find(step => step.id === stepId);
}