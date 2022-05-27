import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';


const View = styled.div({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
});

const Card = styled.div({
    backgroundColor: '#fff',
    borderRadius: '5px',
    padding: '20px',
    margin: '10px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)'
});

const CardHeader = styled.header({
    height: '100px',
    width: '800px',
    display: 'flex',
    flexDirection: 'column'
});

const CardMain = styled.main({
    display: 'flex',
    flexDirection: 'column',
    height: '200px'
});

const CardFooter = styled.footer({
    display: 'flex',
    flexDirection: 'column',
    height: '100px',
});

const Container = styled.div({
    width: '400px',
    height: '10px',
    borderRadius: '5px',
    margin: '10px 0',
    display: 'flex',
    alignItems: 'center',
});

const Circle = styled.div({
    width: '20px',
    height: '20px',
    backgroundColor: '#d8d5d5',
    borderRadius: '50%',
    margin: '0 -2px',
    position: 'sticky',
});

const Bar = styled.div({
    flex: 1,
    height: '100%',
    backgroundColor: '#d8d5d5',
    
});

const Button = styled.button({
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

function ProgressBar() {

    return (
        <Container>
            <Circle style={{ backgroundColor: 'royalblue' }} />
            <Bar style={{ backgroundColor: 'royalblue' }} />
            <Circle style={{ backgroundColor: 'royalblue' }} />
            <Bar />
            <Circle />
        </Container>
    );
}

function Step1() {
    return (
        <div>
            <h1>Step 1</h1>
        </div>
    )
}

function Step2() {
    return (
        <div>
            <h1>Step 2</h1>
        </div>
    )
}

function Step3() {
    return (
        <div>
            <h1>Step 3</h1>
        </div>
    )
}

function View1 () {
    return (
        <View>
            <Card>
                <CardHeader>
                    <ProgressBar />
                </CardHeader>
                <CardMain>
                    <Routes>
                        <Route path='step1' element={<Step1 />} />
                        <Route path='step2' element={<Step2 />} />
                        <Route path='step3' element={<Step3 />} />
                    </Routes>
                </CardMain>
                <CardFooter>
                    <Button>Anterior</Button>
                    <Button>Próximo</Button>
                </CardFooter>
            </Card>
        </View>
    )
}

export default View1;