import { MouseEventHandler } from 'react';
import styled from 'styled-components'

const Label = styled.label<{ $selected?: boolean; }>`
	background: ${props => props.$selected ? "#000000" : "#d1d5db"};
	width: ${props => props.$selected ? "15px" : "5px"};
	height: 5px;
	border-radius: 50px;
	cursor: pointer;
  margin-right: 0.5rem;
	transition: all 0.5s ease;
`

interface IndicatorProps {
	totalSteps: number
	currentStep: number
	setCurrentStep: MouseEventHandler<HTMLButtonElement>
}

const Indicator = ({totalSteps, currentStep, setCurrentStep}: IndicatorProps)  => {
	const arrTotalSteps = []

	for(let i = 0; i < totalSteps; i++) {
		arrTotalSteps.push(i)
	}

	return(
		<>
    <input type="radio" name="bullet" id="bullet0" className="hidden"/>
    <input type="radio" name="bullet" id="bullet1" className="hidden"/>
    <input type="radio" name="bullet" id="bullet2" className="hidden"/>
		
    <div className="flex">
		{
			arrTotalSteps.map((e) => e === currentStep ? <Label key={`bullet${e}`} htmlFor={`bullet${e}`} $selected></Label> : <Label key={`bullet${e}`} htmlFor={`bullet${e}`} onClick={() => setCurrentStep(e)}></Label>)
		}
    </div>
		</>
	)
}

export default Indicator